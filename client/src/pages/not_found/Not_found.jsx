import React from 'react';
import { Link } from 'react-router-dom';

function Not_found() {
    return (
        <div>
            <h1>Sorry this page is not found</h1>
            <h2>Error: 404</h2>
            <Link to="/">To main page</Link>
        </div>
    )
}

export default Not_found
