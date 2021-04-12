import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App.js";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

export const itemsInCart = createStore(reducer);

function reducer(itemsInCart = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            for (let i = 0; i < itemsInCart.length; i++) {
                if (itemsInCart[i].id === action.newItem.id) {
                    if (itemsInCart[i].quantity >= 50) return;
                    let newItems = itemsInCart.slice();
                    newItems[i].quantity++;
                    window.localStorage.setItem('items', JSON.stringify(newItems));
                    return newItems;
                }
            }
            let newItems = [...itemsInCart, action.newItem]
            window.localStorage.setItem('items', JSON.stringify(newItems));
            return newItems;
        case 'ADD_QUANTITY':
            for (let i = 0; i < itemsInCart.length; i++) {
                if (action.newQuantity === 0) action.newQuantity = 1;
                if (action.newQuantity > 50) action.newQuantity = 50;
                if (itemsInCart[i].id === action.id) {
                    let newItems = itemsInCart.slice();
                    newItems[i].quantity = action.newQuantity;
                    window.localStorage.setItem('items', JSON.stringify(newItems));
                    return newItems;
                }
            }
            return;
        case 'REMOVE_ITEM':
            if (window.confirm("Do you want to remove this item from cart?")) {
                for (let i = 0; i < itemsInCart.length; i++) {
                    if (itemsInCart[i].id === action.id) {
                        let newItems = itemsInCart.slice();
                        newItems.splice(i, 1);
                        window.localStorage.setItem('items', JSON.stringify(newItems));
                        return newItems;
                    }
                }
            }
            return;
        case 'LOAD_FROM_STORAGE':
            return JSON.parse(window.localStorage.getItem('items')) || itemsInCart;
        default:
            return itemsInCart;
    }
}

ReactDOM.render(
    <Provider store={itemsInCart}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
