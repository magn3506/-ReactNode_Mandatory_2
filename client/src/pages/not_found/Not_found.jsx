import React from 'react';
import { Link } from 'react-router-dom';
import "./Not_found.css";

function Not_found() {


    const baseClass = "not_found";
    return (
        <div className={`${baseClass}_content_wrapper`}>
            <h1 className={`${baseClass}_title`}>Sorry this page is not found :(</h1>
            <Link className={`${baseClass}_link`} to="/">Go to main page</Link>
        </div>
    )
}

export default Not_found;
