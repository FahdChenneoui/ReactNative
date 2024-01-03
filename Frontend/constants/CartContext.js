import React, {createContext, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";


export const CartContext = createContext();

export function CartProvider(props) {
  const { articles } = useSelector((state) => state.articles);
  const [items, setItems] = useState([]);
  
  function addItemToCart(id) {
    const product = articles.find((article) => (article._id == id));
    
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item._id == id));
      if(!item) {
          return [...prevItems, {
              _id:id,
              qty: 1,
              product,
              totalPrice: product.price 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item._id == id) {
              item.qty++;
              item.totalPrice += product.price;
            }
            return item;
          });
      }
    });

  }
  function removeCart() {
    setItems([])
  }
  function getItemsCount() {
    let res = 0
    items ? res = items.reduce((sum, item) => (sum + item.qty), 0): res =0
    return res
  }
  
  function getTotalPrice() {
    let res = 0
    items ? res = items.reduce((sum, item) => (sum + item.totalPrice), 0):res =0
    return res 
  }  
  
  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice,removeCart}}>
      {props.children}
    </CartContext.Provider>
  );
}

