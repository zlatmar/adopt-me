import React, { useState, lazy, Suspense } from 'react';
import { Router, Link } from '@reach/router';
import ThemeContext from './ThemeContext';
import SearchParams from './SearchParams';
import Details from './Details';


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
                        <Details path="/details/:id"></Details>
                    </Router>
                </div>
            </ThemeContext.Provider>
        </React.StrictMode>
    );
};

export default App;
