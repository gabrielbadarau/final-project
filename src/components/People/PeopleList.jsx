import React from 'react'
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';

class PeopleList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    sortByName(arrayX){
        arrayX.sort((a,b)=>{
            let nameA=a.name.toUpperCase();
            let nameB=b.name.toUpperCase();
            if(nameA<nameB){
                return -1;
            }
            if(nameA>nameB){
                return 1;
            }
            return 0;
        })
    }

    sortBySalary(arrayX){
        arrayX.sort((a,b)=>parseInt(a.salary)-parseInt(b.salary))
    }

    firstFilter(arrayX){
        return arrayX.filter(person=>person.salary<2500)
    }

    secondFilter(arrayX){
        return arrayX.filter(person=>person.salary>=2500&&person.salary<=4000)
    }

    thirdFilter(arrayX){
        return arrayX.filter(person=>person.salary>4000)
    }

    render() {
        console.log("this props persons is ",this.props.persons)

        let filteredArray=[...this.props.persons];

        //IMPORTANT: i made so that sorters.nameSort and sorters.salaraySort can't be both true!!

        if(this.props.sorters.nameSort===false && this.props.sorters.salarySort===false){
            filteredArray=[...this.props.persons]
        }
        else if (this.props.sorters.nameSort){
            this.sortByName(filteredArray)
        }
        else {
            this.sortBySalary(filteredArray)
        }

        //IMPORTAN: we kept in mind that .sort() modifies the array,that's why in the first case we give the initial unaltered value of the persons array 

        if(this.props.filters.firstFilter){
            filteredArray=[...this.firstFilter(filteredArray)]
        }
        else if(this.props.filters.secondFilter){
            filteredArray=[...this.secondFilter(filteredArray)]
        }
        else if(this.props.filters.thirdFilter){
            filteredArray=[...this.thirdFilter(filteredArray)]
        }
        else{
            filteredArray=[...filteredArray]
        }

        return (
            <div>
                {                  
                   filteredArray.map((person,index)=>{
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
