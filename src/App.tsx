import React, { useState, lazy, Suspense } from 'react';
import { Router, Link } from '@reach/router';
import ThemeContext from './ThemeContext';
import SearchParams from './SearchParams';
import Details from './Details';
import ReactDOM from 'react-dom';


const App = () => {
    const themeHook = useState('peru');

    return (
        <React.StrictMode>
            <ThemeContext.Provider value={themeHook}>
                <div>
                    <header>
                        <Link to="/">Adopt Me!</Link>
                    </header>
                    <Router>
                        <SearchParams path="/" />
                        <Details path="/details/:id" />
                    </Router>
                </div>
            </ThemeContext.Provider>
        </React.StrictMode>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));