import App from "./App";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";

const routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/shop",
        element: <Shop />
    },
    {
        path: "/cart",
        element: <Cart />
    }

]

export default routes;