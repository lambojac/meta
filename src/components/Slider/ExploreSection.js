import React from 'react';
import Slider from 'react-slick';
import './ExploreSection.css';

const ExploreSection = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const images = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    { src: 'image3.jpg', alt: 'Image 3' },
    // Add more images as needed
  ];

  return (
    <div className="explore-section">
      <div className="section-text">
        Explore games and experiences on Meta Quest
      </div>
      <button className="browse-button">Browse apps and games</button>

      <div className="carousel-container">
        <Slider {...carouselSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExploreSection;
