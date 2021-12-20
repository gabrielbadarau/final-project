import React from 'react'
import UserAddForm from '../components/Home/UserAddForm'
// import GoToPersonsList from '../components/Home/GoToPersonsList'


class Home extends React.Component {
    render() {
        return (
            <div>
                <UserAddForm />
                {/* <GoToPersonsList /> */}
            </div>
        )
    }
}

export default Home
