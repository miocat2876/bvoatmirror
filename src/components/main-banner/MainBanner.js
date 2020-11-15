import React from 'react';
import '../../styles/basic.css';
import '../../styles/element.css';
import './MainBanner.css';

const MainBanner = () => {
  return (
    <>
      <div className="displayBox2">
        <div className="topLineBanner2">
          <div className="img-c">
            <img
              src="../images/test_topBanner.gif"
              alt="소비는 항해다, 구매는 투표다."
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
