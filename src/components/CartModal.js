import React from 'react';
import ItemsInCart from "./ItemsInCart";


export default function CartModal(props) {
    return props.isOpened ?
        <div>
            <div className="cart-window" onClick={() => props.closeModal()}>
            </div>
            <div className="cart-modal" style={props.items.length > 3 ? {position: 'absolute'} : {}}>
                <button onClick={() => props.closeModal()} className="close-modal">
                    <img src="close.svg" alt="close" width="20" height="20" style={{pointerEvents: 'none'}}/>
                </button>
                <div className="items-in-cart-list">
                    <ItemsInCart
                        items={props.items}
                        changeQuantity={(id, quantity) => props.changeQuantity(id, quantity)}
                    />
                </div>
            </div>
        </div> :
        null;
}
