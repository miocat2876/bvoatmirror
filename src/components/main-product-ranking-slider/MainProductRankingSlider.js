import React from 'react';
import { Link } from 'react-router-dom';
import MainProductCard from '../main-product-card/MainProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import './MainProductRankingSlider.css';
import '../../styles/basic.css';
import '../../styles/element.css';

const MainProductRankingSlider = () => {
  return (
    <>
      <div className="displayBox">
        <div className="bvt-list main">
          <div className="subTitle">비보트의 탑승객들은 뭘 사랑했을까..?</div>
          <div className="pointlink">
            <div className="basicTitle">지난 한 주 사랑받았어요</div>
            <div className="pointTitle">#가치소비보트</div>
            <Link>
              <img
                className="pointimg"
                src="images/product_link.svg"
                alt="link-img"
              ></img>
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
              <div class="bvt-list-best1 mt20">
                <MainProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bvt-list-best2">
                <MainProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bvt-list-best3">
                <MainProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bvt-list-best4">
                <MainProductCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="bvt-list-best5">
                <MainProductCard />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MainProductRankingSlider;
