import { Link } from "react-router"
import "./styles/Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <Link to={"/"}>Home</Link>
                </div>
                <div className="navbar-middle">
                    <Link to={"/shop"}>Shop</Link>
                </div>
                <div className="navbar-right">
                    <Link to={"/cart"}>Cart</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;