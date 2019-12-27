import React, { useState } from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { Router, Link } from '@reach/router';
import Details from './Details';
import ThemeContext from './ThemeContext';
import NavBar from './NavBar';

const App = () => {
    const themeHook = useState('peru');

    return (
        <React.StrictMode>
            <ThemeContext.Provider value={themeHook}>
                <div>
                    <NavBar />
                    <Router>
                        <SearchParams path="/" />
                        <Details path="/details/:id"></Details>
                    </Router>
                </div>
            </ThemeContext.Provider>
        </React.StrictMode>
    );
};

render(<App />, document.getElementById("root"));
