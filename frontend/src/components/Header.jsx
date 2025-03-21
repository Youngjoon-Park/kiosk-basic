import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#f4f4f4',
  },
  link: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#333',
    fontSize: '18px',
  }
};

export default Header;
