import React from 'react';
import ReactDOM from 'react-dom';


export default class Item extends React.Component {

    addToCart(bookId) {

    }

    render() {
        return (
            <div className="item">
                <a href={this.props.googleBooksLink}><img src={this.props.imgUrl} alt="Book image"/></a>
                <a href={this.props.googleBooksLink}><p className="book-name">{this.props.bookName}</p></a>
                <p className="boot-author">{this.props.bookAuthor}</p>
                <span>{this.props.rating}</span><br/>
                <span>{this.props.currency + ' '}</span>
                <span>{this.props.price}</span><br/>
                <button/* onClick={addToCart(this.props.bookId)}*/>Add to cart</button>
                <br/><br/>
            </div>
        )
    }
}
