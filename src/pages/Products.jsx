import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Products', count: 156 },
    { id: 'electronics', name: 'Electronics', count: 45 },
    { id: 'fashion', name: 'Fashion', count: 38 },
    { id: 'home', name: 'Home & Garden', count: 29 },
    { id: 'sports', name: 'Sports', count: 22 },
    { id: 'books', name: 'Books', count: 18 },
    { id: 'beauty', name: 'Beauty', count: 14 }
  ];

  const products = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.5,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      category: 'electronics',
      discount: 20,
      inStock: true,
      description: 'Premium noise-canceling wireless headphones with 30-hour battery life and superior sound quality.'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: 299.99,
      originalPrice: 349.99,
      rating: 4.8,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      category: 'electronics',
      discount: 14,
      inStock: true,
      description: 'Advanced fitness tracking with heart rate monitoring, GPS, and 7-day battery life.'
    },
    {
      id: 3,
      name: 'Premium Cotton T-Shirt',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.2,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
      category: 'fashion',
      discount: 25,
      inStock: true,
      description: 'Soft, comfortable cotton t-shirt with modern fit and excellent quality.'
    },
    {
      id: 4,
      name: 'Ergonomic Office Chair',
      price: 399.99,
      originalPrice: 499.99,
      rating: 4.6,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop',
      category: 'home',
      discount: 20,
      inStock: false,
      description: 'Comfortable ergonomic chair with lumbar support and adjustable height.'
    },
    {
      id: 5,
      name: 'Professional Camera Lens',
      price: 899.99,
      originalPrice: 1099.99,
      rating: 4.9,
      reviews: 87,
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=300&fit=crop',
      category: 'electronics',
      discount: 18,
      inStock: true,
      description: 'High-quality zoom lens for professional photography with image stabilization.'
    },
    {
      id: 6,
      name: 'Yoga Mat Premium',
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.4,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=300&h=300&fit=crop',
      category: 'sports',
      discount: 20,
      inStock: true,
      description: 'Non-slip yoga mat with excellent cushioning and eco-friendly materials.'
    },
    {
      id: 7,
      name: 'Wireless Gaming Mouse',
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.7,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop',
      category: 'electronics',
      discount: 25,
      inStock: true,
      description: 'High-precision gaming mouse with customizable RGB lighting and 1000Hz polling rate.'
    },
    {
      id: 8,
      name: 'Organic Skincare Set',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.3,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop',
      category: 'beauty',
      discount: 25,
      inStock: true,
      description: 'Complete organic skincare routine with cleanser, toner, serum, and moisturizer.'
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const ratingMatch = selectedRating === 0 || product.rating >= selectedRating;

    return categoryMatch && priceMatch && ratingMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }

    return stars;
  };

  return (
    <div className="products-page">
      <div className="products-container">
        {/* Header Section */}
        <div className="products-header"> <br /> <br />
          <h1>Our Products</h1>
          <p>Discover amazing products at great prices</p>
        </div>

        <div className="products-content">
          {/* Sidebar Filters */}
          <aside className="products-sidebar">
            <div className="filter-section">
              <h3>Categories</h3>
              <div className="category-list">
                {categories.map(category => (
                  <label key={category.id} className="category-item">
                    <input
                      type="radio"
                      name="category"
                      value={category.id}
                      checked={selectedCategory === category.id}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    <span className="category-name">{category.name}</span>
                    <span className="category-count">({category.count})</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-range">
                <div className="price-inputs">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="price-input"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="price-input"
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="price-slider"
                />
                <div className="price-display">
                  ${priceRange[0]} - ${priceRange[1]}
                </div>
              </div>
            </div>

            <div className="filter-section">
              <h3>Customer Rating</h3>
              <div className="rating-filters">
                {[4, 3, 2, 1].map(rating => (
                  <label key={rating} className="rating-filter">
                    <input
                      type="radio"
                      name="rating"
                      value={rating}
                      checked={selectedRating === rating}
                      onChange={(e) => setSelectedRating(Number(e.target.value))}
                    />
                    <div className="rating-stars">
                      {renderStars(rating)}
                      <span>& Up</span>
                    </div>
                  </label>
                ))}
                <label className="rating-filter">
                  <input
                    type="radio"
                    name="rating"
                    value={0}
                    checked={selectedRating === 0}
                    onChange={(e) => setSelectedRating(0)}
                  />
                  <span>All Ratings</span>
                </label>
              </div>
            </div>

            <div className="filter-section">
              <h3>Availability</h3>
              <label className="availability-filter">
                <input type="checkbox" defaultChecked />
                <span>In Stock Only</span>
              </label>
            </div>
          </aside>

          {/* Main Content */}
          <main className="products-main">
            {/* Sort and View Controls */}
            <div className="products-controls">
              <div className="results-count">
                Showing {sortedProducts.length} of {products.length} products
              </div>
              <div className="controls-right">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>

                <div className="view-toggle">
                  <button
                    className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => setViewMode('grid')}
                  >
                    ⊞
                  </button>
                  <button
                    className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                    onClick={() => setViewMode('list')}
                  >
                    ☰
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={`products-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
              {sortedProducts.map(product => (
                <div key={product.id} className={`product-card ${viewMode === 'list' ? 'list-item' : ''}`}>
                  <div className="product-image">
                    <Link to={`/products/${product.id}`} className="product-link" aria-label={`View ${product.name}`}>
                      <img src={product.image} alt={product.name} />
                    </Link>
                    {product.discount > 0 && (
                      <div className="discount-badge">-{product.discount}%</div>
                    )}
                    {!product.inStock && (
                      <div className="out-of-stock">Out of Stock</div>
                    )}
                    <div className="product-actions">
                      <button className="action-btn wishlist-btn">♥</button>
                      <button className="action-btn quick-view-btn">👁</button>
                    </div>
                  </div>

                  <div className="product-info">
                    <h3 className="product-name">
                      <Link to={`/products/${product.id}`} className="product-title-link">
                        {product.name}
                      </Link>
                    </h3>
                    <div className="product-rating">
                      <div className="stars">
                        {renderStars(product.rating)}
                      </div>
                      <span className="rating-count">({product.reviews})</span>
                    </div>

                    <div className="product-price">
                      <span className="current-price">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="original-price">${product.originalPrice}</span>
                      )}
                    </div>

                    {viewMode === 'list' && (
                      <p className="product-description">{product.description}</p>
                    )}

                    <div className="product-buttons">
                      <Link className="buy-now-btn" to={`/products/${product.id}`}>
                        View Details
                      </Link>
                      <button
                        className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
                        disabled={!product.inStock}
                      >
                        {!product.inStock ? 'Out of Stock' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="no-products">
                <div className="no-products-icon">🔍</div>
                <h3>No products found</h3>
                <p>Try adjusting your filters to find more products.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
