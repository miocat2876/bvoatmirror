import React from 'react';
import { Link } from 'react-router-dom';
import MainProductCard from '../main-product-card/MainProductCard';
import '../../styles/basic.css';
import '../../styles/element.css';
import '../../styles/ocean.css';
import './MainNewProductList.css';

const MainNewProductList = () => {
  return (
    <>
      <div className="displayBox">
        <div className="bvt-list main">
          <div className="subTitle">비보트의 탑승객들은 뭘 사랑했을까..?</div>
          <div className="pointlink">
            <div className="basicTitle">지난 한 주 사랑받았어요</div>
            <div className="pointTitle">#가치소비보트</div>
            <Link>
              <img className="pointimg" src="images/product_link.svg"></img>
            </Link>
          </div>
          <ul>
            <li className="bvt-list-curation">
              <MainProductCard />
            </li>
            <li className="bvt-list-curation">
              <MainProductCard />
            </li>
            <li className="bvt-list-curation">
              <MainProductCard />
            </li>
            <li className="bvt-list-curation">
              <MainProductCard />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainNewProductList;
