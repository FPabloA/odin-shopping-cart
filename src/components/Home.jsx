import { Link } from "react-router";
import Shop from "./Shop";

const Home = () => {
  return (
    <div>
      <h1>Hello from Home page!</h1>
      <Link to={"/shop"}>Shop!</Link>
    </div>
  );
};

export default Home;
