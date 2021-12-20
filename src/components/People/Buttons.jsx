import React from 'react'

class Buttons extends React.Component {
    constructor(){
        super();
        this.state={
            
        }
    }

    render() {
        return (
            <div>
                <div>
                    <p>Sortează după:</p>
                    <input type="checkbox" id="nameSort" value="nameSort"/>
                    <label for="nameSort">nume</label>
                    <input type="checkbox" id="salarySort" value="salarySort"/>
                    <label for="salarySort">salariu</label>
                </div>
                <div>
                    <p>Filtrează după salariu:</p>
                    <input type="checkbox" id="1"/>
                    <label for="1">sub 2500</label>
                    <input type="checkbox" id="2"/>
                    <label for="3">2500-4000</label>
                    <input type="checkbox" id="3"/>
                    <label for="3">peste 4000</label>
                </div>
            </div>
        )
    }
}

export default Buttons
