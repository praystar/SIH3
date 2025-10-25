// prisma/seed.js
import fs from "fs";
import path from "path";
import csv from "csv-parser";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const CSV_PATH = path.join(process.cwd(), "data", "microplastics.csv");

// Helpers to normalize enums
function parseConcentration(raw) {
  if (!raw) return null;
  const s = raw.trim().toLowerCase();
  if (s.startsWith("low")) return "LOW";
  if (s.startsWith("medium")) return "MEDIUM";
  if (s.startsWith("high")) return "HIGH";
  return null;
}

function parseStatus(raw) {
  if (!raw) return null;
  const s = raw.trim().toLowerCase();
  if (s === "ok") return "OK";
  if (s === "alert") return "ALERT";
  return null;
}

async function main() {
  const records = [];

  if (!fs.existsSync(CSV_PATH)) {
    console.error("❌ CSV file not found:", CSV_PATH);
    process.exit(1);
  }

  await new Promise((resolve, reject) => {
    fs.createReadStream(CSV_PATH)
      .pipe(csv())
      .on("data", (row) => {
        records.push({
          rawDate: row["Date"] ?? "",
          capturedAt:
            new Date(row["Date"]).toString() !== "Invalid Date"
              ? new Date(row["Date"])
              : null,
          microplasticCount: row[
            "Microplastics (integer units; original pieces/mL × 100000000000)"
          ]
            ? parseInt(
                row[
                  "Microplastics (integer units; original pieces/mL × 100000000000)"
                ]
              )
            : null,
          concentrationLevel: parseConcentration(row["Concentration Class"]),
          pH: row["pH"] ? parseFloat(row["pH"]) : null,
          turbidity: row["Turbidity (NTU)"]
            ? parseFloat(row["Turbidity (NTU)"])
            : null,
          sizeOrVolume: row["Size/Volume Ratio"]
            ? parseFloat(row["Size/Volume Ratio"])
            : null,
          status: parseStatus(row["Status"]),
        });
      })
      .on("end", resolve)
      .on("error", reject);
  });

  if (records.length > 0) {
    await prisma.sample.createMany({
      data: records,
      skipDuplicates: true,
    });
    console.log(`✅ Seeded ${records.length} samples into Neon DB`);
  } else {
    console.log("⚠️ No records found in CSV.");
  }
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
