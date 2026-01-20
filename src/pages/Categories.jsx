import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      icon: '⚡',
      description: 'Latest gadgets and electronic devices for modern living',
      productCount: 1247,
      subcategories: ['Smartphones', 'Laptops', 'Headphones', 'Smart Watches', 'Tablets', 'Cameras'],
      featured: true,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'fashion',
      name: 'Fashion',
      icon: '👕',
      description: 'Trendy clothing and accessories for every style',
      productCount: 892,
      subcategories: ['Men\'s Clothing', 'Women\'s Clothing', 'Shoes', 'Accessories', 'Bags', 'Jewelry'],
      featured: true,
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 'home',
      name: 'Home & Garden',
      icon: '🏠',
      description: 'Everything you need to make your home beautiful and functional',
      productCount: 634,
      subcategories: ['Furniture', 'Decor', 'Kitchen', 'Bathroom', 'Garden Tools', 'Lighting'],
      featured: true,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'sports',
      name: 'Sports & Fitness',
      icon: '⚽',
      description: 'Equipment and gear for your active lifestyle',
      productCount: 456,
      subcategories: ['Exercise Equipment', 'Sports Apparel', 'Footwear', 'Accessories', 'Nutrition', 'Outdoor Gear'],
      featured: false,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'books',
      name: 'Books & Media',
      icon: '📚',
      description: 'Books, movies, music and digital entertainment',
      productCount: 1589,
      subcategories: ['Fiction', 'Non-Fiction', 'Textbooks', 'Movies', 'Music', 'Digital Media'],
      featured: false,
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'beauty',
      name: 'Beauty & Health',
      icon: '💄',
      description: 'Cosmetics, skincare and wellness products',
      productCount: 723,
      subcategories: ['Skincare', 'Makeup', 'Hair Care', 'Fragrance', 'Wellness', 'Personal Care'],
      featured: false,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'toys',
      name: 'Toys & Games',
      icon: '🧸',
      description: 'Fun and educational toys for all ages',
      productCount: 345,
      subcategories: ['Action Figures', 'Board Games', 'Educational Toys', 'Building Sets', 'Dolls', 'Puzzles'],
      featured: false,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'automotive',
      name: 'Automotive',
      icon: '🚗',
      description: 'Car accessories and automotive supplies',
      productCount: 289,
      subcategories: ['Car Accessories', 'Tools', 'Maintenance', 'Electronics', 'Interior', 'Exterior'],
      featured: false,
      color: 'from-gray-500 to-gray-700'
    }
  ];

  const featuredCategories = categories.filter(cat => cat.featured);
  const otherCategories = categories.filter(cat => !cat.featured);

  return (
    <div className="categories-page">
      <div className="categories-container">
        {/* Header Section */}
        <div className="categories-header"> <br /><br />
          <h1>Product Categories</h1>
          <p>Explore our wide range of product categories and find exactly what you're looking for</p>
        </div>

        {/* Featured Categories */}
        <section className="featured-categories">
          <h2 className="section-title">Featured Categories</h2>
          <div className="featured-grid">
            {featuredCategories.map(category => (
              <div key={category.id} className={`featured-card ${category.color}`}>
                <div className="featured-content">
                  <div className="category-icon">{category.icon}</div>
                  <div className="category-info">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <div className="category-stats">
                      <span className="product-count">{category.productCount} products</span>
                    </div>
                  </div>
                  <div className="category-action">
                    <button className="explore-btn">Explore</button>
                  </div>
                </div>
                <div className="featured-bg-pattern"></div>
              </div>
            ))}
          </div>
        </section>

        {/* All Categories Grid */}
        <section className="all-categories">
          <h2 className="section-title">All Categories</h2>
          <div className="categories-grid">
            {otherCategories.map(category => (
              <div key={category.id} className="category-card">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3 className="category-name">{category.name}</h3>
                  <span className="product-count">{category.productCount} products</span>
                </div>

                <p className="category-description">{category.description}</p>

                <div className="subcategories">
                  <h4>Popular in this category:</h4>
                  <div className="subcategory-tags">
                    {category.subcategories.slice(0, 4).map((sub, index) => (
                      <span key={index} className="subcategory-tag">{sub}</span>
                    ))}
                    {category.subcategories.length > 4 && (
                      <span className="subcategory-more">+{category.subcategories.length - 4} more</span>
                    )}
                  </div>
                </div>

                <button className="category-btn">Browse Category</button>
              </div>
            ))}
          </div>
        </section>

        {/* Category Stats */}
        <section className="category-stats-section">
          <div className="stats-overview">
            <div className="stat-item">
              <div className="stat-number">{categories.reduce((sum, cat) => sum + cat.productCount, 0).toLocaleString()}+</div>
              <div className="stat-label">Total Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{categories.length}</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{categories.reduce((sum, cat) => sum + cat.subcategories.length, 0)}</div>
              <div className="stat-label">Subcategories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Daily</div>
              <div className="stat-label">New Arrivals</div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="newsletter-section">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Get notified about new categories and special offers</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;
