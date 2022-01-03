import React from 'react'
import UserAddForm from '../components/Home/UserAddForm'
import GoToPersonsList from '../components/Home/GoToPersonsList'

function Home() {
    return (
        <div className='container-fluid container-min-max-width mt-3 w-25'>
            <UserAddForm />
            <GoToPersonsList />
        </div>
    )
}

export default Home
