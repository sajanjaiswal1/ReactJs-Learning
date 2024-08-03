import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../assets/Carousel/img (1).jpg'
import img2 from '../../assets/Carousel/img (2).jpg'
import img3 from '../../assets/Carousel/img (3).jpg'
import img4 from '../../assets/Carousel/img (4).jpg'
import img5 from '../../assets/Carousel/img (5).jpg'
import img6 from '../../assets/Carousel/img (6).jpg'
import img7 from '../../assets/Carousel/img (7).jpg'
import img8 from '../../assets/Carousel/img (8).jpg'
import Slider from 'react-slick';


const MyCarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };
    return (

        <>
            <Carousel infiniteLoop centerMode dynamicHeight autoPlay interval={1000}>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img5} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img6} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img7} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img8} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>


            <div className='w-full py-5'>
                <Slider {...settings}  >
                    <div className='h-40 w-40 bg-blue-300' >
                        <h3>1</h3>
                    </div>
                    <div className='h-40 w-40 bg-red-300'>
                        <h3>2</h3>
                    </div>
                    <div className='h-40 w-40 bg-red-600'>
                        <h3>3</h3>
                    </div>
                    <div className='h-40 w-40 bg-white'>
                        <h3>4</h3>
                    </div>
                    <div className='h-40 w-40 bg-yellow-300'>
                        <h3>5</h3>
                    </div>
                    <div className='h-40 w-40 bg-green-300'>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>



            <div id="default-carousel" className="relative w-full" data-carousel="slide">
            
                {/* <!-- Carousel wrapper --> */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-50">
                    {/* <!-- Item 1 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={img1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={img2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 3 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={img3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 4 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={img4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 5 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={img5} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>
                {/* <!-- Slider indicators --> */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                {/* <!-- Slider controls --> */}
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            
            </div>
         
        </>
    )
}

export default MyCarousel