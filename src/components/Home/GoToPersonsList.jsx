import React from 'react'
import { Link } from "react-router-dom";

function GoToPersonsList() {
    return (
        <div>
            <button>
                <Link to="people">List de persoane</Link>
            </button>
        </div>
    )
}

export default GoToPersonsList
