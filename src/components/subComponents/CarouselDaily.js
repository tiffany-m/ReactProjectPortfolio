import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import renderHTML from 'react-render-html';

const items = [
    {
      src: '/assets/images/donuts.jpg',
      altText: 'Daily Treats',
      caption: renderHTML('<strong>Donuts: </strong>$1.25 each or $12/dozen')
    },
    {
      src: '/assets/images/cupcakes.jpg',
      altText: 'Daily Treats',
      caption: renderHTML('<strong>Cupcakes: </strong>$3 each or $30/dozen')
    },
    {
      src: '/assets/images/cookies.jpg',
      altText: 'Daily Treats',
      caption: renderHTML('<strong>Cookies: </strong>$16 per pound')
    }
  ];
  
  const CarouselDaily = (props) => {
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
  
  export default CarouselDaily;