import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Item from "./components/item";


export default function GetBooks() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?" +
            "q=programming&langRestrict=en&maxResults=40&filter=paid-ebooks")
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
                    bookName={item.volumeInfo.title}
                    bookAuthor={item.volumeInfo.authors?.join(', ') || "No authors"}
                    imgUrl={item.volumeInfo.imageLinks.thumbnail}
                    rating={item.volumeInfo.averageRating || "No rating"}
                    currency={item.saleInfo.retailPrice?.currencyCode || item.saleInfo.listPrice?.currencyCode || ''}
                    price={item.saleInfo.retailPrice?.amount || item.saleInfo.listPrice?.amount || "No price"}
                    googleBooksLink={item.volumeInfo.canonicalVolumeLink}
                />
            )
        );
    }
}
