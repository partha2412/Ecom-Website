import NavBar from './Components/NavBar'
import OptionBar from './Components/OptionBar'
import Main from './Components/Main'
import { useEffect } from 'react'
import ProductDetails from '../ProductDetails'

const Home = ( {authUser} ) => {

    return (
        <div className='w-screen h-screen'>
            <div>
                <NavBar></NavBar>
            </div>
            <div>
                <OptionBar></OptionBar>
            </div>
            <div>
                <Main></Main>
                {/* <ProductDetails></ProductDetails> */}
            </div>
    
        </div>
    )
}



export default Home
