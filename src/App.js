import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Body from "./components/Body";
import Basket from "./components/Basket";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import { Route, Routes } from "react-router-dom";
function App() {
  const [basket, showBasket] = useState(false);
  const [items, fetchItems] = useState([]);
  const [basketItems, setBasketItems] = useState([]);

  const [skip, setSkip] = useState(0);
  const [total, setDataTotal] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const limit =20;

  useEffect(() => {
    const fetchProductList = async (skip, inputValue, limit) => {
      const data = await axios
        .get(`https://dummyjson.com/products/search?skip=${skip}&limit=${limit}&q=${inputValue}`)
        .then((res) => res.data); 
        let total = data.total;
        const products = data.products
      setDataTotal(total);
      fetchItems(products);
    };
    fetchProductList(skip, inputValue, limit);
  }, [skip, inputValue]);

  const handleAddToBasket = (id) => {
    setBasketItems((oldBasketItems) => {
      const newBasketItem = items.find((item) => item.id === id);
      newBasketItem.isInBasket = true;
      newBasketItem.count = 1;
      return [...oldBasketItems, newBasketItem];
    });
  };
  const handleDeleteButton = (id) => {
    setBasketItems(basketItems.filter((basketItem) => basketItem.id !== id));
    let updatedList = items.map((item) => {

      if (item.id === id) {
        return { ...item, isInBasket: false };
      }
      return item;
    });

    fetchItems(updatedList);
  };

  const handleInputValue = (event) => {
    
    let inputValue = event.target.value;
    setInputValue(inputValue);
   
  };

  const handlePageChange = (page) => {
    setSkip(() => {
      return (page - 1) * limit;
    });
  };

  // skip = (page - 1) * limit

  return (
    <>
      <Header showBasket={showBasket} handleInputValue={handleInputValue} />
      {basket && (
        <Basket
          showBasket={showBasket}
          basketItems={basketItems}
          handleDeleteButton={handleDeleteButton}
          setBasketItems={setBasketItems}
        />
      )}
      <Body
        items={items}
        addToBasket={handleAddToBasket}
        basketItems={basketItems}
        handleDeleteButton={handleDeleteButton}
      />
      <Pagination total={total} onPageChange={handlePageChange} />

      <Footer />
    </>
  );
}

export default App;
