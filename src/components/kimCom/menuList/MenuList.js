import React from "react";

const MenuList = () => {
  return (
    <>
      <div class="xans-element- xans-product xans-product-normalpackage ">
        <div class="xans-element- xans-product xans-product-listnormal shop-box">
          {/* 
    $count = 24
        ※ 상품진열갯수를 설정하는 변수입니다. 설정하지 않을 경우, 최대 200개의 상품이 진열 됩니다.
        ※ 진열된 상품이 많으면, 쇼핑몰에 부하가 발생할 수 있습니다.
    $basket_result = /product/add_basket.html
    $basket_option = /product/basket_option.html
        */}
          <ul id="anchorBoxId_735" class="xans-record-">
            <li class="img">
              <div class="resImg">
                <a href="/product/detail.html?product_no=735&amp;cate_no=120&amp;display_group=1">
                  <img
                    src="//bvoat.com/web/product/big/202009/938baf8dfe51f5931114256bee69da8d.jpg"
                    id=""
                    alt="[가치소비] 어이딸 김부각 세트-비보트"
                  />
                </a>
              </div>
            </li>
            <li class="txt">
              <div class="xans-element- xans-product xans-product-listitem infoBox">
                <div class=" brand xans-record-">
                  <span style={{ fontSize: "12px", color: "#555555" }}>
                    어이딸부각
                  </span>
                </div>
                <div class=" title xans-record-">
                  <span style={{ fontSize: "12px", color: "#555555" }}>
                    어이딸 김부각 세트 4종
                  </span>
                </div>
                <div class=" desc xans-record-">
                  <span style={{ fontSize: "13px", color: "#555555" }}>
                    반찬, 술안주 및 간식을 한 번에
                    <br />
                    찹쌀과 무산김의 환상 콜라보레이션
                  </span>
                </div>
                <div class=" price xans-record-">
                  <span style={{ fontSize: "14px", color: "#0077c6" }}>
                    19,900원
                  </span>
                  <span id="span_product_tax_type_text"> </span>
                </div>
              </div>
              <span class="likePrd likePrd_735 like">
                <button class="gdVote" type="button">
                  <img
                    src="/web/upload/icon_202003110047582100.png"
                    class="likePrdIcon"
                    product_no="735"
                    category_no="120"
                    icon_status="off"
                    alt="좋아요 등록 전"
                  />
                </button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuList;
