import React, { useEffect } from 'react';
import { search } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../reducers/newsSlice';
import "../App.css";

const Sidebar = ({ handleSearch }) => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.news.articles);
    const status = useSelector((state) => state.news.status);
    const error = useSelector((state) => state.news.error);

    const listCategory = [
        "e-commerce app",
        "banking app",
        "business app",
        "video app",
        "e-commerce app",
    ]
    const listTag = [
        "ecommerce app", "music app", "bank app", 'social app'
    ]

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchNews());
        }
    }, [status, dispatch]);

    // useEffect(() => {
    //     console.log('changed status :', status);
    //     if (status === 'success') {
    //         console.log('Articles:', articles); // Tambahkan console.log di sini
    //     }
    //     if (status === 'failed') {
    //         console.log('Fetch error:', error); // Tambahkan console.log di sini
    //     }
    // }, [status, articles, error]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="w-[30%]">
            <div className='flex '>
                <img src={search} alt='search icon' />
                <input
                    placeholder='Search for'
                    type='text'
                    className='inputSearch'
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                />
            </div>
            <hr className='my-5 text-black' />
            <div>
                <h4 className='uppercase font-bold text-xl mb-5'>Recent Post</h4>
                {status === 'success' && articles &&
                    articles.slice(0, 5).map((item, index) => (
                        <div key={index} className='mb-5'>
                            <img src={item.thumbnail} alt='thumbnail sidebar' className='rounded-lg mb-3' />
                            <p className='uppercase font-bold'>{item.title}</p>
                        </div>
                    ))}
            </div>
            <hr className='my-5 text-black' />
            <h4 className='uppercase font-bold text-xl my-5'>Category</h4>
            {listCategory.map((item, index) => (
                <div key={index} className='flex items-center gap-3 mb-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_1342)">
                            <path d="M16 12L10 18V6L16 12Z" fill="#232233" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_1342">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span className='uppercase text-gray-700'>{item}</span>
                </div>
            ))}
            <hr className='my-5 text-black' />
            <h4 className='uppercase font-bold text-xl my-5'>Tags</h4>
            {listTag.map((item, index) => (
                <span key={index} className='underline mr-2 uppercase font-semibold'>{item}</span>
            ))}
        </div>
    );
};

export default Sidebar;
