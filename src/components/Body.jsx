import React from "react";
import "./Body.css";
function Body({ items, addToBasket, basketItems, handleDeleteButton}) {
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => {
          return (
            <div key={item.id} className="col-sm-12 col-md-3 mb-3">
              <div className="card">
                <img src={item.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <div className="d-flex  justify-content-between align-items-baseline">
                    <button
                      onClick={() => addToBasket(item.id)}
                      className={`btn btn-primary mb-3 mt-3 add ${item.isInBasket && "btn-success disabled" }`}
                    >
                     {item.isInBasket ? "Added": "Add to Basket"} 
                     {basketItems.forEach(basketItem => {
                       return (
                         <>
                          {basketItem.isDeleted && "Add to Basket"}

                         </>
                       )
                     })}
                    </button>
                    <p className="card_price">{item.price}$</p>
                  </div>
                  <p className="card-text">
                    <small className="text-muted">
                      Uploaded {new Date().getDate()} mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
