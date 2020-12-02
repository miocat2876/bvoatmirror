import React from "react";

const paging = () => {
  return (
    <>
      <div class="xans-element- xans-product xans-product-normalpaging paginate">
        <div class="paginate-box">
          <a href="#none" class="first">
            처음
          </a>
          <a href="#none">이전</a>
          <ol>
            <li class="xans-record-">
              <a href="?cate_no=120&amp;page=1" class="this">
                1
              </a>
            </li>
            <li class="xans-record-">
              <a href="?cate_no=120&amp;page=2" class="other">
                2
              </a>
            </li>
          </ol>
          <a href="?cate_no=120&amp;page=2">다음</a>
          <a href="?cate_no=120&amp;page=2" class="last">
            끝
          </a>
        </div>
      </div>
    </>
  );
};

export default paging;
