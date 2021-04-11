import React from 'react';
import RatingInStars from "./RatingInStars";


export default function Item(props) {
    return (
        <div className="item">
            <a href={props.googleBooksLink} className="img-container" target="_blank">
                {props.imgUrl ?
                    <img src={props.imgUrl} className="book-img" alt="Book cover"/> :
                    "(No cover image)"
                }
            </a>
            <a href={props.googleBooksLink} className="book-name" target="_blank">
                {props.bookName}
            </a>
            <p className="book-author">{makeAuthorsList(props.bookAuthors)}</p>
            <div>
                <RatingInStars rating={props.rating}/>
                <span className="rating-caption">
                    {props.rating?.toFixed(1) || "No rating"}
                </span>
            </div>
            <p className="price-container">
                <span className="price">{(+props.price).toFixed(2)}</span>
                <span className="currency">{' ' + props.currency}</span>
            </p>
            <button onClick={props.addToCart} className="add-to-cart">
                <img src="cart.svg" alt="Cart" style={{pointerEvents: 'none'}} />
            </button>
        </div>
    );
}

export function makeAuthorsList(authors) {
    if (!authors) return "No author";
    if (authors.length < 3) return authors.join(' & ');
    else return authors[0] + ' and others';
}
