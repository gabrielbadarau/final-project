import React from 'react'
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';

class PeopleList extends React.Component {
    constructor(props){
        super(props);
        this.state={
        }
    }

    render() {
        
        return (
            <div>
                {  
                    this.props.persons.map((person,index)=>{
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
}

function mapStateToProps(state){
    return {
        persons:state.list.persons,
        sorters:state.sortersList.sorters,
        filters:state.sortersList.filters
    }
}

export default connect(mapStateToProps)(PeopleList);
