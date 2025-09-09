import { useLocation } from "react-router";
import Navbar from "../Navbar";
import ShopItem from "../ShopItem";
import { useState, useEffect } from "react";
import "../styles/Shop.css"

function Shop () {
  const location = useLocation();
  const [cartList, setCartList] = useState(location.state || {});
  const [itemList, setItemList] = useState(null);

  const passItemsToPage = (itemName, numberOfItems, price, imgURL) => {

    let copyCartList = {...cartList}
    copyCartList[itemName] = [numberOfItems, price, imgURL]
    setCartList(copyCartList);
    
  }

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItemList(data));
  }

  let numItems = 0;
  for (var prop in cartList) {
    if (Object.prototype.hasOwnProperty.call(cartList, prop)) {
      numItems += cartList[prop][0]
    }
  }

  if (itemList != null) {
      return (
        <>
        <Navbar numItems={numItems} shopItems={cartList}></Navbar>
          <div>
            <h1>Shop Our Products!</h1>
            <div className="shop-item-section">
              {
                itemList.map((item) => {
                  if(item.title in cartList) {
                    return <ShopItem itemName={item.title} numberOfItems={cartList[item.title][0]} price={item.price} imgURL={item.image} passItemsToPage={passItemsToPage}/>
                  }
                  return <ShopItem itemName={item.title} price={item.price} imgURL={item.image} passItemsToPage={passItemsToPage}/>
                })
              }
              {/* <ShopItem itemName="Item1" price={1} passItemsToPage={passItemsToPage} />
              <ShopItem itemName="Item2" price={2} passItemsToPage={passItemsToPage} /> */}
            </div>
            
          </div>
        </>
      );
  }

  return (
    <>
    <Navbar numItems={numItems} shopItems={cartList}></Navbar>
      <div>
        <h1>Shop Our Products!</h1>
        <div className="shop-item-section">
          <div>Loading...</div>
        </div>
        
      </div>
    </>
  );
};

export default Shop;
