import * as React from "react"
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
} from "recharts"
import { useClerk } from '@clerk/clerk-react'

// ========= THEME (matches your screenshot) =========
const COLORS = {
    page: "#07197",
    card: "#101c2b",
    grid: "#1c2a40",
    text: "#dbe5ff",
    muted: "#9fb3d1",
    accent: "#4da6ff",
    green: "#61d095",
    red: "#ff6b6b",
    orange: "#ffa726",
    purple: "#9d7dff",
}

// ========= SAMPLE CCTV/DVR DATA =========
const RAW_CCTV_DATA = `IP Address,Country,City,Make,Model,Firmware Version,Port,Protocol,Status,Vulnerabilities,Last Scanned
192.168.1.100,USA,NewYork,Hikvision,DS-2CD2143G0-I,v5.6.0,80,HTTP,Online,2,2024-01-15
203.45.67.89,China,Beijing,Dahua,DH-IPC-HFW4431R,v4.001.0000006.0,554,RTSP,Online,1,2024-01-14
91.234.56.78,Germany,Berlin,Axis,M3045-V,v9.80.1,80,HTTP,Online,0,2024-01-13
45.123.89.12,Japan,Tokyo,Sony,SNC-VB770,v1.82.00,80,HTTP,Offline,3,2024-01-12
203.0.113.15,China,Shanghai,Hikvision,DS-2CD2143G0-I,v5.5.0,80,HTTP,Offline,2,2024-01-12
91.234.56.80,Germany,Hamburg,Dahua,DH-IPC-HFW4431R,v4.001.0000005.0,554,RTSP,Offline,1,2024-01-12
178.90.123.50,UK,Birmingham,Axis,M3045-V,v9.79.0,80,HTTP,Offline,2,2024-01-12
67.89.123.50,Canada,Montreal,Bosch,FLEXIDOME-IP-7000-MR,v7.7.0,80,HTTP,Offline,1,2024-01-12
178.90.123.45,UK,London,Bosch,FLEXIDOME-IP-7000-MR,v7.8.0,80,HTTP,Online,1,2024-01-11
67.89.123.45,Canada,Toronto,Pelco,Sarix-IXE10,v1.0.0,80,HTTP,Online,2,2024-01-10
123.45.67.89,Australia,Sydney,Samsung,SNV-6013,v1.0.0,80,HTTP,Online,1,2024-01-09
234.56.78.90,France,Paris,Panasonic,WV-SP509,v1.0.0,80,HTTP,Online,0,2024-01-08
156.78.90.12,Italy,Rome,Vivotek,FD8166,v1.0.0,80,HTTP,Online,2,2024-01-07
89.12.34.56,Spain,Madrid,Uniview,IPC2122SR3-PF28,v3.0.0,80,HTTP,Online,1,2024-01-06
34.56.78.90,Brazil,SaoPaulo,Geovision,GV-BL120D,v1.0.0,80,HTTP,Online,3,2024-01-05
78.90.12.34,India,Mumbai,CP-Plus,CP-ADH-1080P,v1.0.0,80,HTTP,Online,2,2024-01-04
90.12.34.56,Russia,Moscow,Avigilon,H4A,v1.0.0,80,HTTP,Online,1,2024-01-03
12.34.56.78,SouthKorea,Seoul,Hanwha-Techwin,SND-6084R,v1.0.0,80,HTTP,Online,0,2024-01-02
56.78.90.12,Mexico,MexicoCity,Arecont-Vision,AV8185DN,v1.0.0,80,HTTP,Online,2,2024-01-01
10.0.0.100,USA,LosAngeles,Hikvision,DS-2CD2043G0-I,v5.7.0,80,HTTP,Online,1,2024-01-16
172.16.1.50,Canada,Vancouver,Dahua,DH-IPC-HFW4431R,v4.001.0000007.0,554,RTSP,Online,2,2024-01-17
192.168.0.200,Germany,Munich,Axis,M3045-V,v9.81.0,80,HTTP,Online,0,2024-01-18
203.0.113.10,Japan,Osaka,Sony,SNC-VB770,v1.83.00,80,HTTP,Offline,2,2024-01-19
10.0.1.150,USA,Miami,Pelco,Sarix IXE10,v1.0.5,80,HTTP,Offline,1,2024-01-19
172.16.2.100,Canada,Calgary,Samsung,SNV-6013,v1.0.5,80,HTTP,Offline,2,2024-01-19
198.51.100.5,UK,Manchester,Bosch,FLEXIDOME IP 7000 MR,v7.9.0,80,HTTP,Online,1,2024-01-20
10.10.10.50,USA,Chicago,Hikvision,DS-2CD2T47G2-L,v5.8.0,80,HTTP,Online,2,2024-01-21
172.20.1.100,Canada,Montreal,Dahua,DH-IPC-HFW4431R,v4.001.0000008.0,554,RTSP,Online,1,2024-01-22
192.168.10.25,Germany,Hamburg,Axis,M3045-V,v9.82.0,80,HTTP,Online,0,2024-01-23
203.0.113.25,Japan,Kyoto,Sony,SNC-VB770,v1.84.00,80,HTTP,Online,3,2024-01-24
198.51.100.25,UK,Birmingham,Bosch,FLEXIDOME IP 7000 MR,v7.10.0,80,HTTP,Online,1,2024-01-25
10.0.1.200,USA,Miami,Pelco,Sarix IXE10,v1.1.0,80,HTTP,Online,2,2024-01-26
172.16.2.75,Canada,Calgary,Samsung,SNV-6013,v1.1.0,80,HTTP,Online,1,2024-01-27
192.168.2.150,Germany,Cologne,Panasonic,WV-SP509,v1.1.0,80,HTTP,Online,0,2024-01-28
203.0.113.50,Japan,Nagoya,Vivotek,FD8166,v1.1.0,80,HTTP,Online,2,2024-01-29
198.51.100.50,UK,Glasgow,Uniview,IPC2122SR3-PF28,v3.1.0,80,HTTP,Online,1,2024-01-30
10.0.2.75,USA,Seattle,Geovision,GV-BL120D,v1.1.0,80,HTTP,Online,3,2024-01-31
172.16.3.25,Canada,Ottawa,CP Plus,CP-ADH-1080P,v1.1.0,80,HTTP,Online,2,2024-02-01
192.168.3.100,Germany,Frankfurt,Avigilon,H4A,v1.1.0,80,HTTP,Online,1,2024-02-02
203.0.113.75,Japan,Yokohama,Hanwha Techwin,SND-6084R,v1.1.0,80,HTTP,Online,0,2024-02-03
198.51.100.75,UK,Edinburgh,Arecont Vision,AV8185DN,v1.1.0,80,HTTP,Online,2,2024-02-04
10.0.3.150,USA,Phoenix,Hikvision,DS-2CD2143G0-I,v5.9.0,80,HTTP,Online,2,2024-02-05
172.16.4.50,Canada,Winnipeg,Dahua,DH-IPC-HFW4431R,v4.001.0000009.0,554,RTSP,Online,1,2024-02-06
192.168.4.75,Germany,Stuttgart,Axis,M3045-V,v9.83.0,80,HTTP,Online,0,2024-02-07
203.0.113.100,Japan,Sapporo,Sony,SNC-VB770,v1.85.00,80,HTTP,Offline,2,2024-02-08
10.0.4.50,USA,Denver,Pelco,Sarix IXE10,v1.1.5,80,HTTP,Offline,1,2024-02-08
172.16.5.200,Canada,Quebec City,Samsung,SNV-6013,v1.1.5,80,HTTP,Offline,2,2024-02-08
192.168.5.250,Germany,Dusseldorf,Panasonic,WV-SP509,v1.1.5,80,HTTP,Offline,1,2024-02-08
198.51.100.100,UK,Liverpool,Bosch,FLEXIDOME IP 7000 MR,v7.11.0,80,HTTP,Online,1,2024-02-09
10.0.4.25,USA,Denver,Pelco,Sarix IXE10,v1.2.0,80,HTTP,Online,2,2024-02-10
172.16.5.125,Canada,Quebec City,Samsung,SNV-6013,v1.2.0,80,HTTP,Online,1,2024-02-11
192.168.5.200,Germany,Dusseldorf,Panasonic,WV-SP509,v1.2.0,80,HTTP,Online,0,2024-02-12
203.0.113.125,Japan,Fukuoka,Vivotek,FD8166,v1.2.0,80,HTTP,Online,2,2024-02-13
198.51.100.125,UK,Bristol,Uniview,IPC2122SR3-PF28,v3.2.0,80,HTTP,Online,1,2024-02-14
10.0.5.100,USA,Atlanta,Geovision,GV-BL120D,v1.2.0,80,HTTP,Online,3,2024-02-15
172.16.6.75,Canada,Halifax,CP Plus,CP-ADH-1080P,v1.2.0,80,HTTP,Online,2,2024-02-16
192.168.6.25,Germany,Leipzig,Avigilon,H4A,v1.2.0,80,HTTP,Online,1,2024-02-17
203.0.113.150,Japan,Sendai,Hanwha Techwin,SND-6084R,v1.2.0,80,HTTP,Online,0,2024-02-18
198.51.100.150,UK,Sheffield,Arecont Vision,AV8185DN,v1.2.0,80,HTTP,Online,2,2024-02-19
10.0.6.175,USA,Las Vegas,Hikvision,DS-2CD2043G0-I,v5.10.0,80,HTTP,Online,1,2024-02-20
172.16.7.200,Canada,Victoria,Dahua,DH-IPC-HFW4431R,v4.001.0000010.0,554,RTSP,Online,2,2024-02-21
192.168.7.150,Germany,Dresden,Axis,M3045-V,v9.84.0,80,HTTP,Online,0,2024-02-22
203.0.113.175,Japan,Hiroshima,Sony,SNC-VB770,v1.86.00,80,HTTP,Online,3,2024-02-23
198.51.100.175,UK,Leeds,Bosch,FLEXIDOME IP 7000 MR,v7.12.0,80,HTTP,Online,1,2024-02-24
10.0.7.50,USA,Portland,Pelco,Sarix IXE10,v1.3.0,80,HTTP,Online,2,2024-02-25
172.16.8.25,Canada,Regina,Samsung,SNV-6013,v1.3.0,80,HTTP,Online,1,2024-02-26
192.168.8.100,Germany,Bremen,Panasonic,WV-SP509,v1.3.0,80,HTTP,Online,0,2024-02-27
203.0.113.200,Japan,Kobe,Vivotek,FD8166,v1.3.0,80,HTTP,Online,2,2024-02-28
198.51.100.200,UK,Nottingham,Uniview,IPC2122SR3-PF28,v3.3.0,80,HTTP,Online,1,2024-02-29
10.0.8.125,USA,San Antonio,Geovision,GV-BL120D,v1.3.0,80,HTTP,Online,3,2024-03-01
172.16.9.150,Canada,Saskatoon,CP Plus,CP-ADH-1080P,v1.3.0,80,HTTP,Online,2,2024-03-02
192.168.9.75,Germany,Hannover,Avigilon,H4A,v1.3.0,80,HTTP,Online,1,2024-03-03
203.0.113.225,Japan,Kumamoto,Hanwha Techwin,SND-6084R,v1.3.0,80,HTTP,Online,0,2024-03-04
198.51.100.225,UK,Coventry,Arecont Vision,AV8185DN,v1.3.0,80,HTTP,Online,2,2024-03-05`

