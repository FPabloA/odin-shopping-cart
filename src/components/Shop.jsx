import { Link } from "react-router";

const Shop = () => {
  return (
    <div>
      <h1>Hello from Shop page!</h1>
      <Link to={"/cart"}>To Cart</Link>
    </div>
  );
};

export default Shop;
