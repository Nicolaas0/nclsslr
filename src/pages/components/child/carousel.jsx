import * as React from 'react'
import { Box, Image } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Carousel = ({ source }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Box w='35vw'>
            <Slider {...settings}>
                {
                    source.map((s, i) => (
                        <Box key={i}>
                            <Image src={s} />
                        </Box>
                    ))
                }
            </Slider>
        </Box>
    )
}

export default Carousel;