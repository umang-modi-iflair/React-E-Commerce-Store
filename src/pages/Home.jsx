import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const categories = useMemo(
    () => [
      { id: 'electronics', name: 'Electronics', icon: '⚡' },
      { id: 'fashion', name: 'Fashion', icon: '👕' },
      { id: 'home', name: 'Home', icon: '🏠' },
      { id: 'beauty', name: 'Beauty', icon: '💄' },
      { id: 'sports', name: 'Sports', icon: '⚽' },
      { id: 'books', name: 'Books', icon: '📚' },
    ],
    []
  );

  const deals = useMemo(
    () => [
      { title: 'Headphones', off: 'Up to 30% off', emoji: '🎧' },
      { title: 'Smart Watches', off: 'Up to 20% off', emoji: '⌚' },
      { title: 'Laptops', off: 'Save $300+', emoji: '💻' },
      { title: 'Skincare', off: 'Buy 2 get 1', emoji: '🧴' },
    ],
    []
  );

  const featured = useMemo(
    () => [
      { name: 'Wireless Headphones', price: '$199.99', rating: 4.6, reviews: 128, emoji: '🎧' },
      { name: 'Smart Watch', price: '$299.99', rating: 4.8, reviews: 95, emoji: '⌚' },
      { name: 'Gaming Mouse', price: '$89.99', rating: 4.7, reviews: 234, emoji: '🖱️' },
      { name: 'Bluetooth Speaker', price: '$79.99', rating: 4.4, reviews: 156, emoji: '🔊' },
      { name: 'Premium T‑Shirt', price: '$29.99', rating: 4.2, reviews: 67, emoji: '👕' },
      { name: 'Yoga Mat', price: '$79.99', rating: 4.4, reviews: 156, emoji: '🧘' },
    ],
    []
  );

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    const stars = [];
    for (let i = 0; i < full; i++) stars.push(<span key={`f-${i}`}>★</span>);
    if (half) stars.push(<span key="h">☆</span>);
    while (stars.length < 5) stars.push(<span key={`e-${stars.length}`}>☆</span>);
    return stars;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // For now we route to products; later you can pass query via search params.
    navigate('/products');
  };

  return (
    <div className="home-page">
      {/* Top hero */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-copy">  <br /> <br /> 
            <div className="home-badge">Fast delivery • Secure payments • Easy returns</div>
            <h1 className="home-title">Shop smarter with Ecommerce</h1>
            <p className="home-subtitle">
              Find trending products, best deals, and top-rated items — all in one place.
            </p>

            <form className="home-search" onSubmit={onSubmit} role="search" aria-label="Search products">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="home-search-input"
                placeholder="Search for products, brands and more…"
                aria-label="Search query"
              />
              <button className="home-search-btn" type="submit">
                Search
              </button>
            </form>

            <div className="home-cta-row">
              <Link className="home-cta-primary" to="/products">
                Shop Products
              </Link>
              <Link className="home-cta-secondary" to="/categories">
                Browse Categories
              </Link>
            </div>
          </div>

          <div className="home-hero-card">
            <div className="home-hero-card-top">
              <div className="home-hero-card-title">Today’s Highlights</div>
              <div className="home-hero-pill">🔥 Deals</div>
            </div>
            <div className="home-hero-kpis">
              <div className="home-kpi">
                <div className="home-kpi-num">500+</div>
                <div className="home-kpi-label">Products</div>
              </div>
              <div className="home-kpi">
                <div className="home-kpi-num">4.7★</div>
                <div className="home-kpi-label">Avg rating</div>
              </div>
              <div className="home-kpi">
                <div className="home-kpi-num">24/7</div>
                <div className="home-kpi-label">Support</div>
              </div>
            </div>
            <div className="home-hero-card-note">
              Tip: Use filters on the Products page to narrow by category, price and rating.
            </div>
          </div>
        </div>
      </section>

      {/* Categories strip */}
      <section className="home-section">
        <div className="home-section-head">
          <h2>Shop by Category</h2>
          <Link to="/categories" className="home-link">
            View all →
          </Link>
        </div>
        <div className="home-cats">
          {categories.map((c) => (
            <Link key={c.id} to="/categories" className="home-cat">
              <div className="home-cat-emoji" aria-hidden="true">
                {c.icon}
              </div>
              <div className="home-cat-name">{c.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Deals */}
      <section className="home-section">
        <div className="home-section-head">
          <h2>Today’s Deals</h2>
          <Link to="/products" className="home-link">
            Shop deals →
          </Link>
        </div>
        <div className="home-deals">
          {deals.map((d) => (
            <Link key={d.title} to="/products" className="home-deal">
              <div className="home-deal-emoji" aria-hidden="true">
                {d.emoji}
              </div>
              <div>
                <div className="home-deal-title">{d.title}</div>
                <div className="home-deal-sub">{d.off}</div>
              </div>
              <div className="home-deal-go" aria-hidden="true">
                →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="home-section">
        <div className="home-section-head">
          <h2>Featured Products</h2>
          <Link to="/products" className="home-link">
            View all →
          </Link>
        </div>
        <div className="home-grid">
          {featured.map((p) => (
            <div key={p.name} className="home-product">
              <div className="home-product-img" aria-hidden="true">
                {p.emoji}
              </div>
              <div className="home-product-body">
                <div className="home-product-name">{p.name}</div>
                <div className="home-product-rating" aria-label={`Rating ${p.rating} out of 5`}>
                  <div className="home-stars" aria-hidden="true">
                    {renderStars(p.rating)}
                  </div>
                  <div className="home-reviews">({p.reviews})</div>
                </div>
                <div className="home-product-price">{p.price}</div>
                <Link to="/products" className="home-add">
                  Add to cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;


