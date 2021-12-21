import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const cartItem=useSelector((state)=>state.groupReducer.cart)
    return (
        <div>
            <Link to="/">Class Redux</Link>
            <input type="Search" />
            <button>Search</button>
            <Link to="/cart">Cart:{cartItem.length}</Link>
        </div>
    );
};

export default NavBar;