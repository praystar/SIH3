# Oilseed Byproducts Platform

A comprehensive React TypeScript application focused on the oilseed byproducts value chain, featuring a dashboard with global supply/demand visualization and a marketplace for buying and selling oilseed byproducts.

## 🌟 Features

### Page 1: Value Chain Dashboard (`/`)
- **Interactive Map Visualization**: Global supply/demand hotspots using Leaflet maps
- **Key Performance Indicators (KPIs)**:
  - Regional Surplus: Highest surplus by quantity and type
  - Highest Shortage: Largest deficit by quantity and type  
  - Highest Volume Trade: Current high-volume products
- **Advanced Filtering**: Filter by oilseed type, geographic region, price range, and quantity
- **Market Insights**: Real-time market trends and analysis

### Page 2: Global Marketplace (`/marketplace`)
- **Product Listings**: Browse oilseed by-products including:
  - Soybean Meal
  - Rapeseed/Canola Meal
  - Sunflower Meal
  - Groundnut (Peanut) Cake
  - Linseed (Flaxseed) Meal
- **CRUD Operations**:
  - ✅ Create new product listings
  - ✅ Read existing listings
  - ✅ Update product information
  - ✅ Delete listings
- **Advanced Search & Filtering**: Search by type, location, supplier, and apply multiple filters
- **Product Details**: Quantity (MT), Price ($/MT), Location, Listing Date, Supplier info

## 🛠️ Technology Stack

- **Frontend**: React 19.1.1 with TypeScript
- **Routing**: React Router DOM v6
- **Maps**: Leaflet with React-Leaflet
- **Styling**: CSS3 with modern responsive design
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Dependencies

### Core Dependencies
- `react`: ^19.1.1
- `react-dom`: ^19.1.1
- `react-router-dom`: Latest
- `leaflet`: Latest
- `react-leaflet`: Latest

### Development Dependencies
- `typescript`: ~5.8.3
- `@types/react`: ^19.1.10
- `@types/react-dom`: ^19.1.7
- `@types/leaflet`: Latest
- `vite`: ^7.1.2

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SIH3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── NavBar.tsx       # Navigation component
│   ├── ParameterBox.tsx  # KPI display component
│   ├── ProductForm.tsx  # Product creation/editing form
│   ├── MapComponent.tsx # Interactive map component
│   └── FilterComponent.tsx # Advanced filtering component
├── pages/               # Main application pages
│   ├── ValueChainDashboard.tsx
│   └── GlobalMarketplace.tsx
├── types/               # TypeScript type definitions
│   └── index.ts
├── data/                # Mock data and constants
│   └── mockData.ts
├── App.tsx              # Main application component with routing
├── main.tsx            # Application entry point
└── App.css             # Global styles
```

## 🎨 Design Features

### Modern UI/UX
- **Responsive Design**: Mobile-first approach with breakpoints
- **Modern Color Scheme**: Professional gradient backgrounds and color-coded elements
- **Interactive Elements**: Hover effects, smooth transitions, and visual feedback
- **Accessibility**: Proper ARIA labels, keyboard navigation, and semantic HTML

### Component Architecture
- **Reusable Components**: Modular design with props-based configuration
- **Type Safety**: Full TypeScript implementation with strict typing
- **State Management**: React hooks for local state management
- **Performance**: Optimized rendering with useMemo and proper key props

## 🗺️ Map Integration

The application uses Leaflet for interactive maps with:
- **Custom Markers**: Color-coded markers for supply/demand hotspots
- **Interactive Popups**: Detailed information on hover/click
- **Legend**: Visual guide for map symbols
- **Responsive Design**: Mobile-friendly map controls

## 📊 Data Management

### Mock Data Structure
- **Oilseed Products**: Complete product listings with all required fields
- **Supply/Demand Hotspots**: Geographic data with intensity levels
- **KPIs**: Real-time performance indicators
- **Filter Options**: Comprehensive filtering capabilities

### CRUD Operations
- **Create**: Add new product listings with validation
- **Read**: Display products with search and filtering
- **Update**: Edit existing product information
- **Delete**: Remove listings with confirmation

## 🔧 Customization

### Adding New Oilseed Types
1. Update the `OilseedType` union in `src/types/index.ts`
2. Add new options to `oilseedTypeOptions` in `src/data/mockData.ts`
3. Update form components to include new types

### Styling Customization
- Modify CSS files in component directories
- Update color schemes in CSS custom properties
- Adjust responsive breakpoints as needed

### Map Configuration
- Customize map center and zoom levels in `MapComponent.tsx`
- Add new marker styles and colors
- Modify popup content and styling

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Responsiveness

The application is fully responsive with:
- Mobile-first CSS design
- Touch-friendly interface elements
- Optimized map controls for mobile devices
- Collapsible navigation and filters

## 🔒 Security Considerations

- Input validation on all forms
- XSS protection through React's built-in escaping
- No sensitive data exposure in client-side code
- Proper error handling and user feedback

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Similar to Vercel, supports Vite builds
- **GitHub Pages**: Requires additional configuration for SPA routing
- **AWS S3 + CloudFront**: For enterprise deployments

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation in the code comments
- Review the TypeScript interfaces for API contracts

## 🔮 Future Enhancements

- **Real-time Data**: Integration with live market data APIs
- **User Authentication**: User accounts and personalized dashboards
- **Advanced Analytics**: Charts and trend analysis
- **Export Functionality**: PDF reports and data export
- **Multi-language Support**: Internationalization
- **Push Notifications**: Real-time market alerts
- **Mobile App**: React Native version

---

Built with ❤️ using React, TypeScript, and modern web technologies.