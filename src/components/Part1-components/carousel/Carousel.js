import React from 'react';
import Slider from 'infinite-react-carousel';
import Slide from './Slide';

export default class Carousel extends React.Component {
    render() {
        const settings = {
            arrows: false,
            arrowsBlock: false,
            autoplay: true,
            autoplaySpeed: 3000,
            duration: 600,
            pauseOnHover: false,
            slidesToShow: 4
        };
        return (
            <div className="content">
                <h1 className="title" data-aos="fade-left" data-aos-duration="1500">مختارات المصري</h1>
                <div className="arrow-left">
                    <img src="images/left-arrow.png" />
                </div>
                <div className="slider">
                    <Slider {...settings}>
                        <span className="slide-container">
                            <div className="slide">
                                <Slide />
                            </div>
                        </span>
                        <span className="slide-container">
                            <div className="slide">
                                <Slide />
                            </div>
                        </span>
                        <span className="slide-container">
                            <div className="slide">
                                <Slide />
                            </div>
                        </span>
                        <span className="slide-container">
                            <div className="slide">
                                <Slide />
                            </div>
                        </span>
                        <span className="slide-container">
                            <div className="slide">
                                <Slide />
                            </div>
                        </span>
                        <span className="slide-container">
                            <div className="slide">
                                <Slide />
                            </div>
                        </span>
                    </Slider>
                </div>
                <div className="arrow-right">
                    <img src="images/right-arrow.png" />
                </div>
            </div>
        );
    }
}