import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchNews } from '../../../reducers/newsSlice';
import BlogHeader from './BlogHeader';
import Sidebar from '../../Sidebar';
import { timer, profile, comment, videoSample, buttonVid, image1, image2, charlieHerwitz } from "../../../utils";
import Comments from '../../Comments';
import Footer from '../../Footer';

const BlogDetails = () => {
    const { id } = useParams(); // Mengambil indeks dari URL
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.news.articles);
    const status = useSelector((state) => state.news.status);
    const error = useSelector((state) => state.news.error);
    const [isPlaying, setIsPlaying] = useState(false);
    const contentRef = useRef(null)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchNews());
        }
    }, [status, dispatch]);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollIntoView({ block: 'start' })
        }
        // console.log('changed status :', status);
        // console.log('Articles:', articles);
        // console.log('Index from URL:', id); // Debugging
    }, []);

    const articleIndex = parseInt(id, 10); // Ubah id menjadi integer
    const article = articles[articleIndex];


    const videoRef = useRef(null);
    const playButtonRef = useRef(null);

    const handlePlayButtonClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
        if (playButtonRef.current) {
            playButtonRef.current.style.display = "none";
        }
        setIsPlaying(true);
    };

    const handleVideoPause = () => {
        if (playButtonRef.current) {
            playButtonRef.current.style.display = "block";
        }
        setIsPlaying(false);
    };

    const handleVideoPlay = () => {
        if (playButtonRef.current) {
            playButtonRef.current.style.display = "none";
        }
        setIsPlaying(true);
    };

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };


    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

    return (
        <div ref={contentRef}>
            <BlogHeader articleTitle={article.title} />
            <section className='flex items-start justify-center gap-8 mt-20 px-28'>
                <div className='flex items-center justify-center w-[70%]'>
                    <div className=''>
                        <div className='mb-14 pb-8 relative'>
                            <img src={article.thumbnail} alt='blog' className='rounded-lg w-full h-80' />
                            <div className='flex items-center justify-between px-4 mt-5'>
                                <div className='flex items-center gap-2 text-sm'>
                                    <img src={timer} alt='icons articles' />
                                    <p>{article.pubDate}</p>
                                </div>
                                <div className='flex items-center gap-2 text-sm'>
                                    <img src={profile} alt='icons articles' />
                                    <p>Almanshurah</p>
                                </div>
                                <div className='flex items-center gap-2 text-sm'>
                                    <img src={comment} alt='icons articles' />
                                    <p className='uppercase'>50 Comment</p>
                                </div>
                            </div>
                            <div className='my-6'>
                                <h4 className='font-bold uppercase text-2xl'>{article.title}</h4>
                                <p className='my-3 text-md'>{article.description}</p>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='mt-8'>
                                <video
                                    id="video"
                                    className='rounded-lg shadow-2xl'
                                    ref={videoRef}
                                    onPause={handleVideoPause}
                                    onPlay={handleVideoPlay}
                                    onClick={handleVideoClick}
                                >
                                    <source src={videoSample} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className={`absolute inset-0 ${!isPlaying ? 'bg-primary bg-opacity-20' : 'hidden'}`} />
                            </div>
                            <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                id="playButton"
                                ref={playButtonRef}
                                onClick={handlePlayButtonClick}>
                                <img src={buttonVid} alt="img" />
                            </div>
                        </div>
                        <div className='bg-blue-600 rounded-lg px-5 py-4 mt-10'>
                            <p className='text-white text-center'>Imagine you’re at a party, and you’re bored. You’ve been bored for a while—years, it feels like. You wonder how a party, something that is supposed to be fun, can feel like it’s draining the life out of your very soul. As you look around the yawning faces of the guests, you realize it’s going to take drastic measures to salvage any excitement out of this long night. So you sneak a desperate gulp of your drink, slip on your tinted sunglasses and leap atop of the sofa. You’ve sacrificed yourself to karaoke.</p>
                        </div>
                        <div className='mt-10 flex items-center gap-6'>
                            <div>
                                <img src={image1} alt='gambar' className='mb-4' />
                                <p className='text-justify'>The birth of Memphis Design was a lot like this, starting with a gathering of architects and industrial designers in Milan, Italy in 1981. But it wasn’t the party that bored the guests. It was the general state of design—how creativity had stagnated to become corporate and uniform.</p>
                            </div>
                            <div>
                                <img src={image2} alt='gambar' className='mb-4' />
                                <p className='text-justify'>Long before all this, there had been a number of fine art and design movements that precipitated Memphis Design, and these were likely on the guests’ minds as they traced where it all had gone wrong. Kadinsky composition On White Kadinsky’s work also likely inspired the Memphis design movement.</p>
                            </div>
                        </div>
                        <div className='mt-10 mb-16'>
                            <img src={charlieHerwitz} alt='profile' />
                        </div>
                        <div>
                            <Comments />
                        </div>
                    </div>
                </div>
                <Sidebar />
            </section>
            <Footer />
        </div>
    );
};

export default BlogDetails;
