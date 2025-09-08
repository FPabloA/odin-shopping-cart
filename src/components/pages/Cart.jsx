import { Link, useLocation } from "react-router";
import Navbar from "../Navbar";
import { useState } from "react";

const Cart = () => {
  const location = useLocation();
  const [itemList, setItemList] = useState(location.state);
  
  
  let numItems = 0;
  for (var prop in itemList) {
    if (Object.prototype.hasOwnProperty.call(itemList, prop)) {
      numItems += itemList[prop]
    }
  }

  return (
    <>
    <Navbar numItems={numItems} shopItems={itemList}></Navbar>
      <div>
        <h1>Hello from Cart page!</h1>
      </div>
    </>
    
  );
};

export default Cart;
