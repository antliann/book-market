import React from 'react';
import ItemsInCart from "./ItemsInCart";


export default function CartModal(props) {
    return props.isOpened ?
        <div className="cart-window">
            <div className="cart-outside" onClick={() => props.closeModal()}>
            </div>
            <div className="cart-modal" style={
                props.items.length > 2 ?
                    {marginBottom: '300px'} :
                    {top: '50%', transform: 'translate(-50%, -50%)'}}>
                <button onClick={() => props.closeModal()} className="close-modal">
                    <img src="close.svg" alt="close" width="20" height="20" style={{pointerEvents: 'none'}}/>
                </button>
                <h2>Your cart</h2>
                <div className="items-in-cart-list">
                    <ItemsInCart
                        items={props.items}
                        changeQuantity={(id, quantity) => props.changeQuantity(id, quantity)}
                        removeItem={(id) => props.removeItem(id)}
                    />
                </div>
                <TotalPrice items={props.items}/>
            </div>
        </div> :
        null;
}

function TotalPrice(props) {
    return props.items.length ?
        <div className="total-price">
            <b>Total: {countSum(props.items)}</b> {props.items[0]?.currency}
        </div> :
        null;
}

function countSum(items) {
    let sum = 0;
    for (const item of items) {
        sum += item.price * item.quantity;
    }
    return sum.toFixed(2);
}
