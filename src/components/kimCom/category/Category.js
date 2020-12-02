import React from "react";

const Category = () => {
  return (
    <>
      <div class="xans-element- xans-product xans-product-menupackage bvt-head ">
        <div class="menu-box2">
          <div class="menu-swipe swiper-container swiper-container-initialized swiper-container-horizontal">
            <div class="swiper-wrapper">
              <div class="xans-element- xans-product xans-product-displaycategory swiper-slide -box xans-record- swiper-slide-active">
                <a href="/product/list.html?cate_no=120" class="selected">
                  전체
                </a>
              </div>
              <div class="xans-element- xans-product xans-product-displaycategory swiper-slide -box xans-record- swiper-slide-next">
                <a href="/product/list.html?cate_no=121" class="">
                  간편식
                </a>
              </div>
              <div class="xans-element- xans-product xans-product-displaycategory swiper-slide -box xans-record-">
                <a href="/product/list.html?cate_no=122" class="">
                  반찬,요리
                </a>
              </div>
              <div class="xans-element- xans-product xans-product-displaycategory swiper-slide -box xans-record-">
                <a href="/product/list.html?cate_no=123" class="">
                  베이커리
                </a>
              </div>
              <div class="xans-element- xans-product xans-product-displaycategory swiper-slide -box xans-record-">
                <a href="/product/list.html?cate_no=124" class="">
                  간식/음료
                </a>
              </div>
              <div class="xans-element- xans-product xans-product-displaycategory swiper-slide -box xans-record-">
                <a href="/product/list.html?cate_no=150" class="">
                  잼/소스
                </a>
              </div>
              <div class="xans-element- xans-product xans-product-displaycategory swiper-slide -box xans-record-">
                <a href="/product/list.html?cate_no=133" class="">
                  기타
                </a>
              </div>
            </div>
            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
        <div class="xans-element- xans-product xans-product-normalmenu ">
          <div class="bh-type">
            <select
              id="selArray"
              name="selArray"
              class="xans-element- xans-product xans-product-orderby"
            >
              <option
                value="?cate_no=120&amp;sort_method=5#Product_ListMenu"
                class="xans-record-"
              >
                신상품
              </option>
              <option
                value="?cate_no=120&amp;sort_method=1#Product_ListMenu"
                class="xans-record-"
              >
                상품명
              </option>
              <option
                value="?cate_no=120&amp;sort_method=3#Product_ListMenu"
                class="xans-record-"
              >
                낮은가격
              </option>
              <option
                value="?cate_no=120&amp;sort_method=4#Product_ListMenu"
                class="xans-record-"
              >
                높은가격
              </option>
              <option
                value="?cate_no=120&amp;sort_method=6#Product_ListMenu"
                class="xans-record-"
              >
                인기상품
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
