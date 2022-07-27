import React from "react";
import "./Basket.css";
function Basket({ showBasket, basketItems, handleDeleteButton }) {
  return (
    <div className="basket">
      <div className="basket_products">
          <button className="btn btn-cancel btn-danger" onClick={() => showBasket(false)}>
            x
          </button>
          <h3 className="mb-5 text-center">Your Products</h3>
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
                <p>{basketItem.price}$</p>
              </div>
              <div className="product_count">
                <button className="buttons">-</button>
                <span>1</span>
                <button className="buttons">+</button>
              </div>
              <div className="product_delete">
                <button className="buttons" onClick={()=>handleDeleteButton(basketItem.id)}><i className="fa-solid fa-trash"></i></button>
              </div>
            </div>
          );
        })}
        {/* <div className="cancel">
          <button className="btn btn-danger" onClick={() => showBasket(false)}>
            Cancel
          </button>
          <button className="btn btn-success" onClick={() => showBasket(false)}>
            Finish
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Basket;
