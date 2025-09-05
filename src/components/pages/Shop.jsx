import { Link } from "react-router";
import Navbar from "../Navbar";
import ShopItem from "../ShopItem";

const Shop = () => {
  return (
    <>
    <Navbar></Navbar>
      <div>
        <h1>Shop Our Products!</h1>
        <ShopItem />
      </div>
    </>
  );
};

export default Shop;
