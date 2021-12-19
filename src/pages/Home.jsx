import React from 'react'
import UserAddForm from '../PersonsList.jsx/UserAddForm'
import GoToPersonsList from '../PersonsList.jsx/GoToPersonsList'


class Home extends React.Component {
    render() {
        return (
            <div>
                <UserAddForm />
                <GoToPersonsList />
            </div>
        )
    }
}

export default Home
