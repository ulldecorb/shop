import React, { FC } from 'react';

const Navbar: FC = function () {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">SHOP</h1>
      <div className="navbar__cart">
        <span className="cart__text">
          CART:
        </span>
        <figure className="cart">
          <img src="https://static9.depositphotos.com/1636803/1152/i/600/depositphotos_11524654-stock-photo-3d-shopping-cart-isolated.jpg" alt="cart icon" className="cart__image" />
        </figure>
      </div>
    </nav>
  );
};

export default Navbar;
