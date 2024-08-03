import { useSelector } from 'react-redux';
import { selectContentHeading } from '../reducers/slice';
import { carouselImages } from '../utils';
import "../App.css";
import { useEffect } from 'react';

const Checkout = () => {
    const contentHeading = useSelector(selectContentHeading);
    const checkoutContent = contentHeading.find(item => item.id === 3);

    useEffect(() => {
        M.Carousel.init(document.querySelectorAll('.carousel'), {
            indicators: true,
            dist: -40,
        })
    }, []);

    return (
        <div className='mx-12 py-10'>
            <div className=''>
                <h2 className='uppercase font-bold text-2xl text-center'>{checkoutContent.title}</h2>
                <p className='text-center w-1/2 mx-auto my-4'>{checkoutContent.description}</p>
            </div>
            <div className="carousel">
                {carouselImages.map((image, index) => (
                    <div key={index} className="carousel-item">
                        <img src={image} alt="phone app" />
                    </div>
                ))}
            </div>
            {/* <div className="carousel">
                <div className="carousel-item">
                    <img src="../../public/assets/mobile.png" />
                </div>
                <div className="carousel-item">
                    <img src="../../public/assets/mobile.png" />
                </div>
                <div className="carousel-item">
                    <img src="../../public/assets/mobile.png" />
                </div>
                <div className="carousel-item">
                    <img src="../../public/assets/mobile.png" />
                </div>
                <div className="carousel-item">
                    <img src="../../public/assets/mobile.png" />
                </div>
            </div> */}
        </div >
    );
}

export default Checkout;
