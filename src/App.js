import React, {useState} from 'react';
import Header from "./components/Header";
import BooksList from "./components/BooksList";


export default function App() {
    const [query, searchQuery] = useState("harry potter");
    const [items, addItems] = useState(0);

    return (
        <div>
            <Header
                doSearch={(searchInput) => searchQuery(searchInput)}
                items={items}
            />
            <div className="books-list">
                <BooksList
                    query={query}
                    addToCart={() => addItems(items + 1)}
                />
            </div>
        </div>
    )
}
