import React from 'react'
import { logo } from '../utils'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul className='flex justify-between items-center pt-5 pb-2  text-white'>
                <li className='flex items-center gap-4'>
                    <span className='flex items-center gap-2'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_229)">
                                <path d="M2.25 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25ZM9.045 8.76225L4.236 4.6785L3.26475 5.8215L9.05475 10.7378L14.7405 5.81775L13.7595 4.683L9.04575 8.76225H9.045Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_229">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        info@youremail.com
                    </span>
                    <span className='flex items-center gap-2'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_233)">
                                <path d="M15.75 12.315V14.967C15.7501 15.1569 15.6781 15.3397 15.5487 15.4786C15.4192 15.6176 15.2419 15.7022 15.0525 15.7155C14.7247 15.738 14.457 15.75 14.25 15.75C7.62225 15.75 2.25 10.3778 2.25 3.75C2.25 3.543 2.26125 3.27525 2.2845 2.9475C2.29779 2.75808 2.38244 2.58076 2.52135 2.45131C2.66027 2.32186 2.84312 2.24991 3.033 2.25H5.685C5.77803 2.24991 5.86777 2.28439 5.9368 2.34677C6.00582 2.40914 6.0492 2.49494 6.0585 2.5875C6.07575 2.76 6.0915 2.89725 6.1065 3.0015C6.25555 4.04169 6.561 5.05337 7.0125 6.00225C7.08375 6.15225 7.03725 6.3315 6.90225 6.4275L5.28375 7.584C6.27334 9.88984 8.11091 11.7274 10.4167 12.717L11.5717 11.1015C11.619 11.0355 11.6878 10.9882 11.7664 10.9677C11.8449 10.9473 11.9281 10.9551 12.0015 10.9897C12.9503 11.4404 13.9617 11.7451 15.0015 11.8935C15.1058 11.9085 15.243 11.925 15.414 11.9415C15.5064 11.951 15.592 11.9944 15.6543 12.0634C15.7165 12.1324 15.7509 12.2221 15.7507 12.315H15.75Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_233">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        (480)555-0103
                    </span>
                </li>
                <li className='flex items-center gap-4'>
                    <a href='#'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_239)">
                                <path d="M9 1.5C11.0378 1.5 11.292 1.5075 12.0915 1.545C12.8903 1.5825 13.434 1.70775 13.9125 1.89375C14.4075 2.08425 14.8245 2.34225 15.2415 2.7585C15.6229 3.13342 15.918 3.58694 16.1063 4.0875C16.2915 4.56525 16.4175 5.10975 16.455 5.9085C16.4903 6.708 16.5 6.96225 16.5 9C16.5 11.0378 16.4925 11.292 16.455 12.0915C16.4175 12.8903 16.2915 13.434 16.1063 13.9125C15.9185 14.4133 15.6233 14.867 15.2415 15.2415C14.8665 15.6227 14.413 15.9178 13.9125 16.1063C13.4347 16.2915 12.8903 16.4175 12.0915 16.455C11.292 16.4903 11.0378 16.5 9 16.5C6.96225 16.5 6.708 16.4925 5.9085 16.455C5.10975 16.4175 4.566 16.2915 4.0875 16.1063C3.58674 15.9184 3.13315 15.6232 2.7585 15.2415C2.37705 14.8666 2.08195 14.4131 1.89375 13.9125C1.70775 13.4347 1.5825 12.8903 1.545 12.0915C1.50975 11.292 1.5 11.0378 1.5 9C1.5 6.96225 1.5075 6.708 1.545 5.9085C1.5825 5.109 1.70775 4.566 1.89375 4.0875C2.08143 3.58663 2.3766 3.13299 2.7585 2.7585C3.13325 2.37692 3.58682 2.0818 4.0875 1.89375C4.566 1.70775 5.109 1.5825 5.9085 1.545C6.708 1.50975 6.96225 1.5 9 1.5ZM9 5.25C8.00544 5.25 7.05161 5.64509 6.34835 6.34835C5.64509 7.05161 5.25 8.00544 5.25 9C5.25 9.99456 5.64509 10.9484 6.34835 11.6517C7.05161 12.3549 8.00544 12.75 9 12.75C9.99456 12.75 10.9484 12.3549 11.6517 11.6517C12.3549 10.9484 12.75 9.99456 12.75 9C12.75 8.00544 12.3549 7.05161 11.6517 6.34835C10.9484 5.64509 9.99456 5.25 9 5.25ZM13.875 5.0625C13.875 4.81386 13.7762 4.5754 13.6004 4.39959C13.4246 4.22377 13.1861 4.125 12.9375 4.125C12.6889 4.125 12.4504 4.22377 12.2746 4.39959C12.0988 4.5754 12 4.81386 12 5.0625C12 5.31114 12.0988 5.5496 12.2746 5.72541C12.4504 5.90123 12.6889 6 12.9375 6C13.1861 6 13.4246 5.90123 13.6004 5.72541C13.7762 5.5496 13.875 5.31114 13.875 5.0625ZM9 6.75C9.59674 6.75 10.169 6.98705 10.591 7.40901C11.0129 7.83097 11.25 8.40326 11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25C8.40326 11.25 7.83097 11.0129 7.40901 10.591C6.98705 10.169 6.75 9.59674 6.75 9C6.75 8.40326 6.98705 7.83097 7.40901 7.40901C7.83097 6.98705 8.40326 6.75 9 6.75Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_239">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href='#'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_237)">
                                <path d="M10.5 10.125H12.375L13.125 7.125H10.5V5.625C10.5 4.8525 10.5 4.125 12 4.125H13.125V1.605C12.8805 1.57275 11.9572 1.5 10.9822 1.5C8.946 1.5 7.5 2.74275 7.5 5.025V7.125H5.25V10.125H7.5V16.5H10.5V10.125Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_237">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href='#'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_241)">
                                <path d="M16.6215 4.24219C16.0489 4.49546 15.4417 4.66179 14.82 4.73569C15.4753 4.34376 15.9658 3.72695 16.2 3.00019C15.585 3.36619 14.9107 3.62269 14.208 3.76144C13.7359 3.25637 13.1102 2.92141 12.4282 2.80863C11.7461 2.69584 11.0459 2.81156 10.4364 3.13778C9.82692 3.464 9.34227 3.98245 9.05782 4.61253C8.77336 5.24262 8.70504 5.94902 8.86348 6.62194C7.61631 6.55943 6.39623 6.23533 5.28244 5.67069C4.16866 5.10604 3.18607 4.31347 2.39848 3.34444C2.1197 3.82328 1.97319 4.36761 1.97398 4.92169C1.97398 6.00919 2.52748 6.96994 3.36898 7.53244C2.87099 7.51676 2.38395 7.38227 1.94848 7.14019V7.17919C1.94863 7.90346 2.19926 8.6054 2.65786 9.16598C3.11647 9.72657 3.75484 10.1113 4.46473 10.2549C4.00244 10.3802 3.51771 10.3987 3.04723 10.3089C3.24738 10.9324 3.63748 11.4776 4.16292 11.8683C4.68836 12.259 5.32282 12.4755 5.97748 12.4877C5.32684 12.9987 4.58186 13.3764 3.78514 13.5993C2.98842 13.8222 2.15557 13.8859 1.33423 13.7867C2.768 14.7088 4.43705 15.1983 6.14173 15.1967C11.9115 15.1967 15.0667 10.4169 15.0667 6.27169C15.0667 6.13669 15.063 6.00019 15.057 5.86669C15.6711 5.42281 16.2012 4.87295 16.6222 4.24294L16.6215 4.24219Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_241">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href='#'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_243)">
                                <path d="M16.1572 4.8735C16.5 6.21 16.5 9 16.5 9C16.5 9 16.5 11.79 16.1572 13.1265C15.9667 13.8653 15.4095 14.4465 14.7037 14.643C13.422 15 9 15 9 15C9 15 4.58025 15 3.29625 14.643C2.5875 14.4435 2.031 13.863 1.84275 13.1265C1.5 11.79 1.5 9 1.5 9C1.5 9 1.5 6.21 1.84275 4.8735C2.03325 4.13475 2.5905 3.5535 3.29625 3.357C4.58025 3 9 3 9 3C9 3 13.422 3 14.7037 3.357C15.4125 3.5565 15.969 4.137 16.1572 4.8735ZM7.5 11.625L12 9L7.5 6.375V11.625Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_243">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </li>
            </ul>
            <div className='bg-white flex justify-between items-center px-10 py-2 rounded'>
                <ul className='uppercase flex gap-10'>
                    <Link to={`/`} className='hover:text-primary text-black hover:underline cursor-pointer'>Home</Link>
                    <li className='hover:text-primary text-black cursor-pointer hover:underline'>About</li>
                    <li className='hover:text-primary text-black cursor-pointer hover:underline'>Features</li>
                </ul>
                <div className='absolute z-10 left-1/2 transform -translate-x-1/2 cursor-pointer'>
                    <img src={logo} alt="logo" width="180" className='bg-white p-2 rounded' />
                </div>
                <ul className='uppercase flex gap-10 items-center'>
                    <li className='hover:text-primary text-black cursor-pointer hover:underline'>ScreenShot</li>
                    <Link to={`blogpage/:id`} className='hover:text-primary text-black cursor-pointer hover:underline'>Blog</Link>
                    <li className='cursor-pointer bg-primary transition-all text-white rounded px-3 py-2 '>Download</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar