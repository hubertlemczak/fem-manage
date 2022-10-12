import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel as CarouselWrapper } from 'react-responsive-carousel';

import avatarAnisha from '../assets/images/avatar-anisha.png';
import avatarAli from '../assets/images/avatar-ali.png';
import avatarRichard from '../assets/images/avatar-richard.png';
import avatarShanai from '../assets/images/avatar-shanai.png';

import CarouselItem from './CarouselItem';
import { useState } from 'react';
import { useEffect } from 'react';

const REVIEWS = [
  {
    name: 'Anisha Li',
    review:
      "“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    profilePic: avatarAnisha,
  },
  {
    name: 'Ali Bravo',
    review:
      '“We have been able to cancel so many other subscriptions using Manage. There is no more cross-channel confusion and everyone is more focused.”',
    profilePic: avatarAli,
  },
  {
    name: 'Richard Watts',
    review:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!”",
    profilePic: avatarRichard,
  },
  {
    name: 'Shanai Gough',
    review:
      '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
    profilePic: avatarShanai,
  },
];

const Carousel = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    window.addEventListener('resize', e => {
      setWidth(window.innerWidth);
    });

    return () =>
      window.removeEventListener('resize', e => {
        setWidth(window.innerWidth);
      });
  }, []);

  let carouselProps = {};

  if (width > 767) {
    carouselProps = {
      centerMode: true,
      centerSlidePercentage: 60,
    };
  }

  if (width > 920) {
    carouselProps.centerSlidePercentage = 50;
  }

  if (width > 1150) {
    carouselProps.centerSlidePercentage = 40;
  }

  if (width > 1400) {
    carouselProps.centerSlidePercentage = 35;
  }

  if (width > 1600) {
    carouselProps.centerSlidePercentage = 30;
  }

  return (
    <CarouselWrapper
      className="w-full my-20"
      {...carouselProps}
      infiniteLoop
      showThumbs={false}
      renderIndicator={false}
    >
      {REVIEWS.map((review, i) => (
        <CarouselItem key={i} {...review} />
      ))}
    </CarouselWrapper>
  );
};

export default Carousel;
