import React from 'react'
import { connect } from 'react-redux';
import {addPerson} from '../../redux/actions/list';

class UserAddForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            todayDate:"",
            name:"",
            surname:"",
            job:"",
            salary: "",
            dateOfEmployment: ""
        }
    }

    getTodayDate(){
        const today=new Date();
        const year=today.getFullYear().toString();
        const month=today.getMonth()>9 ? (today.getMonth()+1).toString() : "0".concat((today.getMonth()+1).toString());
        const day=today.getDate().toString();
        return year.concat("-",month,"-",day);
    }

    componentDidMount(){
        this.setState({todayDate:this.getTodayDate(),dateOfEmployment:this.getTodayDate()})
    }

    updateName(event){
        this.setState({name:event.target.value})
    }

    updateSurname(event){
        this.setState({surname:event.target.value})
    }

    updateJob(event){
        this.setState({job:event.target.value})
    }

    updateSalary(event){
        this.setState({salary:event.target.value})
    }

    updateDateOfEmployment(event){
        this.setState({dateOfEmployment:event.target.value})
    }

    submitAddPerson(event){
        event.preventDefault();
        this.props.addPerson({
            name: this.state.name,
            surname:this.state.surname,
            job:this.state.job,
            salary:this.state.salary,
            dateOfEmployment:this.state.dateOfEmployment
        })
        this.setState({ 
            name:"",
            surname:"",
            job:"",
            salary: "",
            dateOfEmployment:this.state.todayDate
        })
    }

    render() {
        return (
            <form onSubmit={(event)=>this.submitAddPerson(event)}>
                <label htmlFor="name">Nume:</label>
                <input
                    type="text"
                    id="name"
                    onChange={(event) => this.updateName(event)}
                    required
                    pattern="[a-zA-Z'-'\s]*"
                    value={this.state.name}
                />
                <label htmlFor="surname">Prenume:</label>
                <input
                    type="text"
                    id="surname"
                    onChange={(event) => this.updateSurname(event)}
                    required
                    pattern="[a-zA-Z'-'\s]*"
                    value={this.state.surname}
                />
                <label htmlFor="job">Meserie:</label>
                <input
                    type="text"
                    id="job"
                    onChange={(event) => this.updateJob(event)}
                    required
                    pattern="[a-zA-Z'-'\s]*"
                    value={this.state.job}
                />
                <label htmlFor="salary">Salariu:</label>
                <input
                    type="number"
                    id="salary"
                    onChange={(event) => this.updateSalary(event)}
                    min="1"
                    required
                    value={this.state.salary}
                />
                <label htmlFor="dateOfEmployment">Data angajării:</label>
                <input
                    type="date"
                    id="dateOfEmployment"
                    onChange={(event) => this.updateDateOfEmployment(event)}
                    required
                    value={this.state.dateOfEmployment}
                />
                <input type="submit" value="Adaugă persoană" />
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        addPerson:(person)=>dispatch(addPerson(person))
    }
}

export default connect(null,mapDispatchToProps)(UserAddForm)
