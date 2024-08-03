import React from 'react'
import { chat, expandComment, love, profile1, profile2, profile3 } from '../utils'

const Comments = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <span className='uppercase font-semibold'>3 Comments</span>
                <span className='uppercase font-semibold'>Disquise</span>
                <span className='uppercase font-semibold flex items-center gap-2'><img src={chat} alt='chat icon' /><span className='uppercase'>Gwen</span></span>
            </div>
            <hr className='my-4 w-full' />
            <div className='flex items-center justify-between'>
                <div className='uppercase gap-2 flex items-center'>
                    <img src={love} alt='chat icon' />
                    <span className='uppercase text-gray-500'>Recommend</span>
                </div>
                <div className='uppercase gap-2 flex items-center'>
                    <p className='uppercase text-gray-500s'>sort by best</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_1547)">
                            <path d="M12 16L6 10H18L12 16Z" fill="#6C6C72" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_1547">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className='flex items-start gap-5 mt-10 pb-20'>
                <img src={profile1} alt='profile commentary' width={65} />
                <div>
                    <h4 className='text-xl text-primary uppercase font-semibold'>Ruben Vetros</h4>
                    <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper accumsan malesuada sed feugiat. Rhoncus vel ultrices metus ut sed. Sit nunc, in nibh nisi, viverra quis sociis malesuada.</p>
                    <img src={expandComment} alt='expand icon' />
                    <div className='flex items-start gap-5 mt-10'>
                        <img src={profile2} alt='profile commentary' width={55} />
                        <div>
                            <h4 className='text-xl text-primary uppercase font-semibold'>Wilson Schleifer</h4>
                            <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper accumsan malesuada sed feugiat. Rhoncus vel ultrices metus ut sed. Sit nunc, in nibh nisi, viverra quis sociis malesuada.</p>
                            <img src={expandComment} alt='expand icon' />
                        </div>
                    </div>
                    <div className='flex items-start gap-5 mt-10'>
                        <img src={profile3} alt='profile commentary' width={55} />
                        <div>
                            <h4 className='text-xl text-primary uppercase font-semibold'>Desirae Geidt</h4>
                            <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper accumsan malesuada sed feugiat. Rhoncus vel ultrices metus ut sed. Sit nunc, in nibh nisi, viverra quis sociis malesuada.</p>
                            <img src={expandComment} alt='expand icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments