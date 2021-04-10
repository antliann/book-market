import React, {useState, useEffect} from 'react';
import Item from "./Item";


export default function GetBooks(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setIsLoaded(false);
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${props.query}&maxResults=40&filter=paid-ebooks`)
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
    }, [props.query])

    if (error) {
        return <div>Error: {error.message}. Please, change your query.</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            items ?
                items.map((item) =>
                    <Item
                        key={item.id}
                        bookName={item.volumeInfo.title}
                        bookAuthors={item.volumeInfo.authors}
                        imgUrl={item.volumeInfo.imageLinks?.thumbnail}
                        rating={item.volumeInfo.averageRating}
                        price={item.saleInfo.retailPrice?.amount || item.saleInfo.listPrice?.amount || ''}
                        currency={
                            item.saleInfo.retailPrice?.currencyCode ||
                            item.saleInfo.listPrice?.currencyCode || "Unavailable"
                        }
                        googleBooksLink={item.volumeInfo.canonicalVolumeLink}
                    />
                ) :
                <div>No results. Please, change your query</div>
        );
    }
}
