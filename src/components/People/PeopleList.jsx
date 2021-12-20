import React from 'react'
import { connect } from 'react-redux';

function PeopleList(props) {
    console.log(props.persons)
    return (
        <div>

        </div>
    )
}

function mapStateToProps(state){
    return {
        persons:state.persons
    }
}

export default connect(mapStateToProps)(PeopleList);
