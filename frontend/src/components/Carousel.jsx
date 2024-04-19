import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@chakra-ui/react';

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Box >
      <Slider {...settings}>
        <Box paddingLeft="20%" >
          <img src='https://htmlcolorcodes.com/assets/images/colors/teal-color-solid-background-1920x1080.png' alt="Image 1" style={{ width: '70%', maxHeight: '700px' }} />
        </Box>
        <Box paddingLeft="20%" >
          <img src='https://htmlcolorcodes.com/assets/images/colors/teal-color-solid-background-1920x1080.png' alt="Image 1" style={{ width: '70%', maxHeight: '700px' }} />
        </Box>
        <Box paddingLeft="20%" >
          <img src='https://htmlcolorcodes.com/assets/images/colors/teal-color-solid-background-1920x1080.png' alt="Image 1" style={{ width: '70%', maxHeight: '700px' }} />
        </Box>
      </Slider>
    </Box>
  );
};

export default SimpleCarousel;
