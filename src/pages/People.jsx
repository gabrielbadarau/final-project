import React from 'react'
import Buttons from '../components/People/Buttons'
import PeopleList from '../components/People/PeopleList'
import { Link } from "react-router-dom";

function People() {
    return (
        <div>
            <Buttons></Buttons>
            <PeopleList></PeopleList>
            <button>
                <Link to='/'>
                    Introdu o nouă persoană
                </Link>
            </button>
        </div>
    )
}

export default People;
