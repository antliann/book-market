import React from 'react';
import {makeAuthorsList} from './Item';


export default function ItemsInCart(props) {
    return props.items.length ?
        props.items.map(function (item) {
                return (
                    <div key={item.id} className="item-in-cart">
                        <a href={item.googleBooksLink} className="img-container" target="_blank">
                            {item.imgUrl ?
                                <img src={item.imgUrl} className="book-img" alt="Book cover"/> :
                                "(No cover image)"
                            }
                        </a>
                        <div className="cart-item-info">
                            <a href={item.googleBooksLink} className="book-name" target="_blank">
                                {item.bookName}
                            </a>
                            <p className="book-author">{makeAuthorsList(item.bookAuthors)}</p>
                            <div>
                            </div>
                            <p className="price-container">
                                <span className="price">{(+item.price).toFixed(2)}</span>
                                <span className="currency">{' ' + item.currency}</span>
                            </p>
                            <div className="quantity-counter">
                                <input
                                    onChange={(event) => props.changeQuantity(item.id, +event.target.value)}
                                    value={item.quantity} type="number" min="1" max="50"
                                    className="quantity-field"/>
                                <button
                                    style={item.quantity === 1 ? {backgroundColor: '#BEBEBE', cursor: "default"} : {}}
                                    onClick={() => {
                                        if (item.quantity > 1) props.changeQuantity(item.id, item.quantity - 1)
                                    }}
                                    className="quantity-button minus">-
                                </button>
                                <button
                                    onClick={() => props.changeQuantity(item.id, item.quantity + 1)}
                                    className="quantity-button plus">+
                                </button>
                                <button className="remove-button" onClick={() => props.removeItem(item.id)}>
                                    <img src="remove.svg" alt="Delete"/>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        ) :
        <div className="info-message" style={{top: '22vh'}}>Your cart is empty</div>;
}
