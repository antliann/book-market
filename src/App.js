import React, {useState} from 'react';
import Header from "./components/Header";
import BooksList from "./components/BooksList";
import CartModal from "./components/CartModal";


export default function App() {
    const [query, searchQuery] = useState("programming");
    const [itemsInCart, setItemsInCart] = useState([]);
    const [cartModalIsOpened, setIfCartModalIsOpened] = useState(false);

    return (
        <div>
            <Header
                doSearch={(searchInput) => searchQuery(searchInput)}
                items={itemsInCart}
                openModal={() => setIfCartModalIsOpened(true)}
            />
            <div className="books-list">
                <BooksList
                    query={query}
                    addToCart={function (newItem) {
                        for (let i = 0; i < itemsInCart.length; i++) {
                            if (itemsInCart[i].id === newItem.id) {
                                let newItems = itemsInCart.slice();
                                newItems[i].quantity++;
                                setItemsInCart(newItems);
                                return;
                            }
                        }
                        setItemsInCart([...itemsInCart, newItem])
                    }}
                />
            </div>
            <CartModal
                isOpened={cartModalIsOpened}
                closeModal={() => setIfCartModalIsOpened(false)}
                items={itemsInCart}
                changeQuantity={function (id, newQuantity) {
                        for (let i = 0; i < itemsInCart.length; i++) {
                            if (itemsInCart[i].id === id) {
                                let newItems = itemsInCart.slice();
                                newItems[i].quantity = newQuantity;
                                setItemsInCart(newItems);
                                return;
                            }
                        }
                }}
                removeItem={function (id) {
                    if (window.confirm("Do you want to remove this item from cart?")) {
                        for (let i = 0; i < itemsInCart.length; i++) {
                            if (itemsInCart[i].id === id) {
                                let newItems = itemsInCart.slice();
                                newItems.splice(i, 1);
                                setItemsInCart(newItems);
                                return;
                            }
                        }
                    }
                }}
            />
        </div>
    )
}
