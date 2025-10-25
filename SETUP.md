# Microplastics Dashboard Setup

This project includes a Clerk authentication system with a landing page and a microplastics data dashboard.

## Features

- **Landing Page**: Ocean-themed landing page with authentication
- **Dashboard**: Interactive microplastics data visualization with charts and tables
- **Authentication**: Clerk-powered authentication system
- **Responsive Design**: Works on desktop and mobile devices

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
│   ├── LandingPage.tsx          # Ocean-themed landing page
│   ├── MicroplasticsDashboard.tsx # Data dashboard with charts
│   └── ProtectedRoute.tsx       # Authentication wrapper
├── App.tsx                      # Main app component
├── main.tsx                     # Entry point
└── index.css                    # Global styles
```

## Dashboard Features

- **KPI Cards**: Average microplastic count, size/volume ratio, turbidity, and pH
- **Data Table**: Filterable table with all microplastics data
- **Charts**: 
  - Microplastics trend over time (line chart)
  - Concentration class distribution (bar chart)
  - pH levels over time (line chart)
- **Filtering**: Filter data by status (All, OK, Alert)

## Authentication Flow

1. **Unauthenticated users** see the landing page with a "Get Started" button
2. **Clicking "Get Started"** opens Clerk's sign-in modal
3. **After authentication** users are redirected to the dashboard
4. **Dashboard includes** a logout button to return to the landing page

## Data

The dashboard uses hardcoded microplastics data from 2023, including:
- Date
- Microplastics count (pieces/mL × 10^10)
- Concentration class (High/Medium/Low)
- pH levels
- Turbidity (NTU)
- Size/Volume ratio
- Status (OK/Alert)

## Styling

The dashboard uses a dark theme with:
- Dark blue background (#0b1422)
- Card-based layout with subtle borders
- Accent colors for data visualization
- Responsive grid system
