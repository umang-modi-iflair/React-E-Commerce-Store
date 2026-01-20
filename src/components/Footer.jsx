const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '20px', textAlign: 'center' }}>
      <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Ecommerce</div>

      <div style={{ marginBottom: '10px' }}>
        <span style={{ margin: '0 10px', cursor: 'pointer' }}>Privacy Policy</span>
        <span style={{ margin: '0 10px', cursor: 'pointer' }}>Terms of Service</span>
        <span style={{ margin: '0 10px', cursor: 'pointer' }}>Return Policy</span>
        <span style={{ margin: '0 10px', cursor: 'pointer' }}>Customer Support</span>
      </div>

      <p style={{ margin: 0, fontSize: '14px' }}>
        © {new Date().getFullYear()} Ecommerce. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
