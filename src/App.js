import React, {useState} from 'react';
import Header from "./components/Header";
import BooksList from "./components/BooksList";


export default function App() {
    const [query, searchQuery] = useState("harry potter");

    return (
        <div>
            <Header
                doSearch={(searchInput) => searchQuery(searchInput)}
            />
            <div className="books-list">
                <BooksList
                    query={query}
                />
            </div>
        </div>
    )
}
