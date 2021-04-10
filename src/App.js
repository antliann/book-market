import React, {useState, useEffect} from 'react';
import Item from "./components/Item";
import Header from "./components/Header";


function GetBooks() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?" +
            "q=classic&langRestrict=en&maxResults=40&filter=paid-ebooks")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.items);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            items.map((item) =>
                <Item
                    key={item.id}
                    bookName={item.volumeInfo.title}
                    bookAuthor={makeAuthorsList(item.volumeInfo.authors)}
                    imgUrl={item.volumeInfo.imageLinks?.thumbnail || "No image"}
                    rating={item.volumeInfo.averageRating?.toFixed(1) || "No rating"}
                    price={item.saleInfo.retailPrice?.amount || item.saleInfo.listPrice?.amount}
                    currency={item.saleInfo.retailPrice?.currencyCode || item.saleInfo.listPrice?.currencyCode || "Unavailable"}
                    googleBooksLink={item.volumeInfo.canonicalVolumeLink}
                />
            )
        );
    }
}

function makeAuthorsList(authors) {
    if (!authors) return "No author"
    if (authors.length < 3) return authors.join(' & ');
    else return authors[0] + ' and others';
}


export default function App(props) {
    return (
        <div>
            <Header/>
            <div className="books-list">
                <GetBooks
                    query='classic'
                />
            </div>
        </div>
    )
}