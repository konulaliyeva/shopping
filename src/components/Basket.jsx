import React, { useState } from "react";
import "./Basket.css";
import SelectForm from "./SelectForm";
function Basket({ showBasket, basketItems, handleDeleteButton }) {
  const [selectedValue, setSelectedValue]=useState(1);
  function handleSelectValue(event){
  setSelectedValue(event.target.value);
  }
  return (
    <div className="basket">
      <div className="basket_products">
          <button className="btn btn-cancel btn-danger" onClick={() => showBasket(false)}>
            x
          </button>
          <h3 className="mb-5 text-center">Your Products</h3>
          {basketItems.length===0 && <p style={{fontStyle: "italic", textAlign:'center', color: "rgb(142, 139, 139"}}>Your basket is currently empty!</p>}

        {basketItems.map((basketItem) => {
          return (
            <div key={basketItem.id} className="basket_product">
              <img
                className="basket_img"
                src={basketItem.thumbnail}
                alt="..."
              />
              <div className="product_desc">
                <h6>{basketItem.title}</h6>
                <p>{basketItem.price * selectedValue}$</p>
              </div>
              <div className="product_count">
                <SelectForm handleSelectValue={handleSelectValue}/>
              </div>
              <div className="product_delete">
                <button className="buttons" onClick={()=>handleDeleteButton(basketItem.id)}><i className="fa-solid fa-trash"></i></button>
              </div>
            </div>
          );
        })}
       
      </div>
    </div>
  );
}

export default Basket;
