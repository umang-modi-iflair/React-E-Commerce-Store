import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero"> <br /> <br />
        <h1>About Our Ecommerce</h1>
        <p>We make online shopping simple, fast, and secure.</p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are a modern eCommerce platform committed to providing
            high-quality products at affordable prices. Our mission is
            to deliver a seamless and enjoyable shopping experience.
          </p>
          <p>
            With secure payments, fast delivery, and excellent customer
            support, we focus on building trust and long-term relationships.
          </p>
        </div>

        <div className="about-card">
          <span className="about-icon">🛒</span>
          <h3>Trusted Shopping</h3>
          <p>Thousands of customers shop with confidence every day.</p>
        </div>
      </section>

      {/* Features */}
      <section className="about-features">
        <h2>Why Choose Us</h2>

        <div className="features-grid">
          <div className="feature-box">
            <span>🚚</span>
            <h4>Fast Delivery</h4>
            <p>Quick and reliable shipping at your doorstep.</p>
          </div>

          <div className="feature-box">
            <span>🔒</span>
            <h4>Secure Payments</h4>
            <p>Your transactions are protected and safe.</p>
          </div>

          <div className="feature-box">
            <span>💬</span>
            <h4>24/7 Support</h4>
            <p>We are always here to help you.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
