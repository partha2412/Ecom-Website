import { useState } from 'react'
import OptionBar from '../Components/layout/OptionBar'
import Slider from '../Components/layout/Slider'

const Home = () => {
    const [showOptions, setShowOptions] = useState(false);
    return (
        <>
            <div className='h-screen pt-10 w-full bg-pink-500'>
                <button className='p-2 border w-10 h-10 fixed bg-amber-300' onClick={() => setShowOptions(!showOptions)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </button>
                {showOptions ? (<OptionBar />) : (null)}
            </div>
        </>
    )
}

export default Home
