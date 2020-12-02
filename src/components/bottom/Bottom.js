import React from "react";
import "../../styles/basic.css";
import "../../styles/element.css";

const Bottom = () => {
  return (
    <>
      <div
        id="footer"
        class="xans-element- xans-layout xans-layout-footer "
        style={{ display: "block" }}
      >
        <div class="wrapper padding2">
          <div class="snsInfoBox w100">
            <div class="wrapper">
              <ul>
                <li>
                  <a
                    href="https://instagram.com/bvoat?igshid=lbj9cjbdfd1s"
                    target="_blank"
                  >
                    <img
                      src="/bvtIMG/footer_instagram.svg"
                      alt="비보트 공식 인스타그램"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/bvoatofficial/"
                    target="_blank"
                  >
                    <img
                      src="/bvtIMG/footer_facebook.svg"
                      alt="비보트 공식 페이스북"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/bvoatofficial" target="_blank">
                    <img
                      src="/bvtIMG/footer_twitter.svg"
                      alt="비보트 공식 트위터"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footerInfoBox clear">
            <ul class="footerBox1">
              <li>
                <a href="https://forms.gle/RoURZUtdVrYYmzrW6" target="_blank">
                  입점문의
                </a>
              </li>
              <li>
                <a href="/member/privacy.html">개인정보처리방침</a>
              </li>
              <li>
                <a href="/member/mall_agreement.html">이용약관</a>
              </li>
            </ul>
            <div class="footerBox2">
              <div>
                쇼핑은 항해다, 소비는 투표다!
                <br />
                비건 · 친환경 라이프스타일 커머스, <b>비보트</b>
              </div>
            </div>
            <div class="footer-mobile-toggle-box">
              {" "}
              <img src="/bvtIMG/footer_more.svg" alt="하단 정보" />
            </div>
            <div class="footerBox4">
              <div class="thanksto">
                <b>
                  <br />
                  비보트를 만드는 사람들 <br />
                </b>
                김채영, 김하연, 안창호, 송지훈, 백나은, 송하연
                <br />
                <br />
              </div>
              <div class="companyInfo">
                주식회사 패신저스 | 대표 : 김채영
                <br /> 사업자등록번호 : 451-87-01571
                <br /> 통신판매업신고번호 : 2020-서울성동-06136 <br /> 주소 :
                서울특별시 성동구 아차산로17길 49 (성수동2가)
                성수W센터데시앙플렉스 1612호
                <br /> 개인정보책임관리자 : 송지훈 jihoon@passengers.co.kr
                <br />
                <br /> 제휴문의 : official@passengers.co.kr
                <br /> 고객센터 : 070-4173-6999
                <br /> 업무시간 : (평일) 13:00 ~ 18:00 <br /> 입금계좌 :
                기업은행 633-039246-04-014
              </div>
            </div>
            <div class="footerBox3">
              <a
                href="https://www.allatpay.com/servlet/AllatBiz/svcinfo/si_escrowview.jsp?menu_id=idS16&amp;shop_id=bvoatofficial&amp;business_no=4518701571"
                target="_blank"
              >
                <img
                  src="/bvtIMG/pg.jpg"
                  border="0"
                  style={{ cursor: "pointer" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
