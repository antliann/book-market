import React from 'react';
import ReactDOM from 'react-dom';
//import RatingInStars from "RatingInStars";
//import AddToCartButton from "AddToCardButton";

function RatingInStars(props) {
    return (
        <div className="rating-container">
            <div style={{
                width: props.rating * 20 + '%',
                height: 28 + 'px',
                backgroundColor: '#FFC107',
                position: "absolute",
            }}>
            </div>
            <img src="stars.svg" alt="rating" style={{
                position: "absolute",
                top: -1,
                left: -1
            }}/>
        </div>
    );
}


export default function Item(props) {
    return (
        <div className="item">
            <a href={props.googleBooksLink} className="img-container">
                <img src={props.imgUrl} className="book-img" alt="Book"/>
            </a>
            <a href={props.googleBooksLink} className="book-name">
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
