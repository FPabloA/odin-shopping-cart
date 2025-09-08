import { Link } from "react-router"
import "./styles/Navbar.css"

const Navbar = ({numItems=0, shopItems}) => {
    return (
        <>
            <div className="navbar-wrapper">
                <nav className="navbar">
                    <div className="navbar-left">
                        <Link to={"/"} state={shopItems}>Home</Link>
                    </div>
                    <div className="navbar-middle">
                        <Link to={"/shop"} state={shopItems}>Shop</Link>
                    </div>
                    <div className="navbar-right">
                        <Link to={"/cart"} state={shopItems}>Cart ({numItems})</Link>
                    </div>
                </nav>
            </div>
            
        </>
    )
}

export default Navbar;