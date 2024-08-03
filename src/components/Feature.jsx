import React from 'react'
import { useSelector } from 'react-redux'
import { selectContentHeading } from '../reducers/slice'
import { mobileImage, listfeatures } from '../utils'

const Feature = () => {
    const contentHeading = useSelector(selectContentHeading)
    const featuresContent = contentHeading.find(item => item.id == 2)
    return (
        <div className='bg-primary max-h-fit py-20 text-white px-12'>
            <div className=''>
                <h2 className='uppercase font-bold text-2xl text-center'>{featuresContent.title}</h2>
                <p className='text-center w-1/2 mx-auto my-4'>{featuresContent.description}</p>
            </div>
            <div className='flex items-center justify-between relative mt-16'>
                <div className='w-1/4'>
                    {listfeatures.filter(item => item.id == 1 || item.id == 2).map((item, id) => (
                        <div className={`text-end ${item.id == 1 ? 'mb-64' : 'mb-4'}`} key={id}>
                            <div className='flex justify-end'>
                                <img src={item.image} alt={item.title} width={50} />
                            </div>
                            <h3 className='font-bold uppercase my-5'>{item.title}</h3>
                            <p className='text-sm'>{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className='absolute z-10 right-1/2 transform translate-x-1/2 top-0'>
                    <img src={mobileImage} alt='feature' width={452} />
                </div>
                <div className='w-1/4'>
                    {listfeatures.filter(item => item.id == 3 || item.id == 4).map((item, id) => (
                        <div className={`text-start ${item.id == 3 ? 'mb-64' : 'mb-4'}`} key={id}>
                            <img src={item.image} alt={item.title} width={50} />
                            <h3 className='font-bold uppercase my-5'>{item.title}</h3>
                            <p className='text-sm'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Feature