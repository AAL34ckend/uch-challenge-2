import React from 'react'
import { useSelector } from 'react-redux'
import { selectContentHeading } from '../reducers/slice'
import { playstore, phone } from '../utils'
// import "../App.css"

const Download = () => {
    const contentHeading = useSelector(selectContentHeading)
    const downloadContent = contentHeading.find(item => item.id == 4)
    return (
        <div className='px-12 pt-20 pb-28'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='uppercase font-bold text-2xl'>{downloadContent.title}</h2>
                    <p className=''>{downloadContent.description}</p>
                    <div className='my-10'>
                        <img src={playstore} alt={playstore} />
                    </div>
                    <div className='flex items-center justify-start gap-5'>
                        <div className='bg-primary rounded-sm text-white py-3'>
                            <div className='px-5'>
                                <div className="flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_346)">
                                            <path d="M5.83342 27.7083H29.1668V17.5H32.0834V29.1667C32.0834 29.5534 31.9298 29.9244 31.6563 30.1979C31.3828 30.4714 31.0119 30.625 30.6251 30.625H4.37508C3.98831 30.625 3.61737 30.4714 3.34388 30.1979C3.07039 29.9244 2.91675 29.5534 2.91675 29.1667V17.5H5.83342V27.7083ZM20.4167 13.125H27.7084L17.5001 23.3333L7.29175 13.125H14.5834V4.375H20.4167V13.125Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_346">
                                                <rect width="35" height="35" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className='text-center py-1'>1000</p>
                                <p className='uppercase text-sm'>Download</p>
                            </div>
                        </div>
                        <div className='bg-primary rounded text-white py-3 px-3'>
                            <div className='px-10'>
                                <div className="flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2064_744)">
                                            <path d="M2.91659 13.125H7.29159V30.625H2.91659C2.52981 30.625 2.15888 30.4714 1.88539 30.1979C1.6119 29.9244 1.45825 29.5535 1.45825 29.1667V14.5834C1.45825 14.1966 1.6119 13.8257 1.88539 13.5522C2.15888 13.2787 2.52981 13.125 2.91659 13.125ZM10.6355 11.2394L19.9689 1.90608C20.0929 1.78168 20.2577 1.70624 20.4329 1.69365C20.6082 1.68106 20.7821 1.73215 20.9226 1.83754L22.1666 2.77087C22.5121 3.03023 22.773 3.38608 22.9165 3.79354C23.0601 4.201 23.0797 4.64184 22.973 5.06046L21.2916 11.6667H30.6249C31.3985 11.6667 32.1403 11.974 32.6873 12.521C33.2343 13.068 33.5416 13.8098 33.5416 14.5834V17.6517C33.542 18.0329 33.4677 18.4104 33.3228 18.763L28.8093 29.7223C28.6992 29.9895 28.5122 30.218 28.272 30.3787C28.0318 30.5394 27.7493 30.6252 27.4603 30.625H11.6666C11.2798 30.625 10.9089 30.4714 10.6354 30.1979C10.3619 29.9244 10.2083 29.5535 10.2083 29.1667V12.2705C10.2083 11.8837 10.362 11.5128 10.6355 11.2394Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2064_744">
                                                <rect width="35" height="35" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className='text-center py-1'>1000</p>
                                <p className='uppercase text-sm text-center'>like</p>
                            </div>
                        </div>
                        <div className='bg-primary rounded text-white py-3'>
                            <div className='px-5'>
                                <div className="flex items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2064_745)">
                                            <path d="M17.4999 26.6291L7.21429 32.3866L9.51117 20.825L0.855957 12.8216L12.562 11.4333L17.4999 0.729126L22.4378 11.4333L34.1439 12.8216L25.4887 20.825L27.7855 32.3866L17.4999 26.6291Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2064_745">
                                                <rect width="35" height="35" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className='text-center py-1'>1000</p>
                                <p className='uppercase text-sm'>5 star rating</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="image-container ">
                        <img src={phone} alt="gambar 1" className="first-image" />
                        <img src={phone} alt="gambar 2" className="second-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download