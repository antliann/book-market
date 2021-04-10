import React, {useState} from 'react';

export default function Header(props) {
    const [query, changeQuery] = useState('');

    return (
        <header>
            <form onSubmit={(event) => {
                props.doSearch(query);
                event.preventDefault();
            }}
                  className="search">
                <input
                    onChange={(event) => changeQuery(event.target.value)}
                    type="text"
                />
                <button
                    type="submit"
                >
                    Search
                </button>
            </form>
        </header>
    )
}
