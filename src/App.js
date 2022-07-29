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
      newBasketItem.count = 1;
      return [...oldBasketItems, newBasketItem];
    });
    
  };
  const handleDeleteButton = (id) => {
    // const newState = basketItems.filter((basketItem) => basketItem.id !== id)
    // setBasketItems((oldItem)=>{
    //   oldItem.isDeleted = true;
    //   return [...newState]
    // });
    setBasketItems(basketItems.filter((basketItem) => basketItem.id !== id));
     console.log("id--", id)
    let updatedList = items.map((item) => {
      console.log("item id--", item.id)

      if (item.id === id) {
        return { ...item, isInBasket: false };
      }
      return item;
    });

    fetchItems(updatedList);
    setFilteredProducts(updatedList);
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
          setBasketItems={setBasketItems}

        />
      )}
      <Body
        items={filteredProducts}
        addToBasket={handleAddToBasket}
        basketItems={basketItems}
        handleDeleteButton={handleDeleteButton}


      />
      <Pagination total={30} onPageChange={handlePageChange}/>
      <Footer />
    </>
  );
}

export default App;
