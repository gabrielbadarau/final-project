import React from 'react'
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';

function PeopleList(props) {
    return (
        <div>
            {   
                props.persons.map((person,index)=>{
                    return <PeopleItem 
                            name={person.name}
                            surname={person.surname}
                            job={person.job}
                            salary={person.salary}
                            dateOfEmployment={person.dateOfEmployment}
                            key={index}
                        />
                })
            }
        </div>
    )
}

function mapStateToProps(state){
    return {
        persons:state.persons
    }
}

export default connect(mapStateToProps)(PeopleList);
