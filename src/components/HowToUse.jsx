import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectContentHeading } from '../reducers/slice'
import { buttonVid, videoSample } from "../utils"
// import "../App.css"

const HowToUse = () => {
    const contentHeading = useSelector(selectContentHeading)
    const howToUseContent = contentHeading.find(item => item.id == 5)
    const videoRef = useRef(null)
    const playButtonRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlayButtonClick = () => {
        videoRef.current.play();
        playButtonRef.current.start.display = "none";
        setIsPlaying(true)
    }
    const handleVideoPause = () => {
        playButtonRef.current.style.display = "block"
        setIsPlaying(false)
    }
    const handleVideoPlay = () => {
        playButtonRef.current.style.display = "none"
        setIsPlaying(true)
    }
    const handleVideoClick = () => {
        if (videoRef.current.paused) {
            videoRef.current.play()
            setIsPlaying(true)
        } else {
            videoRef.current.pause()
            setIsPlaying(false)
        }
    }
    return (
        <div className='h-screen'>
            <div className='bg-hero h-96 relative'>
                <h2 className='text-center uppercase font-bold text-2xl text-white pt-24'>{howToUseContent.title}</h2>
                <div className='flex justify-center items-center'>
                    <p className='w-9/12 text-center py-4 text-white'>{howToUseContent.description}</p>
                </div>
                <div className='w-1/2 translate-x-1/2 mt-8 relative'>
                    <video
                        id="video"
                        className='rounded-md shadow-2xl'
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
                <div className="absolute z-10  left-1/2 -bottom-20 transform -translate-x-1/2 -translate-y-1/2"
                    id="playButton"
                    ref={playButtonRef}
                    onClick={handlePlayButtonClick}>
                    <img src={buttonVid} alt="img" />
                </div>

            </div>
        </div>
    )
}

export default HowToUse