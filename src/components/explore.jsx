import React, { useState, useEffect } from 'react';
import './exploreCarousel.css';
import Rhino from "/src/assets/rhino.jpg";
import Tsavo from "/src/assets/tiger.jpg";
import Watamu from "/src/assets/watamu.jpg";
import Amazon from "/src/assets/amazon.jpg";
import Gala from "/src/assets/galpos.jpg";
import SA from "/src/assets/sa.jpg";
import USA from "/src/assets/usa.jpg";

const slides = [
  { image: Rhino, description: 'Masai Mara: Known for the Great Migration.' },
  { image: Tsavo, description: 'Tsavo National Park: Famous for red elephants.' },
  { image: Watamu, description: 'Watamu Marine Park: Coral reefs and sea turtles.' },
  { image: Amazon, description: 'Amazon Rainforest: The lungs of the Earth.' },
  { image: SA, description: 'Kruger National Park (South Africa): This is one of the oldest and most established parks in Africa, spanning diverse ecosystems.' },
  { image: Gala, description: 'Galápagos Islands: Unique species and conservation.' },
  { image: USA, description: 'Yellowstone National Park (USA): Recognized as the first national park in the world, Yellowstone is famous for geothermal features and diverse species, like bison and wolves.' },
];

const Explore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='explore-description'>
        <h1>
            Explore Beautiful sceneries accross the world
        </h1>
        <div className='par'><p>Embark on a virtual journey through breathtaking game parks, vibrant marine sanctuaries, and iconic global biodiversity hotspots. Discover Kenya’s stunning game reserves like Masai Mara and Tsavo, where majestic wildlife like elephants, lions, and the Great Migration unfold. Dive into the vibrant underwater worlds of Watamu and the Great Barrier Reef, brimming with marine life and colorful corals. Finally, expand your adventure to global treasures like the Amazon Rainforest and Serengeti, where conservation efforts protect our planet's rich natural diversity. This interactive exploration will inspire you to appreciate and support the preservation of these vital ecosystems.</p></div>
        
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={slide.image} alt="wildlife" className="carousel-image" />
          <p className="carousel-description">{slide.description}</p>
        </div>
      ))}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Explore;
