import React from "react";
import "./Header.css";

function Header({showBasket}) {

  return (
    <div className="header_container">
      <div className="header_title">
        <h2 className="title">ShipShop</h2>
      </div>
      <div className="search_input">
        <input type="text" className="input" placeholder="Search.." />
      </div>
      <div className="nav_container">
        <button className="btns basket_icon mx-3" onClick={()=>showBasket(true)} ><i className="fas fa-cart-shopping"></i></button>
      </div>
    </div>
  );
}

export default Header;
