import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Body from "./components/Body";
import Basket from "./components/Basket";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
function App() {
  const [basket, showBasket] = useState(false);
  const [items, fetchItems] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  // const [buttonText, setButtonText] = useState("Add to Basket");
  // const [buttonColor, setButtonColor] = useState("btn-primary");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const[limit, setLimit] = useState(8);

  useEffect(() => {
    const fetchProductList = async () => {
      const data = await axios
        .get(`https://dummyjson.com/products?limit=${limit}`)
        .then((res) => res.data.products);
        
      fetchItems(data);
      setFilteredProducts(data);

    };
    fetchProductList();
  }, []);

  const handleAddToBasket = (id) => {
    setBasketItems((oldBasketItems) => {
      const newBasketItem = items.find((item) => item.id === id);
      newBasketItem.isInBasket = true;
      return [...oldBasketItems, newBasketItem];
    });
    // setButtonText("Added");
    // setButtonColor("btn-success");
  };
  const handleDeleteButton = (id) => {
    const newState = basketItems.filter((basketItem) => basketItem.id !== id)
    setBasketItems((oldItem)=>{
      oldItem.isDeleted = true;
      return [...newState]
    });
  };

  const handleInputValue = (event) =>{
    let filteredProducts =items.filter(item=>item.title.toLowerCase().includes(event.target.value));
    setFilteredProducts(filteredProducts);
    fetchItems(filteredProducts)
  }

  const handlePageChange = () =>{
    setLimit((oldLimit)=>{
      return {
        limit: oldLimit +8,
      }
    })
  }
  return (
    <>
      <Header showBasket={showBasket} handleInputValue={handleInputValue}/>
      {basket && (
        <Basket
          showBasket={showBasket}
          basketItems={basketItems}
          handleDeleteButton={handleDeleteButton}
        />
      )}
      <Body
        items={filteredProducts}
        addToBasket={handleAddToBasket}
        // buttonText={buttonText}
        // buttonColor={buttonColor}
        basketItems={basketItems}
        handleDeleteButton={handleDeleteButton}


      />
      <Pagination total={30} onPageChange={handlePageChange}/>
      <Footer />
    </>
  );
}

export default App;
