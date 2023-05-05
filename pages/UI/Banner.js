import { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => setCurrentIndex(next),
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % settings.slidesToShow);
      }, settings.autoplaySpeed);
  
      return () => clearInterval(intervalId);
    }, [currentIndex, settings.autoplaySpeed, settings.slidesToShow]);
  

  return (
  <div className="relative banner-img">
    <Slider {...settings}>
      <div>
        <Image
          src="/carousel-image-1.jpg"
          alt="Carousel Image 1"
          width={1920}
          height={300}
        />
      </div>
      <div>
        <Image
          src="/carousel-image-2.jpg"
          alt="Carousel Image 2"
          width={1920}
          height={300}
        />
      </div>
      <div>
        <Image
          src="/carousel-image-3.jpg"
          alt="Carousel Image 3"
          width={1920}
          height={300}
        />
      </div>
    </Slider>

    {/* <div className="absolute bottom-0 left-0 w-full text-center">
      {Array.from({ length: settings.slidesToShow }, (_, i) => (
        <span
          key={i}
          className={`inline-block w-3 h-3 mx-2 rounded-full ${
            i === currentIndex ? 'bg-black' : 'bg-gray-300'
          }`}
          onClick={() => setCurrentIndex(i)}
        ></span>
      ))}
    </div> */}
  </div>
  )
}

export default Banner