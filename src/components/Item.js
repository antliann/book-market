import React from 'react';
import RatingInStars from "./RatingInStars";


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
                {makeAuthorsList(props.bookAuthors)}
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

function makeAuthorsList(authors) {
    if (!authors) return "No author";
    if (authors.length < 3) return authors.join(' & ');
    else return authors[0] + ' and others';
}
