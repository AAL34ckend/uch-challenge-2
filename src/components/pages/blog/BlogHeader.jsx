import React from 'react'
import { home } from '../../../utils'
import Navbar from '../../Navbar'

const BlogHeader = ({ articleTitle }) => {
    return (
        <header className='bg-blog h-96 m-0 p-0 relative px-12'>
            <Navbar />
            <div className='absolute left-1/2 -translate-x-1/2 bottom-1/4 text-white'>
                <h2 className='text-center uppercase text-3xl font-bold mb-6'>{articleTitle}</h2>
                <div className='flex items-center justify-center gap-1 text-sm'>
                    <img src={home} />
                    <p>Home /Blog /Detail</p>
                </div>
            </div>
        </header>
    )
}

export default BlogHeader