import React from 'react'
import { FaKiwiBird } from "react-icons/fa";

// CSS
import "./Spinner.css";

function Spinner() {
    return (
        <div>
            <div className="spinner_container">
                <FaKiwiBird className="spinner_icon" />
            </div>

        </div>
    )
}

export default Spinner
