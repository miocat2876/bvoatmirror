import React from "react";

const paging = () => {
  return (
    <>
      <div id="searchScreen">
        <div class="search-top">
          <div class="search-logo">
            <a href="/">
              <img src="/bvtIMG/logo_bvt.svg" alt="Bvoat Logo 비보트 로고 " />
            </a>
          </div>
        </div>
        <div class="search-middle">
          <div class="txt-title">
            <p class="line1">
              어떤 가치의 상품에 <br />
              투표하시겠어요?
              <img src="/web/upload/icon1.png" alt="" />
            </p>
          </div>
        </div>
        <div class="srchBox">
          <form
            id="searchBarForm"
            name=""
            action="/product/search.html"
            method="get"
            target="_self"
            enctype="multipart/form-data"
          >
            <input
              id="banner_action"
              name="banner_action"
              value=""
              type="hidden"
            />
            <div class="xans-element- xans-layout xans-layout-searchheader srchInputBox ">
              <input
                id="keyword"
                name="keyword"
                fw-filter=""
                fw-label="검색어"
                fw-msg=""
                class="inputTypeText"
                placeholder=""
                onmousedown="SEARCH_BANNER.clickSearchForm(this)"
                value=""
                type="text"
              />
              <button
                type="button"
                class="srchBtn"
                onclick="SEARCH_BANNER.submitSearchBanner(this); return false;"
              >
                <img src="/bvtIMG/console_search_black.svg" alt="검색" />
                &nbsp;
              </button>
            </div>
          </form>{" "}
          <div class="hotKeywords">
            <h3>많이 찾는 키워드</h3>
            <ul class="xans-element- xans-search xans-search-hotkeyword">
              <li class="xans-record-">
                <a href="/product/search.html?keyword=친환경">#친환경</a>
              </li>
              <li class="xans-record-">
                <a href="/product/search.html?keyword=비건">#비건</a>
              </li>
              <li class="xans-record-">
                <a href="/product/search.html?keyword=소프넛">#소프넛</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default paging;
