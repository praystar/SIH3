import React, { useState, useMemo } from 'react';
import ProductForm from '../components/ProductForm';
import FilterComponent from '../components/FilterComponent';
import type { OilseedProduct, ProductFormData, FilterOptions } from '../types';
import { mockProducts } from '../data/mockData';
import './GlobalMarketplace.css';

const GlobalMarketplace: React.FC = () => {
  const [products, setProducts] = useState<OilseedProduct[]>(mockProducts);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<OilseedProduct | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter and search products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search filter
      if (searchTerm && !product.type.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !product.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !product.supplier.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      // Type filter
      if (filters.oilseedType && product.type !== filters.oilseedType) {
        return false;
      }

      // Geographic region filter (simplified - checking if location contains region)
      if (filters.geographicRegion) {
        const regionKeywords: { [key: string]: string[] } = {
          'North America': ['USA', 'Canada', 'Mexico'],
          'South America': ['Brazil', 'Argentina', 'Chile'],
          'Europe': ['Germany', 'Ukraine', 'France', 'UK'],
          'Asia': ['China', 'India', 'Japan', 'Korea'],
          'Africa': ['South Africa', 'Nigeria', 'Egypt'],
          'Oceania': ['Australia', 'New Zealand']
        };
        
        const keywords = regionKeywords[filters.geographicRegion] || [];
        if (!keywords.some(keyword => product.location.includes(keyword))) {
          return false;
        }
      }

      // Price range filter
      if (filters.priceRange) {
        if (filters.priceRange.min && product.price < filters.priceRange.min) {
          return false;
        }
        if (filters.priceRange.max && product.price > filters.priceRange.max) {
          return false;
        }
      }

      // Quantity range filter
      if (filters.quantityRange) {
        if (filters.quantityRange.min && product.quantity < filters.quantityRange.min) {
          return false;
        }
        if (filters.quantityRange.max && product.quantity > filters.quantityRange.max) {
          return false;
        }
      }

      return true;
    });
  }, [products, filters, searchTerm]);

  const handleCreateProduct = (formData: ProductFormData) => {
    const newProduct: OilseedProduct = {
      id: Date.now().toString(),
      ...formData,
      supplier: 'Current User', // In a real app, this would come from auth
      listingDate: new Date().toISOString().split('T')[0]
    };
    setProducts(prev => [newProduct, ...prev]);
    setShowForm(false);
  };

  const handleEditProduct = (formData: ProductFormData) => {
    if (!editingProduct) return;
    
    setProducts(prev => prev.map(product => 
      product.id === editingProduct.id 
        ? { ...product, ...formData }
        : product
    ));
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      setProducts(prev => prev.filter(product => product.id !== id));
    }
  };

  const handleEditClick = (product: OilseedProduct) => {
    setEditingProduct(product);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const formatQuantity = (quantity: number) => {
    return new Intl.NumberFormat('en-US').format(quantity);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="marketplace-container">
      <div className="marketplace-header">
        <h1>Oilseed Byproducts Marketplace</h1>
        <p>Buy and sell oilseed byproducts worldwide</p>
      </div>

      <div className="marketplace-content">
        {/* Search and Filter Section */}
        <div className="search-filter-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search products by type, location, or supplier..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button 
              className="add-product-btn"
              onClick={() => setShowForm(true)}
            >
              + Add New Listing
            </button>
          </div>
          
          <FilterComponent 
            filters={filters}
            onFiltersChange={setFilters}
          />
        </div>

        {/* Products Grid */}
        <div className="products-section">
          <div className="section-header">
            <h2>Available Products ({filteredProducts.length})</h2>
            <div className="view-toggle">
              <button className="view-btn active">Grid View</button>
              <button className="view-btn">List View</button>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <div className="no-products-icon">🔍</div>
              <h3>No products found</h3>
              <p>Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-header">
                    <h3 className="product-type">{product.type}</h3>
                    <div className="product-actions">
                      <button 
                        className="action-btn edit"
                        onClick={() => handleEditClick(product)}
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button 
                        className="action-btn delete"
                        onClick={() => handleDeleteProduct(product.id)}
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                  
                  <div className="product-details">
                    <div className="detail-row">
                      <span className="detail-label">Quantity:</span>
                      <span className="detail-value">{formatQuantity(product.quantity)} MT</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Price:</span>
                      <span className="detail-value price">{formatPrice(product.price)}/MT</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">{product.location}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Supplier:</span>
                      <span className="detail-value">{product.supplier}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Listed:</span>
                      <span className="detail-value">{formatDate(product.listingDate)}</span>
                    </div>
                  </div>

                  {product.description && (
                    <div className="product-description">
                      <p>{product.description}</p>
                    </div>
                  )}

                  <div className="product-footer">
                    <button className="contact-btn">
                      Contact Supplier
                    </button>
                    <button className="inquiry-btn">
                      Make Inquiry
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Form Modal */}
      {(showForm || editingProduct) && (
        <ProductForm
          onSubmit={editingProduct ? handleEditProduct : handleCreateProduct}
          onCancel={handleCancelForm}
          initialData={editingProduct ? {
            type: editingProduct.type,
            quantity: editingProduct.quantity,
            price: editingProduct.price,
            location: editingProduct.location,
            description: editingProduct.description
          } : undefined}
          isEditing={!!editingProduct}
        />
      )}
    </div>
  );
};

export default GlobalMarketplace;
