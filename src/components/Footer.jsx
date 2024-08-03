import React from 'react'
import { email, call, facebook, instagram, twitter, youtube, sendButton } from "../utils"


const Footer = () => {
    return (
        <div className='relative pt-20'>
            <div className='w-9/12 rounded-xl px-28 py-8 absolute top-3 left-1/2 -translate-x-1/2 z-10 bg-white shadow-3xl'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img src={email} alt="email" className='bg-primary rounded-full p-3' width={45} />
                        <p>infro@youremail.com</p>
                    </div>
                    <div className='border border-black py-8'></div>
                    <div className='flex items-center gap-3'>
                        <img src={call} alt="number" className='bg-primary rounded-full p-3' width={45} />
                        <p>+880 321 655 9985</p>
                    </div>
                </div>
            </div>
            <div className='bg-secondary h-auto px-20'>
                <div className='flex items-center justify-center pt-28'>
                    <div className='w-full flex items-top gap-10 justify-between text-white'>
                        <div className=''>
                            <p className='text-2xl uppercase font-bold'>LOGO</p>
                            <p className='py-8 leading-8'>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit. Viverra nunc ante velit vitae.<br /> Est tellus vitae, nullam lobortis enim.</p>
                            <div className='flex items-center gap-5'>
                                <img src={facebook} alt='facebook' /><span>|</span>
                                <img src={instagram} alt='instagram' /><span>|</span>
                                <img src={twitter} alt='twitter' /><span>|</span>
                                <img src={youtube} alt='youtube' /><span>|</span>
                            </div>
                        </div>
                        <div>
                            <h3 className='uppercase font-bold text-2xl'>Quick Link</h3>
                            <ul className='py-8'>
                                <li>About</li>
                                <li>Features</li>
                                <li>Screenshot</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='uppercase font-bold text-2xl'>NEWS LETTER</h3>
                            <p className='py-8'>Subscribe our newsletter to get our latest
                                <br />update & news</p>
                            <div className='relative'>
                                <input type='email' placeholder='Your email address' className='' />
                                <img src={sendButton} alt="send" className='absolute right-0 top-0' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bordr border-b-2 pt-10'></div>
                <p className='text-center text-white pb-5 mt-5'>&copy; &nbsp; Copyright 2021 .Ojjomedia. All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer