import React from 'react'
import { lists, aboutContentImage, dot } from '../utils'
import { useSelector } from 'react-redux'
import { selectContentHeading } from '../reducers/slice'

const About = () => {
    const contentHeading = useSelector(selectContentHeading)
    const aboutContent = contentHeading.find(item => item.id == 1)
    return (
        <div className='py-20 mx-12'>
            <div className=''>
                <h2 className='uppercase font-bold text-2xl text-center'>{aboutContent.title}</h2>
                <p className='text-center w-1/2 mx-auto my-4'>{aboutContent.description}</p>
            </div>
            <div className='flex items-center justify-between py-10'>
                <img src={aboutContentImage} alt="about content" width="425" />
                <ul className='flex flex-col gap-5 w-1/2'>
                    {lists.map((item, id) => (
                        <li key={id} className='flex items-start'>
                            <img src={dot} alt='tick' />&nbsp;
                            <div>
                                <h3 className='uppercase font-bold'>{item.title}</h3>
                                <p className='mt-2'>{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default About