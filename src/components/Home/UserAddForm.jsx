import React from 'react'

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

    componentDidMount(){
        const today=new Date();
        const year=today.getFullYear().toString();
        const month=today.getMonth()>9 ? (today.getMonth()+1).toString() : "0".concat((today.getMonth()+1).toString());
        const day=today.getDate().toString();
        this.setState({todayDate:year.concat("-",month,"-",day)})
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

    render() {
        console.log(this.state)
        return (
            <form>
                <label htmlFor="name">Nume:</label>
                <input
                    type="text"
                    id="name"
                    onChange={(event) => this.updateName(event)}
                    required
                    pattern="[a-zA-Z'-'\s]*"
                />
                <label htmlFor="surname">Prenume:</label>
                <input
                    type="email"
                    id="surname"
                    onChange={(event) => this.updateSurname(event)}
                    required
                    pattern="[a-zA-Z'-'\s]*"
                />
                <label htmlFor="job">Meserie:</label>
                <input
                    type="text"
                    id="job"
                    onChange={(event) => this.updateJob(event)}
                    required
                    pattern="[a-zA-Z'-'\s]*"
                />
                <label htmlFor="salary">Salariu:</label>
                <input
                    type="number"
                    id="salary"
                    onChange={(event) => this.updateSalary(event)}
                    min="1"
                    required
                />
                <label htmlFor="dateOfEmployment">Data angajării:</label>
                <input
                    type="date"
                    id="dateOfEmployment"
                    onChange={(event) => this.updateDateOfEmployment(event)}
                    required
                    defaultValue={this.state.todayDate}
                />
                <input type="submit" value="Adaugă persoană" />
            </form>
        )
    }
}

export default UserAddForm
