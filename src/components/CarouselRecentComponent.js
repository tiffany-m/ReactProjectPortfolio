import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
    {
      src: '/assets/images/recent1.jpg',
      altText: 'Recent Orders',
      caption: 'Autumn',
    },
    {
      src: '/assets/images/recent2.jpg',
      altText: 'Recent Orders',
      caption: 'Inspired by picture frame.'
    },
    {
      src: '/assets/images/recent3.jpg',
      altText: 'Recent Orders',
      caption: 'Little Red Riding Hood'
    },
    {
      src: '/assets/images/recent4.jpg',
      altText: 'Recent Orders',
      caption: 'Blake from RWBY.'
    },
    {
      src: '/assets/images/recent5.jpg',
      altText: 'Recent Orders',
      caption: 'Aaahh!  Real Monsters'
    }
  ];
  
  const CarouselRecent = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img className="d-block w-100 boxStyle" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }
  
  export default CarouselRecent;