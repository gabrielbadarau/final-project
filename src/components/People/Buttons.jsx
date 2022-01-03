import React from 'react'
import { connect } from 'react-redux';
import {changeSorter,changeFilter} from '../../redux/actions/sortersList'

class Buttons extends React.Component {
    constructor(){
        super();
        this.state={
            sortCheck1:false,
            sortCheck2:false,
            filterCheck1:false,
            filterCheck2:false,
            filterCheck3:false
        }
    }

    updateNameSort(event){
        this.props.changeSorter({nameSort:event.target.checked,salarySort:false});
        if(event.target.checked){
            this.setState({sortCheck1:true,sortCheck2:false})
        }
        else{
            this.setState({sortCheck1:false})
        }
    }

    updateSalarySort(event){
        this.props.changeSorter({salarySort:event.target.checked,nameSort:false});
        if(event.target.checked){
            this.setState({sortCheck1:false,sortCheck2:true})
        }
        else{
            this.setState({sortCheck2:false})
        }
    }

    updateFirstFilter(event){
        this.props.changeFilter({firstFilter:event.target.checked,secondFilter:false,thirdFilter:false});
        if(event.target.checked){
            this.setState({filterCheck1:true,filterCheck2:false,filterCheck3:false})
        }
        else{
            this.setState({filterCheck1:false})
        }
    }

    updateSecondFilter(event){
        this.props.changeFilter({secondFilter:event.target.checked,firstFilter:false,thirdFilter:false});
        if(event.target.checked){
            this.setState({filterCheck1:false,filterCheck2:true,filterCheck3:false})
        }
        else{
            this.setState({filterCheck2:false})
        }
    }

    updateThirdFilter(event){
        this.props.changeFilter({thirdFilter:event.target.checked,firstFilter:false,secondFilter:false});;
        if(event.target.checked){
            this.setState({filterCheck1:false,filterCheck2:false,filterCheck3:true})
        }
        else{
            this.setState({filterCheck3:false})
        }
    }

    componentWillUnmount(){
        this.props.changeSorter({nameSort:false,salarySort:false})
        this.props.changeFilter({firstFilter:false,secondFilter:false,thirdFilter:false})
    }

    render() {
        return (
            <div>
                <div className='d-flex flex-column'>
                    <p>Sortează după:</p>
                    <div>
                        <input 
                            onChange={(event)=>this.updateNameSort(event)}
                            type="checkbox" 
                            id="nameSort" 
                            checked={this.state.sortCheck1}
                        />
                        <label htmlFor="nameSort">nume</label>
                    </div>
                    <div>
                        <input
                            onChange={(event)=>this.updateSalarySort(event)}
                            type="checkbox" 
                            id="salarySort" 
                            checked={this.state.sortCheck2}
                        />
                        <label htmlFor="salarySort">salariu</label>
                    </div>
                </div>
                <div className='mt-2 d-flex flex-column'>
                    <p>Filtrează după salariu:</p>
                    <div>
                        <input 
                            onChange={(event)=>this.updateFirstFilter(event)}
                            type="checkbox" 
                            id="1"
                            checked={this.state.filterCheck1}
                        />
                        <label htmlFor="1">sub 2500</label>
                    </div>
                    <div>
                        <input 
                            onChange={(event)=>this.updateSecondFilter(event)}
                            type="checkbox" 
                            id="2"
                            checked={this.state.filterCheck2}
                        />
                        <label htmlFor="2">2500-4000</label>
                    </div>
                    <div>
                        <input 
                            onChange={(event)=>this.updateThirdFilter(event)}
                            type="checkbox" 
                            id="3"
                            checked={this.state.filterCheck3}
                        />
                        <label htmlFor="3">peste 4000</label>
                    </div>
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
