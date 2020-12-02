import React from "react";

const paging = () => {
  return (
    <>
      <div class="xans-element- xans-order xans-order-basketpackage ">
        <div class="basket-header w100">
          <div class="t18 b">장바구니</div>
        </div>
        <div class="xans-element- xans-order xans-order-empty empty-message w100 ">
          <p>장바구니가 비었어요!</p>
        </div>
        <div class="orderListArea ec-base-table typeList gBorder">
          <div class="orderListArea ec-base-table typeList gBorder">
            <div class="xans-element- xans-order xans-order-totalorder row-tail">
              <div class="button-box ">
                <div class="btn-basic btn-type1 btn-size-m ">
                  <a
                    href="#none"
                    onclick="Basket.orderAll(this)"
                    class=""
                    link-order="/order/orderform.html?basket_type=all_buy"
                    link-login="/member/login.html"
                  >
                    모두주문하기
                  </a>
                </div>
                <div class="btn-basic btn-type2 btn-size-m ">
                  <a
                    href="#none"
                    onclick="Basket.orderSelectBasket(this)"
                    link-order="/order/orderform.html?basket_type=all_buy"
                    link-login="/member/login.html"
                  >
                    선택주문하기
                  </a>
                </div>
              </div>

              <div id="NaverChk_Button"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default paging;
