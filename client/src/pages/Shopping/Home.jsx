import React from 'react'
import NavBar from './Components/NavBar'
import OptionBar from './Components/OptionBar'
import Main from './Components/Main'

const Home = ({setAuthuser}) => {
    return (
        <div className='w-screen h-screen'>
            <div>
                <NavBar setAuthuser={setAuthuser}></NavBar>
            </div>
            <div>
                <OptionBar></OptionBar>
                <Main></Main>
            </div>
        </div>
    )
}

export default Home
