import "./styles/ShopItem.css"
import { useState } from "react";

function ShopItem({imgURL, itemName="Item", price=0, passItemsToPage, numberOfItems=0}) {
    const [numItem, setNumItem] = useState(numberOfItems);

    const handleNumChange = (e) => {
        const newNum = e.target.value;
        setNumItem(newNum);
        passItemsToPage(itemName, newNum, price, imgURL);
    }

    const handleNumIncrease = () => {
        const newNum = parseInt(numItem) + 1;
        setNumItem(newNum);
        passItemsToPage(itemName, newNum, price, imgURL);
    }

    const handleNumDecrease = () => {
        const newNum = parseInt(numItem) - 1;
        setNumItem(newNum);
        passItemsToPage(itemName, newNum, price, imgURL);
    }

    return (
        <>
        <div className="shop-item-wrapper">
            <div className="shop-item-left">
                <div className="shop-item-img-con">
                    <img src={imgURL} className="shop-item-img"></img>
                </div>
            </div>
            <div className="shop-item-right"> 
                <div className="shop-item-title">{itemName}</div>
                <div className="shop-item-price">${price}</div>
                <div className="shop-item-price">Total: ${price * numItem}</div>
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