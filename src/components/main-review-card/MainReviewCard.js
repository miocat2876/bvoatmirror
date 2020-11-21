import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/basic.css';
import '../../styles/element.css';
import './MainReviewCard.css';

const MainReviewCard = () => {
  return (
    <>
      <div className="thumbBox2">
        <Link>
          <div className="resImg">
            <div class="imgWrapper">
              <img
                src="/images/e8cf251a6325fc94af75cc6a5e1d0ea0.png"
                alt="review-image1"
              ></img>
            </div>
          </div>
        </Link>
      </div>
      <div class="review-info">
        <div class="review-product">
          <div class="review-img">
            <img
              src="/images/e8cf251a6325fc94af75cc6a5e1d0ea0.png"
              alt="review-image2"
            ></img>
          </div>
          <div class="review-title">
            <div class="title-text">
              [가치소비] 베지가든 비건 떡볶이 매운&짜장 1BOX 편의점 간식 야식
            </div>
            <div class="info">
              <span className="review-count">리뷰 11개</span>
              <span className="review-rating mr5">평점 4.5점</span>
            </div>
          </div>
        </div>
        <div className="review-content">
          <div className="row">
            <div className="rating-star">★★★★★</div>
            <div className="option-name">매운떡볶이3EA+짜장떡볶이3EA</div>
          </div>
          <div className="row">
            <div className="user-id">1528371*****</div>
            <div className="review-date">2020년 11월 18일</div>
          </div>
        </div>
        <div className="review-text">
          비건 친구에게 선물해주려고 샀는데 저도 궁금해서 먹어봤어요. 아직
          고추장맛밖에 안먹어봤는데 세상에 너무너무 맛있어요. 전 비건이 아닌데
          그래도 사먹을 것 같아요. 비건이 아닌 다른 떡볶이랑 비교해도 맛있어요.
          떡도 쫄깃쫄깃하고요, 파 썰어서 요리처럼 해서 먹으면 진짜 맛있을것
          같아요. 재구매의사 충만합니다. 아! 배송도 진짜 빨랐어요.
        </div>
      </div>
    </>
  );
};

export default MainReviewCard;
