import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import BooksList from "./components/BooksList";
import CartModal from "./components/CartModal";
import {itemsInCart} from "./index";


export default function App(props) {
    const [query, searchQuery] = useState("programming");
    const [, setItemsInCart] = useState([]);
    const [cartModalIsOpened, setIfCartModalIsOpened] = useState(false);

    itemsInCart.dispatch({type: 'LOAD_FROM_STORAGE'});

    return (
        <div>
            <Header
                doSearch={(searchInput) => searchQuery(searchInput)}
                items={itemsInCart.getState()}
                openModal={() => {
                    document.body.style.overflowY = 'hidden';
                    setIfCartModalIsOpened(true)
                }}
            />
            <div className="books-list">
                <BooksList
                    query={query}
                    addToCart={function (newItem) {
                        itemsInCart.dispatch({type: 'ADD_ITEM', newItem: newItem});
                        setItemsInCart(itemsInCart.getState());
                    }}
                />
            </div>
            <CartModal
                isOpened={cartModalIsOpened}
                closeModal={() => {
                    document.body.style.overflowY = 'auto';
                    setIfCartModalIsOpened(false)
                }}
                items={itemsInCart.getState()}
                changeQuantity={function (id, newQuantity) {
                    itemsInCart.dispatch({type: 'ADD_QUANTITY', id: id, newQuantity: newQuantity});
                    setItemsInCart(itemsInCart.getState());
                }}
                removeItem={function (id) {
                    itemsInCart.dispatch({type: 'REMOVE_ITEM', id: id});
                    setItemsInCart(itemsInCart.getState());
                }}
            />
        </div>
    )
}
