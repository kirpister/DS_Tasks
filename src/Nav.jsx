import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Nav = () => {
    return (
        <nav>

        <ul>
         <li><Link to='/'>HOME</Link></li>
         <li><Link to='/palindrome'>PALINDROME</Link></li>
         <li><Link to='/bubble'>BUBBLE SORT</Link></li>
         <li><Link to='/stack'>STACK</Link></li>
         <li><Link to='/queue'>QUEUE</Link></li>
        </ul>

      </nav>
    );
};

export default Nav;