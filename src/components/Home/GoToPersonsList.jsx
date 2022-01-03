import React from 'react'
import { Link } from "react-router-dom";
import './GoToPersonsList.css';

function GoToPersonsList() {
    return (
        <div className="list-of-persons-button">
            <button className="rounded-pill">
                <Link style={{ textDecoration: 'none', color:'white' }} to="/people">Lista de persoane</Link>
            </button>
        </div>
    )
}

export default GoToPersonsList
