import React from 'react'
import Buttons from '../components/People/Buttons'
import PeopleList from '../components/People/PeopleList'
import { Link } from "react-router-dom";
import './People.css';

function People() {
    return (
        <div className="container-fluid container-min-max-width mt-3 text-center">
            <div className="row" >
                <div className="col-md-2 col-sm-3">
                    <Buttons></Buttons>
                    <button className='add-person mt-3'>
                        <Link style={{ textDecoration: 'none', color:'black' }} to='/'>
                            Introdu o nouă persoană
                        </Link>
                    </button>
                </div>
                <div className="col-md-10 col-sm-9">
                    <PeopleList></PeopleList>
                </div>
            </div>
        </div>
    )
}

export default People;
