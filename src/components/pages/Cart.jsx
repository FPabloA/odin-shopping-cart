import { Link, useLocation } from "react-router";
import Navbar from "../Navbar";
import { useState } from "react";
import ShopItem from "../ShopItem";

const Cart = () => {
  const location = useLocation();
  const [itemList, setItemList] = useState(location.state || {});
  
  const passItemsToPage = (itemName, numberOfItems, price, imgURL) => {

    let copyItemList = {...itemList}
    copyItemList[itemName] = [numberOfItems, price, imgURL]
    setItemList(copyItemList);
    
  }

  let numItems = 0;
  let cartTotal = 0;
  for (var prop in itemList) {
    if (Object.prototype.hasOwnProperty.call(itemList, prop)) {
      numItems += itemList[prop][0]
      cartTotal += itemList[prop][0] * itemList[prop][1]
    }
  }

  return (
    <>
    <Navbar numItems={numItems} shopItems={itemList}></Navbar>
      <div>
        <h1>Cart Total: ${cartTotal}</h1>
        <div className="shop-item-section">
          {
            
            Object.keys(itemList).map((item) => {
              let itemPrice = itemList[item][1]
              if (itemList[item][0] > 0){
                return <ShopItem itemName={item} imgURL={itemList[item][2]} price={itemList[item][1]} numberOfItems={itemList[item][0]} passItemsToPage={passItemsToPage}/>;
              }
              })
          }
        </div>
      </div>
    </>
    
  );
};

export default Cart;
