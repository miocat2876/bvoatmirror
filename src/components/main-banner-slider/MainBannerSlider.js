import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './MainBannerSlider.css';
import '../../styles/element.css';
import '../../styles/swiper.css';
import '../../styles/basic.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const MainBannerSlider = () => {
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
              <img src="/images/mainBanner2.png" alt="banner2"></img>
            </div>
          </Link>
        </Slider>
      </div>
      <div className="displayBox2">
        <div className="midBanner">
          <Link to="/">
            <img
              src="/images/mileage_banner.svg"
              alt="지금 비보트에 탑승하면 마일리지 2,000점 바로 적립!"
            ></img>
          </Link>
        </div>
      </div>
      <div className="displayBox2">
        <div className="hr-sect_left" style={{ marginTop: '50px' }}>
          알려줄게, 요즘소비 #가치소비
        </div>
      </div>
    </>
  );
};

export default MainBannerSlider;
