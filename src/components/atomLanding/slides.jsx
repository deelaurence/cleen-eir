import React, { useState, useEffect } from 'react';
import slum from '../../assets/slum.jpg';
import slum2 from '../../assets/slum2.jpg';
import rowdyStreet from '../../assets/rowdy-street.jpg';
import mistyKeke from '../../assets/misty-keke.jpg';
import burningRefuse from '../../assets/burning-refuse.jpg';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      console.log(currentImageIndex)
      images.push(images.shift())
      console.log(images)
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  console.log(currentImageIndex)
  return (
    <div className="slider-container">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </div>
    </div>
  );
};

const images = [slum, slum2, burningRefuse, rowdyStreet, slum2];

// Usage
const Slides = () => {
    // Replace with your image URLs
      console.log(images)
      return (
        <div>
          <h1>Image Slider</h1>
          <ImageSlider images={images} />
        </div>
      );
    };
    
export default Slides;