type CCTVRow = {
    "IP Address": string
    Country: string
    City: string
    Make: string
    Model: string
    "Firmware Version": string
    Port: number
    Protocol: string
    Status: "Online" | "Offline"
    Vulnerabilities: number
    "Last Scanned": string
}

// ========= CSV PARSER =========
function parseCCTVData(csv: string): CCTVRow[] {
    const lines = csv.trim().split(/\r?\n/)
    const headers = lines[0].split(",").map((h) => h.trim())
    const out: CCTVRow[] = []

    for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(",")
        if (cols.length !== headers.length) continue
        const rec: Record<string, string | number> = {}
        headers.forEach((h, idx) => {
            let v: string | number = cols[idx]?.trim()

            // numeric coercion for known columns
            if (h === "Port" || h === "Vulnerabilities") {
                v = Number(String(v).replace(/[^\d]/g, ""))
            }
            rec[h] = v
        })
        // skip empty lines
        if (rec["IP Address"]) out.push(rec as CCTVRow)
    }
    return out
}

// ========= UTIL =========
const nf = (n: number, d = 2) =>
    new Intl.NumberFormat("en-US", { maximumFractionDigits: d }).format(n)

// ========= COMPONENT =========
export default function CCTVDashboard({
    csvText = RAW_CCTV_DATA,
}: {
    csvText?: string
}) {
    const { signOut } = useClerk()
    const data = React.useMemo(() => parseCCTVData(csvText), [csvText])

    // filter state
    const [status, setStatus] = React.useState<"All" | "Online" | "Offline">("All")
    const [country, setCountry] = React.useState<string>("All")
    const [make, setMake] = React.useState<string>("All")
    
    const filtered = React.useMemo(() => {
        let result = data
        if (status !== "All") result = result.filter((r) => r.Status === status)
        if (country !== "All") result = result.filter((r) => r.Country === country)
        if (make !== "All") result = result.filter((r) => r.Make === make)
        return result
    }, [data, status, country, make])

    // summary statistics
    const stats = React.useMemo(() => {
        const total = data.length
        const online = data.filter(r => r.Status === "Online").length
        const offline = data.filter(r => r.Status === "Offline").length
        const vulnerable = data.filter(r => r.Vulnerabilities > 0).length
        const countries = new Set(data.map(r => r.Country)).size
        const makes = new Set(data.map(r => r.Make)).size
        const avgVulns = data.reduce((sum, r) => sum + r.Vulnerabilities, 0) / total
        
        return {
            total,
            online,
            offline,
            vulnerable,
            countries,
            makes,
            avgVulns,
            vulnerablePercentage: (vulnerable / total) * 100
        }
    }, [data])

    // chart series
    const countryDistribution = React.useMemo(() => {
        const countryCount: Record<string, number> = {}
        filtered.forEach((r) => {
            countryCount[r.Country] = (countryCount[r.Country] || 0) + 1
        })
        return Object.entries(countryCount)
            .map(([country, count]) => ({ country, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10) // Top 10 countries
    }, [filtered])

    const vulnerabilityDistribution = React.useMemo(() => {
        const vulnCount: Record<string, number> = { "No Vulnerabilities": 0, "1-2 Vulnerabilities": 0, "3+ Vulnerabilities": 0 }
        filtered.forEach((r) => {
            if (r.Vulnerabilities === 0) vulnCount["No Vulnerabilities"]++
            else if (r.Vulnerabilities <= 2) vulnCount["1-2 Vulnerabilities"]++
            else vulnCount["3+ Vulnerabilities"]++
        })
        return Object.entries(vulnCount).map(([category, count]) => ({ category, count }))
    }, [filtered])

    const makeDistribution = React.useMemo(() => {
        const makeCount: Record<string, number> = {}
        filtered.forEach((r) => {
            makeCount[r.Make] = (makeCount[r.Make] || 0) + 1
        })
        return Object.entries(makeCount)
            .map(([make, count]) => ({ make, count }))
            .sort((a, b) => b.count - a.count)
    }, [filtered])

    // Get unique values for filters
    const uniqueCountries = React.useMemo(() => 
        Array.from(new Set(data.map(r => r.Country))).sort(), [data])
    const uniqueMakes = React.useMemo(() => 
        Array.from(new Set(data.map(r => r.Make))).sort(), [data])

    // Scanning interface state
    const [scanIPRange, setScanIPRange] = React.useState("")
    const [scanMake, setScanMake] = React.useState("")
    const [scanStatus, setScanStatus] = React.useState<"idle" | "scanning" | "completed">("idle")
    const [scanResults, setScanResults] = React.useState<number>(0)

    // Simulate scanning function
    const handleScan = () => {
        setScanStatus("scanning")
        // Simulate scanning delay
        setTimeout(() => {
            const results = Math.floor(Math.random() * 50) + 10
            setScanResults(results)
            setScanStatus("completed")
        }, 2000)
    }

    // CVE vulnerability data (mock data)
    const cveData = React.useMemo(() => [
        { cve: "CVE-2021-36260", make: "Hikvision", severity: "Critical", description: "Command injection vulnerability" },
        { cve: "CVE-2021-33044", make: "Dahua", severity: "High", description: "Authentication bypass vulnerability" },
        { cve: "CVE-2020-25078", make: "Axis", severity: "Medium", description: "Buffer overflow in web interface" },
        { cve: "CVE-2019-19609", make: "Sony", severity: "High", description: "Remote code execution vulnerability" },
        { cve: "CVE-2018-10660", make: "Bosch", severity: "Critical", description: "Unauthorized access vulnerability" },
        { cve: "CVE-2020-25077", make: "Pelco", severity: "High", description: "SQL injection vulnerability" },
        { cve: "CVE-2019-19608", make: "Samsung", severity: "Medium", description: "Cross-site scripting vulnerability" },
        { cve: "CVE-2018-10659", make: "Panasonic", severity: "High", description: "Directory traversal vulnerability" },
        { cve: "CVE-2020-25076", make: "Vivotek", severity: "Critical", description: "Remote code execution vulnerability" },
        { cve: "CVE-2019-19607", make: "Uniview", severity: "Medium", description: "Authentication bypass vulnerability" },
        { cve: "CVE-2018-10658", make: "Geovision", severity: "High", description: "Command injection vulnerability" },
        { cve: "CVE-2020-25075", make: "CP Plus", severity: "Medium", description: "Buffer overflow vulnerability" },
        { cve: "CVE-2019-19606", make: "Avigilon", severity: "High", description: "SQL injection vulnerability" },
        { cve: "CVE-2018-10657", make: "Hanwha Techwin", severity: "Critical", description: "Remote code execution vulnerability" },
        { cve: "CVE-2020-25074", make: "Arecont Vision", severity: "Medium", description: "Cross-site scripting vulnerability" },
    ], [])

    // Get vulnerabilities for current filtered devices
    const deviceVulnerabilities = React.useMemo(() => {
        const vulns: Array<{device: string, cve: string, severity: string, description: string}> = []
        filtered.forEach(device => {
            const deviceCVEs = cveData.filter(cve => cve.make === device.Make)
            deviceCVEs.forEach(cve => {
                vulns.push({
                    device: `${device.Make} ${device.Model} (${device["IP Address"]})`,
                    cve: cve.cve,
                    severity: cve.severity,
                    description: cve.description
                })
            })
        })
        return vulns
    }, [filtered, cveData])

    // styles
    const page: React.CSSProperties = {
        background: COLORS.page,
        color: COLORS.text,
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        padding: '16px',
        overflow: 'hidden',
        margin: 0,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column'
    }
    const card: React.CSSProperties = {
        background: COLORS.card,
        border: `1px solid ${COLORS.grid}`,
        borderRadius: 16,
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        padding: 16,
    }
    const kpiValue: React.CSSProperties = {
        color: COLORS.accent,
        fontSize: 48,
        lineHeight: 1,
        fontWeight: 600,
        letterSpacing: 1,
    }
    const labelMuted: React.CSSProperties = {
        color: COLORS.muted,
        textTransform: "uppercase",
        letterSpacing: 1.6,
        fontSize: 12,
    }

    // logout handler
    function handleLogout() {
        signOut()
    }

    return (
        <div style={page}>
            {/* Header bar with title + Logout */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                    flexShrink: 0
                }}
            >
                <h2 style={{ margin: 0 }}>CCTV Detection Dashboard</h2>

                <button
                    onClick={handleLogout}
                    style={{
                        padding: "8px 14px",
                        borderRadius: 10,
                        border: `1px solid ${COLORS.grid}`,
                        background: "#ff4d4d",
                        color: "white",
                        fontWeight: 700,
                        cursor: "pointer",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                    }}
                    title="Sign out and return to login"
                >
                    Logout
                </button>
            </div>
            
            {/* KPI Row */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                    gap: 12,
                    marginBottom: 16,
                    flexShrink: 0
                }}
            >
                <div style={card}>
                    <div style={labelMuted}>Total Devices</div>
                    <div style={kpiValue}>{stats.total}</div>
                </div>
                <div style={card}>
                    <div style={labelMuted}>Vulnerable Devices</div>
                    <div style={{...kpiValue, color: stats.vulnerable > 0 ? COLORS.red : COLORS.green}}>
                        {stats.vulnerable} ({nf(stats.vulnerablePercentage, 1)}%)
                    </div>
                </div>
                <div style={card}>
                    <div style={labelMuted}>Countries</div>
                    <div style={kpiValue}>{stats.countries}</div>
                </div>
                <div style={card}>
                    <div style={labelMuted}>Device Makes</div>
                    <div style={kpiValue}>{stats.makes}</div>
                </div>
            </div>

            {/* Scanning Interface */}
            <div style={{...card, marginBottom: 16, flexShrink: 0}}>
                <div style={{ color: COLORS.muted, fontWeight: 600, marginBottom: 12 }}>
                    Global CCTV/DVR Scanner
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: 12, alignItems: "end" }}>
                    <div>
                        <label style={{ display: "block", color: COLORS.muted, fontSize: 12, marginBottom: 4 }}>
                            IP Range (e.g., 192.168.1.0/24)
                        </label>
                        <input
                            type="text"
                            value={scanIPRange}
                            onChange={(e) => setScanIPRange(e.target.value)}
                            placeholder="192.168.1.0/24"
                            style={{
                                width: "100%",
                                padding: "8px 12px",
                                background: COLORS.page,
                                color: COLORS.text,
                                border: `1px solid ${COLORS.grid}`,
                                borderRadius: 8,
                                fontFamily: "monospace",
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: "block", color: COLORS.muted, fontSize: 12, marginBottom: 4 }}>
                            Target Make (optional)
                        </label>
                        <select
                            value={scanMake}
                            onChange={(e) => setScanMake(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "8px 12px",
                                background: COLORS.page,
                                color: COLORS.text,
                                border: `1px solid ${COLORS.grid}`,
                                borderRadius: 8,
                            }}
                        >
                            <option value="">All Makes</option>
                            {uniqueMakes.map(m => (
                                <option key={m} value={m}>{m}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <button
                            onClick={handleScan}
                            disabled={scanStatus === "scanning" || !scanIPRange.trim()}
                            style={{
                                padding: "8px 16px",
                                background: scanStatus === "scanning" ? COLORS.muted : COLORS.accent,
                                color: scanStatus === "scanning" ? COLORS.text : COLORS.page,
                                border: "none",
                                borderRadius: 8,
                                fontWeight: 700,
                                cursor: scanStatus === "scanning" ? "not-allowed" : "pointer",
                                opacity: scanStatus === "scanning" ? 0.7 : 1,
                            }}
                        >
                            {scanStatus === "scanning" ? "Scanning..." : 
                             scanStatus === "completed" ? `Found ${scanResults} devices` : 
                             "Start Scan"}
                        </button>
                    </div>
                </div>
                {scanStatus === "completed" && (
                    <div style={{ 
                        marginTop: 12, 
                        padding: 8, 
                        background: COLORS.green + "20", 
                        border: `1px solid ${COLORS.green}`,
                        borderRadius: 8,
                        color: COLORS.green,
                        fontSize: 14
                    }}>
                        ✓ Scan completed! Found {scanResults} CCTV/DVR devices in the specified range.
                    </div>
                )}
            </div>

            {/* Vulnerability Mapping */}
            <div style={{...card, marginBottom: 16, flexShrink: 0}}>
                <div style={{ color: COLORS.muted, fontWeight: 600, marginBottom: 12 }}>
                    CVE Vulnerability Mapping
                </div>
                <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
                    gap: 12, 
                    marginBottom: 16 
                }}>
                    <div style={{ textAlign: "center", padding: 12, background: COLORS.page, borderRadius: 8 }}>
                        <div style={{ color: COLORS.red, fontSize: 24, fontWeight: 700 }}>
                            {cveData.filter(c => c.severity === "Critical").length}
                        </div>
                        <div style={{ color: COLORS.muted, fontSize: 12 }}>Critical CVEs</div>
                    </div>
                    <div style={{ textAlign: "center", padding: 12, background: COLORS.page, borderRadius: 8 }}>
                        <div style={{ color: COLORS.orange, fontSize: 24, fontWeight: 700 }}>
                            {cveData.filter(c => c.severity === "High").length}
                        </div>
                        <div style={{ color: COLORS.muted, fontSize: 12 }}>High CVEs</div>
                    </div>
                    <div style={{ textAlign: "center", padding: 12, background: COLORS.page, borderRadius: 8 }}>
                        <div style={{ color: COLORS.accent, fontSize: 24, fontWeight: 700 }}>
                            {cveData.filter(c => c.severity === "Medium").length}
                        </div>
                        <div style={{ color: COLORS.muted, fontSize: 12 }}>Medium CVEs</div>
                    </div>
                    <div style={{ textAlign: "center", padding: 12, background: COLORS.page, borderRadius: 8 }}>
                        <div style={{ color: COLORS.green, fontSize: 24, fontWeight: 700 }}>
                            {deviceVulnerabilities.length}
                        </div>
                        <div style={{ color: COLORS.muted, fontSize: 12 }}>Active Vulnerabilities</div>
                    </div>
                </div>
                
                {deviceVulnerabilities.length > 0 && (
                    <div style={{ maxHeight: 200, overflow: "auto" }}>
                        <div style={{ color: COLORS.muted, fontSize: 12, marginBottom: 8 }}>
                            Vulnerabilities in Current Filter ({deviceVulnerabilities.length} found):
                        </div>
                        {deviceVulnerabilities.map((vuln, i) => (
                            <div key={i} style={{ 
                                padding: 8, 
                                marginBottom: 4, 
                                background: COLORS.page, 
                                borderRadius: 6,
                                border: `1px solid ${COLORS.grid}`
                            }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span style={{ fontFamily: "monospace", fontSize: 12 }}>{vuln.cve}</span>
                                    <span style={{ 
                                        color: vuln.severity === "Critical" ? COLORS.red : 
                                              vuln.severity === "High" ? COLORS.orange : COLORS.accent,
                                        fontWeight: 700,
                                        fontSize: 11
                                    }}>
                                        {vuln.severity}
                                    </span>
                                </div>
                                <div style={{ fontSize: 11, color: COLORS.muted, marginTop: 2 }}>
                                    {vuln.device}
                                </div>
                                <div style={{ fontSize: 11, color: COLORS.text, marginTop: 2 }}>
                                    {vuln.description}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Main content area - takes remaining space */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    gap: 16,
                    flex: 1,
                    minHeight: 0
                }}
            >
                {/* Table + filter */}
                <div style={{...card, display: "flex", flexDirection: "column", minHeight: 0}}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 12,
                            flexShrink: 0
                        }}
                    >
                        <div style={{ color: COLORS.muted, fontWeight: 600 }}>
                            CCTV/DVR Device Registry
                        </div>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {/* Status Filter */}
                            <div style={{ display: "flex", gap: 4 }}>
                                {(["All", "Online", "Offline"] as const).map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setStatus(f)}
                                        style={{
                                            background:
                                                status === f
                                                    ? COLORS.accent
                                                    : "#2b3a51",
                                            color:
                                                status === f
                                                    ? COLORS.page
                                                    : COLORS.text,
                                            border: `1px solid ${COLORS.grid}`,
                                            borderRadius: 10,
                                            padding: "6px 10px",
                                            fontWeight: 700,
                                            cursor: "pointer",
                                        }}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                            
                            {/* Country Filter */}
                            <select
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                style={{
                                    background: COLORS.card,
                                    color: COLORS.text,
                                    border: `1px solid ${COLORS.grid}`,
                                    borderRadius: 10,
                                    padding: "6px 10px",
                                    fontWeight: 700,
                                }}
                            >
                                <option value="All">All Countries</option>
                                {uniqueCountries.map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                            
                            {/* Make Filter */}
                            <select
                                value={make}
                                onChange={(e) => setMake(e.target.value)}
                                style={{
                                    background: COLORS.card,
                                    color: COLORS.text,
                                    border: `1px solid ${COLORS.grid}`,
                                    borderRadius: 10,
                                    padding: "6px 10px",
                                    fontWeight: 700,
                                }}
                            >
                                <option value="All">All Makes</option>
                                {uniqueMakes.map(m => (
                                    <option key={m} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div style={{ overflow: "auto", flex: 1, minHeight: 0 }}>
                        <table
                            style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                fontSize: 13,
                            }}
                        >
                            <thead
                                style={{
                                    position: "sticky",
                                    top: 0,
                                    background: COLORS.card,
                                    zIndex: 10
                                }}
                            >
                                <tr>
                                    {[
                                        "IP Address",
                                        "Location",
                                        "Make & Model",
                                        "Firmware",
                                        "Port",
                                        "Protocol",
                                        "Status",
                                        "Vulnerabilities",
                                        "Last Scanned",
                                    ].map((h) => (
                                        <th
                                            key={h}
                                            style={{
                                                textAlign: "left",
                                                padding: 8,
                                                color: COLORS.muted,
                                                borderBottom: `1px solid ${COLORS.grid}`,
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((r, i) => (
                                    <tr
                                        key={i}
                                        style={{
                                            borderBottom: `1px solid ${COLORS.grid}`,
                                        }}
                                    >
                                        <td style={{ padding: 8, fontFamily: "monospace" }}>{r["IP Address"]}</td>
                                        <td style={{ padding: 8 }}>
                                            {r.City}, {r.Country}
                                        </td>
                                        <td style={{ padding: 8 }}>
                                            {r.Make} {r.Model}
                                        </td>
                                        <td style={{ padding: 8, fontFamily: "monospace" }}>
                                            {r["Firmware Version"]}
                                        </td>
                                        <td style={{ padding: 8 }}>
                                            {r.Port}
                                        </td>
                                        <td style={{ padding: 8 }}>
                                            {r.Protocol}
                                        </td>
                                        <td style={{ padding: 8 }}>
                                            <span style={{
                                                color: r.Status === "Online" ? COLORS.green : COLORS.red,
                                                fontWeight: 700
                                            }}>
                                                {r.Status}
                                            </span>
                                        </td>
                                        <td style={{ padding: 8 }}>
                                            <span style={{
                                                color: r.Vulnerabilities > 0 ? COLORS.red : COLORS.green,
                                                fontWeight: 700
                                            }}>
                                                {r.Vulnerabilities}
                                            </span>
                                        </td>
                                        <td style={{ padding: 8 }}>
                                            {r["Last Scanned"]}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot
                                style={{
                                    position: "sticky",
                                    bottom: 0,
                                    background: COLORS.card,
                                    zIndex: 10
                                }}
                            >
                                <tr>
                                    <td
                                        style={{
                                            padding: 8,
                                            color: COLORS.muted,
                                            fontWeight: 700,
                                        }}
                                    >
                                        Summary
                                    </td>
                                    <td style={{ padding: 8, fontWeight: 700 }}>
                                        {filtered.length} devices
                                    </td>
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td style={{ padding: 8, fontWeight: 700 }}>
                                        {filtered.filter(r => r.Status === "Online").length} Online
                                    </td>
                                    <td style={{ padding: 8, fontWeight: 700 }}>
                                        {filtered.reduce((sum, r) => sum + r.Vulnerabilities, 0)} total
                                    </td>
                                    <td />
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                {/* Charts column - three charts stacked vertically with no gaps */}
                <div style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: 0,
                    minHeight: 0,
                    flex: 1
                }}>
                    {/* Device Distribution by Country */}
                    <div style={{...card, display: "flex", flexDirection: "column", minHeight: 0, borderRadius: "16px 16px 0 0", flex: 1}}>
                        <div
                            style={{
                                color: COLORS.muted,
                                marginBottom: 8,
                                fontWeight: 600,
                                flexShrink: 0
                            }}
                        >
                            Device Distribution by Country
                        </div>
                        <div style={{ width: "100%", flex: 1, minHeight: 0 }}>
                            <ResponsiveContainer>
                                <BarChart
                                    data={countryDistribution}
                                    margin={{
                                        top: 8,
                                        right: 12,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <CartesianGrid
                                        stroke={COLORS.grid}
                                        strokeDasharray="3 3"
                                    />
                                    <XAxis
                                        dataKey="country"
                                        stroke={COLORS.muted}
                                        tick={{ fill: COLORS.muted, fontSize: 10 }}
                                        angle={-45}
                                        textAnchor="end"
                                        height={60}
                                    />
                                    <YAxis
                                        stroke={COLORS.muted}
                                        tick={{ fill: COLORS.muted }}
                                        allowDecimals={false}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            background: COLORS.card,
                                            border: `1px solid ${COLORS.grid}`,
                                            color: COLORS.text,
                                        }}
                                    />
                                    <Bar
                                        dataKey="count"
                                        fill={COLORS.accent}
                                        radius={[6, 6, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Vulnerability Distribution */}
                    <div style={{...card, display: "flex", flexDirection: "column", minHeight: 0, borderRadius: 0, borderTop: "none", borderBottom: "none", flex: 1}}>
                        <div
                            style={{
                                color: COLORS.muted,
                                marginBottom: 8,
                                fontWeight: 600,
                                flexShrink: 0
                            }}
                        >
                            Vulnerability Distribution
                        </div>
                        <div style={{ width: "100%", flex: 1, minHeight: 0 }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie
                                        data={vulnerabilityDistribution}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({category, count}) => `${category}: ${count}`}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="count"
                                    >
                                        {vulnerabilityDistribution.map((entry, index) => (
                                            <Cell 
                                                key={`cell-${index}`} 
                                                fill={
                                                    entry.category === "No Vulnerabilities" ? COLORS.green :
                                                    entry.category === "1-2 Vulnerabilities" ? COLORS.orange :
                                                    COLORS.red
                                                } 
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{
                                            background: COLORS.card,
                                            border: `1px solid ${COLORS.grid}`,
                                            color: COLORS.text,
                                        }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Device Makes Distribution */}
                    <div style={{...card, display: "flex", flexDirection: "column", minHeight: 0, borderRadius: "0 0 16px 16px", flex: 1}}>
                        <div
                            style={{
                                color: COLORS.muted,
                                marginBottom: 8,
                                fontWeight: 600,
                                flexShrink: 0
                            }}
                        >
                            Device Makes Distribution
                        </div>
                        <div style={{ width: "100%", flex: 1, minHeight: 0 }}>
                            <ResponsiveContainer>
                                <BarChart
                                    data={makeDistribution}
                                    margin={{
                                        top: 8,
                                        right: 12,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <CartesianGrid
                                        stroke={COLORS.grid}
                                        strokeDasharray="3 3"
                                    />
                                    <XAxis
                                        dataKey="make"
                                        stroke={COLORS.muted}
                                        tick={{ fill: COLORS.muted, fontSize: 10 }}
                                        angle={-45}
                                        textAnchor="end"
                                        height={60}
                                    />
                                    <YAxis
                                        stroke={COLORS.muted}
                                        tick={{ fill: COLORS.muted }}
                                        allowDecimals={false}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            background: COLORS.card,
                                            border: `1px solid ${COLORS.grid}`,
                                            color: COLORS.text,
                                        }}
                                    />
                                    <Bar
                                        dataKey="count"
                                        fill={COLORS.purple}
                                        radius={[6, 6, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
