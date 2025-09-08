import { useLocation } from "react-router";
import Navbar from "../Navbar";
import ShopItem from "../ShopItem";
import { useState } from "react";
import "../styles/Shop.css"

function Shop () {
  const location = useLocation();
  const [itemList, setItemList] = useState(location.state);

  const passItemsToPage = (itemName, numberOfItems) => {

    let copyItemList = {...itemList}
    copyItemList[itemName] = numberOfItems
    setItemList(copyItemList);
    
  }

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
        <h1>Shop Our Products!</h1>
        <div className="shop-item-section">
          <ShopItem itemName="Item1" passItemsToPage={passItemsToPage} />
          <ShopItem itemName="Item2" passItemsToPage={passItemsToPage} />
        </div>
        
      </div>
    </>
  );
};

export default Shop;
