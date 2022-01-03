import React from 'react'

function PeopleItem(props) {
    let {name,surname,job,salary,dateOfEmployment}=props;
    return (
        <div className='m-2 p-1 border border-dark rounded'>
            <h1>{name} {surname}</h1>
            <p>Job: {job}</p>
            <p>Salary: {salary}</p>
            <p>Date Of Employment: {dateOfEmployment}</p>
        </div>
    )
}

export default PeopleItem
