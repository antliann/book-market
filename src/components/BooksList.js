import React, {useState, useEffect} from 'react';
import Item from "./Item";


export default function BooksList(props) {
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
        return <div className="info-message">Error: {error.message}. Please, change your query.</div>;
    } else if (!isLoaded) {
        return <div className="info-message">Loading...</div>;
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
                        price={item.saleInfo.retailPrice?.amount || item.saleInfo.listPrice?.amount || 0}
                        currency={
                            item.saleInfo.retailPrice?.currencyCode ||
                            item.saleInfo.listPrice?.currencyCode || "Unavailable"
                        }
                        googleBooksLink={item.volumeInfo.canonicalVolumeLink}
                        addToCart={() => props.addToCart({
                            id: item.id,
                            bookName: item.volumeInfo.title,
                            bookAuthors: item.volumeInfo.authors,
                            imgUrl: item.volumeInfo.imageLinks?.thumbnail,
                            price: item.saleInfo.retailPrice?.amount || item.saleInfo.listPrice?.amount || 0,
                            currency:
                                item.saleInfo.retailPrice?.currencyCode ||
                                item.saleInfo.listPrice?.currencyCode || "Unavailable",
                            googleBooksLink: item.volumeInfo.canonicalVolumeLink,
                            quantity: 1,
                        })}
                    />
                ) :
                <div className="info-message">
                    No results found. Please, change your query
                </div>
        );
    }
}
