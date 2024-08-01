import Slider from 'react-slick';

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`Slide ${index + 1}`} style={{ width: '500px', height: '500px' }} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;