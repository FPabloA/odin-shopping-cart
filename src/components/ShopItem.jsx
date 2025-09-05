import "./styles/ShopItem.css"
import { useState } from "react";

function ShopItem({imgURL, itemName="Item", price=0}) {
    const [numItem, setNumItem] = useState(0);

    const handleNumChange = (e) => {
        const newNum = e.target.value;
        setNumItem(newNum);
    }

    const handleNumIncrease = () => {
        const newNum = parseInt(numItem) + 1;
        setNumItem(newNum);
    }

    const handleNumDecrease = () => {
        const newNum = parseInt(numItem) - 1;
        setNumItem(newNum);
    }

    return (
        <>
        <div className="shop-item-wrapper">
            <div className="shop-item-left">
                <div className="shop-item-img">IMG placeholder</div>
            </div>
            <div className="shop-item-right"> 
                <div className="shop-item-title">{itemName}</div>
                <div className="shop-item-price">${price}</div>
                <div className="shop-item-interact-row">
                    <button onClick={handleNumDecrease}>-</button>
                    <input className="shop-item-input" type="number" min={0} value={numItem} onChange={handleNumChange}></input>
                    <button onClick={handleNumIncrease}>+</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShopItem;