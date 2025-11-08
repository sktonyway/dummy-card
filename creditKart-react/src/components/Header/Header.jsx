// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link, NOT <a>
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="h-content">
        <div className="h-logo">
          <Link to="/">creditKart</Link></div>
        <div className="navs">
          <span> <Link to="/">Blogs</Link> </span>
          <span> <Link to="/cards">Cards</Link> </span>
        </div>
      </div>
    </header>
  );
}

export default Header;