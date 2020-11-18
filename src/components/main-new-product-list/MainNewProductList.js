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
          <div className="subTitle">누구보다 빠르게, 남들과는 다르게</div>
          <div className="pointlink">
            <div className="basicTitle">띵동! 새로 입점된 트렌드</div>
            <div className="pointTitle">#가치소비</div>
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
