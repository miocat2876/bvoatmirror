import React from "react";

import "../../../styles/swiper.css";
import "../../../styles/kimWork/mypage.css";

const Mypage = () => {
  return (
    <>
      <div class="xans-element- xans-layout xans-layout-logincheck "></div>
      <div class="xans-element- xans-myshop xans-myshop-bankbook bvt-head ">
        <div class="t18 b">김경민님의 패스포트 🎫</div>
        <div class="left">
          <a href="/member/modify.html">내 정보 수정</a>
        </div>
      </div>

      <div class="xans-element- xans-myshop xans-myshop-asyncbankbook myshop-mileage w100 ">
        <ul>
          <li>
            <a href="/myshop/mileage/historyList.html">
              <div class="c1">마일리지</div>
              <div class="t13 b">
                <span id="xans_myshop_bankbook_avail_mileage">2,000점</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/myshop/coupon/coupon.html">
              <div class="c1">쿠폰</div>
              <div class="t15 b">
                <span id="xans_myshop_bankbook_coupon_cnt">0</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/myshop/order/list.html">
              <div class="c1">여행 끝</div>
              <div class="t15 b">
                <span id="xans_myshop_bankbook_order_count">0</span>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div class="xans-element- xans-myshop xans-myshop-orderstate myshop-order w100 ">
        <ul class="normal-list">
          <li>
            <a href="/myshop/order/list.html?order_status=shipped_before">
              <div class="c1">결제 전</div>
              <div class="t15 b">
                <span id="xans_myshop_orderstate_shppied_before_count">0</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/myshop/order/list.html?order_status=shipped_standby">
              <div class="c1">준비 중</div>
              <div class="t15 b">
                <span id="xans_myshop_orderstate_shppied_standby_count">0</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/myshop/order/list.html?order_status=shipped_begin">
              <div class="c1">여행 중</div>
              <div class="t15 b">
                <span id="xans_myshop_orderstate_shppied_begin_count">0</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/myshop/order/list.html?order_status=shipped_complate">
              <div class="c1">도착!</div>
              <div class="t15 b">
                <span id="xans_myshop_orderstate_shppied_complate_count">
                  0
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div class="sectionPartition"></div>
      <div class="xans-element- xans-myshop xans-myshop-main myshop-list ">
        <ul>
          <li>
            <a href="/myshop/order/list.html">📦 주문배송조회</a>
          </li>
          <li>
            <a href="/myshop/board_list.html">📝 내가 쓴 글</a>
          </li>
          <li class="onlyPC">
            <a href="/myshop/likeit/product.html">🥰 내가 누른 좋아요</a>
          </li>
          <li class="xans-element- xans-layout xans-layout-statelogon ">
            <a href="/exec/front/Member/logout/">🚪 로그아웃</a>
          </li>
          <li style={{ display: "none" }}>
            <a href="/myshop/regular_delivery.html">📅 정기배송 관리</a>
          </li>
          <li style={{ display: "none" }}>
            <a href="/myshop/order/list.html?order_status=order_cancel">
              📫 취소 조회
            </a>
          </li>
          <li style={{ display: "none" }}>
            <a href="/myshop/order/list.html?order_status=order_return">
              📭 반품 조회
            </a>
          </li>
          <li style={{ display: "none" }}>
            <a href="/myshop/order/list.html?order_status=order_exchange">
              📬 교환 조회
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Mypage;
