import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/basic.css';
import '../../styles/swiper.css';

const Menu = () => {
  return (
    <>
      <aside>
        <div class="asideSpace">
          <div class="swiper-container head-menu-swipe swiper-container-initialized swiper-container-horizontal">
            <div class="swiper-wrapper">
              <div class="swiper-slide swiper-slide-active">
                <Link to="/">비보트 추천</Link>
              </div>
              <div class="swiper-slide swiper-slide-next">
                <Link to="/">식품</Link>
              </div>
              <div class="swiper-slide">
                <Link to="/">패션</Link>
              </div>
              <div class="swiper-slide">
                <Link to="/">리빙</Link>
              </div>
              <div class="swiper-slide">
                <Link to="/">뷰티</Link>
              </div>
              <div class="swiper-slide">
                <Link to="/">잡화</Link>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Menu;
