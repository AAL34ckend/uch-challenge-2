import React from 'react'
import HeroContent from './HeroContent'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div>
            <header className='bg-hero m-0 p-0 relative px-12'>
                <Navbar />
                <HeroContent />
            </header>
        </div>
    )
}

export default Hero