import { useLocation } from "react-router";
import { useState } from "react";
import Shop from "./Shop";
import Navbar from "../Navbar";
import "../styles/Home.css"

const Home = () => {
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
      <div className="home-wrapper">
        <h1 className="home-header">Shop at Fakemart!</h1>
        <div className="home-about">
          <div className="home-img">IMG placeholder</div>
          <div className="home-body-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, maiores voluptates quos quod repellendus beatae fugiat officia, cupiditate quo iusto quis eligendi ab dicta doloremque quae deserunt sequi sed alias!</div>
        </div>
        <h2>High Value with Low Prices!</h2>
        <div className="home-body-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem laborum saepe dolor. Aspernatur rem praesentium, placeat maxime culpa, perspiciatis doloremque ex ratione repellendus voluptas consequatur amet repudiandae modi ipsa.</div>
      </div>
    </>
    
  );
};

export default Home;
