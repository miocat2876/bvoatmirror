import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainReviewCard from '../main-review-card/MainReviewCard';
import '../../styles/basic.css';
import '../../styles/element.css';

const MainReviewSliderList = () => {
  return (
    <>
      <div className="displayBox">
        <div className="bvt-list main">
          <div className="subTitle">이유 있는 메가트렌드, 나를 위한 선택</div>
          <div className="pointlink">
            <div className="basicTitle">채식이 맛있으면 반칙</div>
            <div className="pointTitle">#비건 #가치소비</div>
            <Link>
              <img className="pointimg" src="images/product_link.svg"></img>
            </Link>
          </div>
          <Swiper
            spaceBetween={5}
            slidesPerView={3}
            pagination={{
              type: 'progressbar',
            }}
          >
            <SwiperSlide>
              <MainReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <MainReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <MainReviewCard />
            </SwiperSlide>
            <SwiperSlide>
              <MainReviewCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MainReviewSliderList;
