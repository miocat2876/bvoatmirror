import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './MainSlider.css';
import '../../styles/element.css';
import '../../styles/swiper.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const MainSlider = () => {
  return (
    <>
      <div className="displayBox2">
        <div className="hr-sect_right">비건 · 친환경 라이프스타일 커머스</div>
      </div>
      <div class="displayBox2">
        <Slider {...settings}>
          <Link to="/">
            <div className="size">
              <img src="/images/mainBanner2.png" alt="banner1"></img>
            </div>
          </Link>

          <Link to="/">
            <div className="size">
              <img src="/images/mainBanner2.png" alt="banner1"></img>
            </div>
          </Link>
        </Slider>
      </div>
    </>
  );
};

export default MainSlider;
