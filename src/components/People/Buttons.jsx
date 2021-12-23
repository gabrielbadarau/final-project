import React from 'react'
import { connect } from 'react-redux';
import {changeSorter,changeFilter} from '../../redux/actions/sortersList'

class Buttons extends React.Component {
    constructor(){
        super();
        this.state={
        }
    }

    updateNameSort(event){
        this.props.changeSorter({nameSort:event.target.checked});
    }

    updateSalarySort(event){
        this.props.changeSorter({salarySort:event.target.checked});
    }

    updateFirstFilter(event){
        this.props.changeFilter({firstFilter:event.target.checked});
    }

    updateSecondFilter(event){
        this.props.changeFilter({secondFilter:event.target.checked});
    }

    updateThirdFilter(event){
        this.props.changeFilter({thirdFilter:event.target.checked});;
    }

    render() {
        return (
            <div>
                <div>
                    <p>Sortează după:</p>
                    <input 
                        onChange={(event)=>this.updateNameSort(event)}
                        type="checkbox" 
                        id="nameSort" 
                        value="nameSort"
                    />
                    <label htmlFor="nameSort">nume</label>
                    <input
                        onChange={(event)=>this.updateSalarySort(event)}
                        type="checkbox" 
                        id="salarySort" 
                        value="salarySort"
                    />
                    <label htmlFor="salarySort">salariu</label>
                </div>
                <div>
                    <p>Filtrează după salariu:</p>
                    <input 
                        onChange={(event)=>this.updateFirstFilter(event)}
                        type="checkbox" 
                        id="1"
                    />
                    <label htmlFor="1">sub 2500</label>
                    <input 
                        onChange={(event)=>this.updateSecondFilter(event)}
                        type="checkbox" 
                        id="2"
                    />
                    <label htmlFor="2">2500-4000</label>
                    <input 
                        onChange={(event)=>this.updateThirdFilter(event)}
                        type="checkbox" 
                        id="3"
                    />
                    <label htmlFor="3">peste 4000</label>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeSorter: (theChange)=>dispatch(changeSorter(theChange)),
        changeFilter: (theChange)=>dispatch(changeFilter(theChange))
    }
}

export default connect(null,mapDispatchToProps)(Buttons)
