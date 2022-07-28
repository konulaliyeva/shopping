import React from "react";
import "./Header.css";

function Header({showBasket, handleInputValue}) {

  return (
    <div className="header_container">
      <div className="header_title">
        <h2 className="title">Stock</h2>
      </div>
      <div className="search_input">
        <input type="text" className="input" placeholder="Search.." onInput={handleInputValue}/>
      </div>
      <div className="nav_container">
        <button className="btns basket_icon mx-3" onClick={()=>showBasket(true)} ><i className="fas fa-cart-shopping"></i></button>
      </div>
    </div>
  );
}

export default Header;
