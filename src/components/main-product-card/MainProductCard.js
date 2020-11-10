import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/basic.css';
import '../../styles/element.css';

const MainProductCard = () => {
  return (
    <>
      <div className="thumbBox">
        <div className="likePrd">
          <button className="gdVote">
            <img
              src="/images/icon_202003110047582100.png"
              alt="좋아요 등록 전"
            ></img>
          </button>
        </div>
        <Link>
          <div className="resImg">
            <div class="imgWrapper">
              <img src="/images/e8cf251a6325fc94af75cc6a5e1d0ea0.png"></img>
            </div>
          </div>
        </Link>
      </div>
      <div className="infoBox">
        <div className="title">
          <span>[무료배송] 베지가든 떡볶이 1박스</span>
        </div>
        <div class="desc">
          <span>
            골목 분식집에서 먹던 맛 그대로!
            <br />
            콜레스테롤, 트랜스지방 0% 비건 떡볶이
          </span>
        </div>
        <div className="price">
          <span>15,000원</span>
        </div>
      </div>
    </>
  );
};

export default MainProductCard;
