import * as React from 'react'
import { Box, Image } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Carousel = ({ source }) => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, color: 'black' }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, color: 'black' }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: 'true',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <Box w={{ xl: '30vw', sm: '60vw', lg: '40vw' }}>
            <Slider {...settings}>
                {
                    source ? source.map((s, i) => (
                        <Box key={i}>
                            <Image src={s} />
                        </Box>
                    )) : null
                }
            </Slider>
        </Box>
    )
}

export default Carousel;