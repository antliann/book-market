import React from 'react';
import ReactDOM from 'react-dom';
import RatingInStars from "./RatingInStars";
// import AddToCartButton from "./AddToCardButton";


export default function Item(props) {
    return (
        <div className="item">
            <a href={props.googleBooksLink} className="img-container" target="_blank">
                <img src={props.imgUrl} className="book-img" alt="Book"/>
            </a>
            <a href={props.googleBooksLink} className="book-name" target="_blank">
                {props.bookName}
            </a>
            <p className="book-author">
                {props.bookAuthor}
            </p>
            <div>
                <RatingInStars rating={props.rating}/>
                <span className="rating-caption">
                    {props.rating}
                </span>
            </div>
            <p className="price-container">
                    <span className="price">
                        {props.price}
                    </span>
                <span className="currency">
                        {' ' + props.currency}
                    </span>
            </p>
        </div>
    );
}
