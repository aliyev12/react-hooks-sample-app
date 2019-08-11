import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
    <nav className="Header">
        <Link to="/">Home</Link>
        <Link to="/refactoring">Refactoring</Link>
        <Link to="/custom-hooks">Custom Hooks</Link>
        <Link to="/context">Context</Link>
        <Link to="/reducer">Reducer</Link>
    </nav>
);

export default Header;