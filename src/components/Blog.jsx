import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectContentHeading } from '../reducers/slice'
import { fetchNews } from '../reducers/newsSlice'
import { Link } from 'react-router-dom'

const Blog = () => {
    const contentHeading = useSelector(selectContentHeading)
    const blogContent = contentHeading ? contentHeading.find(item => item.id === 6) : null;

    const dispatch = useDispatch();
    const articles = useSelector((state) => state.news.articles);
    const status = useSelector((state) => state.news.status);
    const error = useSelector((state) => state.news.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchNews());
        }
    }, [status, dispatch]);

    useEffect(() => {
        console.log('changed status :', status)
        if (status === 'success') {
            console.log('Articles:', articles); // Tambahkan console.log di sini
        }
        if (status === 'failed') {
            console.log('Fetch error:', error); // Tambahkan console.log di sini
        }
    }, [status, articles, error]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }
    return (
        <div className='px-12 py-20'>
            {blogContent && (
                <div className=''>
                    <h2 className='uppercase font-bold text-2xl text-center'>{blogContent.title}</h2>
                    <p className='text-center w-1/2 mx-auto my-4'>{blogContent.description}</p>
                </div>
            )}
            <div className='flex items-top justify-center gap-5 mt-10'>
                {status === 'loading' && <p>Loading...</p>}
                {status === 'failed' && <p>Error: {error}</p>}
                {status === 'success' && articles && articles.slice(0, 3).map((article, index) => (
                    <div className='rounded-lg shadow-2xl w-1/4 pb-4 relative' key={index}>
                        <img src={article.thumbnail} alt='blog' className='rounded-t-lg' />
                        <div className='px-3 py-3'>
                            <h4 className='font-bold'>{article.title}</h4>
                            <p className='my-3 text-sm'>{article.description}</p>
                        </div>
                        <Link to={`/blogpage/${index}`} className='absolute bottom-3 left-3 text-blue-600' >Read more...</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog
