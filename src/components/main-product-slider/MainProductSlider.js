import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/basic.css';
import '../../styles/element.css';
import MainProductCard from '../main-product-card/MainProductCard';

const MainProductSliderCard = () => {
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
          <div className="bvt-list-main">
            <MainProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProductSliderCard;
