import React, {useState} from 'react';

export default function Header(props) {
    const [query, changeQuery] = useState('');

    return (
        <header>
            <form onSubmit={(event) => {
                if (query) {
                    props.doSearch(query);
                }
                event.preventDefault();
            }}
                  className="search">
                <input
                    onChange={(event) => changeQuery(event.target.value)}
                    type="text"
                    placeholder="Search for books"
                />
                <button className="search-btn" type="submit">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.7192 21.3641L16.1786 14.8235C17.4455 13.2586 18.2083 11.27 18.2083 9.10418C18.2083
                        4.08443 14.1239 0 9.10414 0C4.08439 0 0 4.08439 0 9.10414C0 14.1239 4.08443 18.2083 9.10418
                        18.2083C11.27 18.2083 13.2586 17.4455 14.8235 16.1786L21.3641 22.7192C21.551 22.9061 21.7963
                        23 22.0417 23C22.287 23 22.5324 22.9061 22.7192 22.7192C23.0939 22.3445 23.0939 21.7388 22.7192
                        21.3641ZM9.10418 16.2916C5.1405 16.2916 1.91668 13.0678 1.91668 9.10414C1.91668 5.14046 5.1405
                        1.91664 9.10418 1.91664C13.0679 1.91664 16.2917 5.14046 16.2917 9.10414C16.2917 13.0678 13.0678
                        16.2916 9.10418 16.2916Z" fill="white"/>
                    </svg>
                </button>
            </form>
            <button className="shopping-cart">
                <img src="cart.svg" alt="Cart" />
                {props.items}
            </button>
        </header>
    )
}
