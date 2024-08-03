import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../../reducers/newsSlice';
import { Link } from 'react-router-dom';
import BlogHeader from './BlogHeader';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';



const BlogPage = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.news.articles);
    const status = useSelector((state) => state.news.status);
    const error = useSelector((state) => state.news.error);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const contentRef = useRef(null)
    const [query, setQuery] = useState('');
    const [filteredArticles, setFilteredArticles] = useState([]);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchNews());
        }
    }, [status, dispatch]);

    useEffect(() => {
        // console.log('changed status :', status)
        // if (status === 'success') {
        //     console.log('Articles:', articles); // Tambahkan console.log di sini
        // }
        // if (status === 'failed') {
        //     console.log('Fetch error:', error); // Tambahkan console.log di sini
        // }

        if (query) {
            const filtered = articles.filter((article) =>
                article.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredArticles(filtered);
        } else {
            setFilteredArticles(articles);
        }

    }, [status, articles, error, query]);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollIntoView({ block: 'start' })
        }
    }, [currentPage])

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const totalPages = Math.ceil((articles?.length || 0) / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentArticles = filteredArticles?.slice(startIndex, startIndex + itemsPerPage);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

    return (
        <div ref={contentRef}>
            <BlogHeader />
            <section className='flex items-top justify-center gap-8 mt-20 px-28'>
                <div className='flex items-start justify-center w-[70%]'>
                    <div className=''>
                        {status === 'success' && currentArticles && currentArticles.slice(0, 6).map((article, index) => (
                            <div className='mb-14 pb-8 relative' key={index}>
                                <img src={article.thumbnail} alt='blog' className='rounded-lg w-full h-80' />
                                <div className='my-6'>
                                    <h4 className='font-bold uppercase text-2xl'>{article.title}</h4>
                                    <p className='my-3 text-md'>{article.description}</p>
                                </div>
                                <Link to={`/blogpage/detail/${index}`} className='absolute bottom-3 left-0 text-blue-600 underline uppercase font-bold'>Read more</Link>
                            </div>
                        ))}
                        <hr className='text-gray-900 h-2' />
                        <div className='mb-10 text-center'>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`px-4  py-2 mx-1 ${currentPage === index + 1 ? 'text-blue-500 text-xl' : 'text-gray-500 text-xl'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <Sidebar handleSearch={setQuery} />
            </section>
            <Footer />
        </div>
    )
}

export default BlogPage