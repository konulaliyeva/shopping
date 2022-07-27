import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Body from "./components/Body";
import Basket from "./components/Basket";
import Footer from "./components/Footer";

function App() {
  const [basket, showBasket] = useState(false);
  const [items, fetchItems] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [buttonText, setButtonText] = useState('Add to Basket');
  const [buttonColor, setButtonColor] = useState('btn-primary');



  useEffect(() => {
    const fetchProductList = async () => {
      const data = await axios
        .get("https://dummyjson.com/products")
        .then((res) => res.data.products);

      fetchItems(data);
    };
    fetchProductList();
  }, []);

  const handleAddToBasket = (id) => {
    setBasketItems((oldBasketItems) => {
      const newBasketItem = items.find((item) => item.id === id);
      return [...oldBasketItems, newBasketItem];
    });
      setButtonText("Added");
    setButtonColor("btn-success");

    
  };
   const handleDeleteButton = (id) => {
    setBasketItems(basketItems.filter((basketItem)=>basketItem.id !== id));
   }
  return (
    <>
      <Header showBasket={showBasket} />
      {basket && <Basket showBasket={showBasket} basketItems={basketItems} handleDeleteButton={handleDeleteButton}/>}
      <Body items={items} addToBasket={handleAddToBasket} buttonText={buttonText} buttonColor={buttonColor}/>
      <Footer />
    </>
  );
}

export default App;
