import React, {useState} from 'react';

export default function Header(props) {
    const [query, changeQuery] = useState('');

    return (
        <header>
            <form onSubmit={(event) => {
                if (query) {
                    props.doSearch(query);
                }
                event.preventDefault();
            }}
                  className="search">
                <input
                    onChange={(event) => changeQuery(event.target.value)}
                    type="text"
                    placeholder="Search for books"
                />
                <button className="search-btn" type="submit">
                    <img src="search.svg" alt="Search"/>
                </button>
            </form>

            <button className="shopping-cart" onClick={props.openModal}>
                <img src="cart.svg" alt="Cart"/>
                <div className="items-counter">{countItemsInCart(props.items)}</div>
            </button>
        </header>
    )
}

function countItemsInCart(items) {
    let counter = 0;
    for (let item of items) {
        counter += item.quantity;
    }
    return counter;
}
