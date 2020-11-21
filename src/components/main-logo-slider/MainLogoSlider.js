import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './MainLogoSlider.css';
import '../../styles/basic.css';
import '../../styles/element.css';

SwiperCore.use([Autoplay]);

const MainLogoSlider = () => {
  return (
    <>
      <div className="displayBox">
        <div className="bvt-list main">
          <div className="subTitle">비보트와 함께하는 브랜드</div>
          <div className="pointlink">
            <div className="basicTitle">세상 모든 소비가 가치있도록</div>
            <div className="pointTitle">#선한영향력</div>
          </div>
          <Swiper
            autoplay={true}
            slidesPerView={3}
            slidesPerColumn={2}
            slidesPerColumnFill={2}
          >
            <SwiperSlide>
              <div className="bvt-list-partner-item img-wc">
                <img
                  src="/images/partner-logo/logo_119reo.jpg"
                  alt="partner-logo1"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bvt-list-partner-item img-wc">
                <img
                  src="/images/partner-logo/logo_119reo.jpg"
                  alt="partner-logo2"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bvt-list-partner-item img-wc">
                <img
                  src="/images/partner-logo/logo_119reo.jpg"
                  alt="partner-logo3"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bvt-list-partner-item img-wc">
                <img
                  src="/images/partner-logo/logo_119reo.jpg"
                  alt="partner-logo4"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bvt-list-partner-item img-wc">
                <img
                  src="/images/partner-logo/logo_119reo.jpg"
                  alt="partner-logo5"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bvt-list-partner-item img-wc">
                <img
                  src="/images/partner-logo/logo_119reo.jpg"
                  alt="partner-logo6"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MainLogoSlider;
