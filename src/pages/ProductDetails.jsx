import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css';

// NOTE: For now this page uses the same sample products as Products.jsx.
// Next step could be to move products into a shared file or fetch from Magento.
const ProductDetails = () => {
  const { productId } = useParams();

  const products = useMemo(
    () => [
      {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.5,
        reviews: 128,
        image:
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&h=900&fit=crop',
        category: 'electronics',
        discount: 20,
        inStock: true,
        description:
          'Premium noise-canceling wireless headphones with 30-hour battery life and superior sound quality.',
      },
      {
        id: 2,
        name: 'Smart Fitness Watch',
        price: 299.99,
        originalPrice: 349.99,
        rating: 4.8,
        reviews: 95,
        image:
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&h=900&fit=crop',
        category: 'electronics',
        discount: 14,
        inStock: true,
        description:
          'Advanced fitness tracking with heart rate monitoring, GPS, and 7-day battery life.',
      },
      {
        id: 3,
        name: 'Premium Cotton T-Shirt',
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.2,
        reviews: 67,
        image:
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&h=900&fit=crop',
        category: 'fashion',
        discount: 25,
        inStock: true,
        description:
          'Soft, comfortable cotton t-shirt with modern fit and excellent quality.',
      },
      {
        id: 4,
        name: 'Ergonomic Office Chair',
        price: 399.99,
        originalPrice: 499.99,
        rating: 4.6,
        reviews: 203,
        image:
          'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=900&h=900&fit=crop',
        category: 'home',
        discount: 20,
        inStock: false,
        description: 'Comfortable ergonomic chair with lumbar support and adjustable height.',
      },
      {
        id: 5,
        name: 'Professional Camera Lens',
        price: 899.99,
        originalPrice: 1099.99,
        rating: 4.9,
        reviews: 87,
        image:
          'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=900&h=900&fit=crop',
        category: 'electronics',
        discount: 18,
        inStock: true,
        description:
          'High-quality zoom lens for professional photography with image stabilization.',
      },
      {
        id: 6,
        name: 'Yoga Mat Premium',
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.4,
        reviews: 156,
        image:
          'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=900&h=900&fit=crop',
        category: 'sports',
        discount: 20,
        inStock: true,
        description: 'Non-slip yoga mat with excellent cushioning and eco-friendly materials.',
      },
      {
        id: 7,
        name: 'Wireless Gaming Mouse',
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.7,
        reviews: 234,
        image:
          'https://images.unsplash.com/photo-1527814050087-3793815479db?w=900&h=900&fit=crop',
        category: 'electronics',
        discount: 25,
        inStock: true,
        description:
          'High-precision gaming mouse with customizable RGB lighting and 1000Hz polling rate.',
      },
      {
        id: 8,
        name: 'Organic Skincare Set',
        price: 149.99,
        originalPrice: 199.99,
        rating: 4.3,
        reviews: 78,
        image:
          'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&h=900&fit=crop',
        category: 'beauty',
        discount: 25,
        inStock: true,
        description:
          'Complete organic skincare routine with cleanser, toner, serum, and moisturizer.',
      },
    ],
    []
  );

  const product = products.find((p) => String(p.id) === String(productId));

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    for (let i = 0; i < fullStars; i++) stars.push('★');
    if (hasHalfStar) stars.push('★');
    while (stars.length < 5) stars.push('☆');
    return stars.join('');
  };

  if (!product) {
    return (
      <div className="pd-page">
        <div className="pd-container">
          <div className="pd-breadcrumbs">
            <Link to="/products">← Back to Products</Link>
          </div>
          <div className="pd-notfound">
            <div className="pd-notfound-icon">🔎</div>
            <h1>Product not found</h1>
            <p>That product doesn’t exist or was removed.</p>
            <Link className="pd-primary" to="/products">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pd-page">
      <div className="pd-container">
        <div className="pd-breadcrumbs">
          <Link to="/products">← Back to Products</Link>
        </div>

        <div className="pd-grid">
          <div className="pd-imageWrap">
            <img className="pd-image" src={product.image} alt={product.name} />
            {product.discount > 0 && <div className="pd-badge">-{product.discount}%</div>}
            {!product.inStock && <div className="pd-oos">Out of Stock</div>}
          </div>

          <div className="pd-info">
            <h1 className="pd-title">{product.name}</h1>

            <div className="pd-rating">
              <div className="pd-stars" aria-label={`Rating ${product.rating} out of 5`}>
                {renderStars(product.rating)}
              </div>
              <div className="pd-reviews">{product.rating} • {product.reviews} reviews</div>
            </div>

            <div className="pd-priceRow">
              <div className="pd-price">${product.price}</div>
              {product.originalPrice > product.price && (
                <div className="pd-original">${product.originalPrice}</div>
              )}
            </div>

            <p className="pd-desc">{product.description}</p>

            <div className="pd-actions">
              <button className="pd-add" disabled={!product.inStock}>
                {!product.inStock ? 'Out of Stock' : 'Add to Cart'}
              </button>
              <button className="pd-buy">Buy Now</button>
            </div>

            <div className="pd-meta">
              <div className="pd-metaItem">
                <span className="pd-metaKey">Category</span>
                <span className="pd-metaVal">{product.category}</span>
              </div>
              <div className="pd-metaItem">
                <span className="pd-metaKey">Availability</span>
                <span className={`pd-metaVal ${product.inStock ? 'ok' : 'bad'}`}>
                  {product.inStock ? 'In stock' : 'Out of stock'}
                </span>
              </div>
            </div>

            <div className="pd-note">
              This is a demo details page. Next we can connect to Magento and fetch real product data.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;


