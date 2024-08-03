import React from 'react'
import { contentHeader1, contentHeader2 } from '../utils'

const HeroContent = () => {

    return (
        <div className='flex items-center justify-between mx-10 py-20'>
            <img src={contentHeader1} alt="content" width={620} />
            <img src={contentHeader2} alt="content" width={355} />
        </div>
    )
}

export default HeroContent