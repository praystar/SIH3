# CCTV Detection Dashboard

A comprehensive React application with Clerk authentication featuring a global CCTV/DVR security monitoring dashboard for cybersecurity professionals and researchers.

## Features

- **Authentication**: Clerk-powered authentication system
- **Global Device Registry**: Comprehensive database of discovered CCTV/DVR devices worldwide
- **Vulnerability Mapping**: CVE database integration for security assessment
- **Network Scanning**: IP range scanning capabilities for device discovery
- **Real-time Analytics**: Interactive charts and statistics
- **Responsive Design**: Full-screen layout optimized for security operations

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Clerk Authentication

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application or use an existing one
3. Copy your publishable key
4. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

5. Edit `.env` and add your Clerk publishable key:

```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── LandingPage.tsx          # Security-themed landing page
│   ├── CCTVDashboard.tsx        # Main CCTV detection dashboard
│   └── ProtectedRoute.tsx       # Authentication wrapper
├── App.tsx                      # Main app component
├── main.tsx                     # Entry point
└── index.css                    # Global styles
```

## Authentication Flow

1. **Unauthenticated users** see the landing page with a "Login" button
2. **Clicking "Login"** opens Clerk's sign-in modal
3. **After authentication** users are redirected to the CCTV Detection Dashboard
4. **Dashboard includes** a logout button to return to the landing page

## Dashboard Features

### KPI Cards
- **Total Devices**: Count of all discovered CCTV/DVR devices
- **Vulnerable Devices**: Number and percentage of devices with known vulnerabilities
- **Countries**: Geographic distribution count
- **Device Makes**: Number of different manufacturers

### Device Registry Table
- **IP Address**: Network location (monospace display)
- **Location**: City and country information
- **Make & Model**: Device manufacturer and model details
- **Firmware Version**: Current firmware (monospace display)
- **Port & Protocol**: Network configuration (HTTP/RTSP)
- **Status**: Online/Offline with color coding
- **Vulnerabilities**: Count with severity color coding
- **Last Scanned**: Timestamp of last security scan

### Advanced Filtering
- **Status Filter**: All, Online, Offline devices
- **Country Filter**: Dropdown selection by geographic location
- **Make Filter**: Dropdown selection by device manufacturer
- **Real-time Updates**: All charts and statistics update dynamically

### Analytics Charts
- **Device Distribution by Country**: Bar chart showing top 10 countries
- **Vulnerability Distribution**: Pie chart categorizing devices by vulnerability count
- **Device Makes Distribution**: Bar chart showing manufacturer distribution

### Global Scanning Interface
- **IP Range Scanner**: CIDR notation support (e.g., 192.168.1.0/24)
- **Target Make Selection**: Optional manufacturer filtering
- **Scan Status**: Real-time scanning progress with results
- **Simulated Results**: Mock scanning with realistic device counts

### CVE Vulnerability Mapping
- **CVE Database Integration**: Real vulnerability IDs and descriptions
- **Severity Classification**: Critical, High, Medium severity levels
- **Device Mapping**: Links vulnerabilities to specific devices
- **Active Vulnerability Display**: Shows vulnerabilities for filtered devices
- **Security Statistics**: Vulnerability counts by severity level

## Sample Data

The dashboard includes comprehensive sample data featuring:
- **20+ Devices** from various countries worldwide
- **Multiple Manufacturers**: Hikvision, Dahua, Axis, Sony, Bosch, Pelco, Samsung, Panasonic, Vivotek, Uniview, Geovision, CP Plus, Avigilon, Hanwha Techwin, Arecont Vision
- **Geographic Coverage**: USA, China, Germany, Japan, UK, Canada, Australia, France, Italy, Spain, Brazil, India, Russia, South Korea, Mexico
- **Vulnerability Data**: Mock CVE entries with real vulnerability IDs
- **Network Configurations**: Various ports (80, 554) and protocols (HTTP, RTSP)

## Security Features

- **Vulnerability Assessment**: Real-time CVE mapping and severity analysis
- **Device Discovery**: IP range scanning capabilities for network reconnaissance
- **Risk Analysis**: Visual indicators for security status and threat levels
- **Global Coverage**: Worldwide device tracking and monitoring
- **Manufacturer Analysis**: Understanding device distribution and security patterns

## Use Cases

- **Cybersecurity Research**: Academic and professional security research
- **Network Security Assessment**: Identifying vulnerable devices on networks
- **Threat Intelligence**: Understanding global CCTV/DVR security landscape
- **Penetration Testing**: Reconnaissance and vulnerability assessment
- **Security Awareness**: Educational purposes for cybersecurity training

## Deployment

This is a Vite React application that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Make sure to set the `VITE_CLERK_PUBLISHABLE_KEY` environment variable in your deployment platform.

## Technologies Used

- React 19
- TypeScript
- Vite
- Clerk (Authentication)
- Recharts (Data Visualization)
- CSS-in-JS (Styling)

## Disclaimer

This application is designed for educational and research purposes. Users should ensure they have proper authorization before scanning networks or accessing devices. Always comply with local laws and regulations regarding network security testing and device access.