import React from "react";

import "../../../styles/kimWork/login.css";

const Login = () => {
  return (
    <>
      <div class="headerflex wrapper2 center padding2">
        <div class="hd-logo img-w">
          <a href="/">
            <img src="/bvtIMG/logo_202010.png" alt="Bvoat Logo 비보트 로고 " />
          </a>
        </div>
      </div>
      <form
        id="member_form_5616509613"
        name=""
        action="/exec/front/Member/login/"
        method="post"
        target="_self"
        enctype="multipart/form-data"
      >
        <input
          id="returnUrl"
          name="returnUrl"
          value="https://bvoat.com/product/list.html?cate_no=142"
          type="hidden"
        />
        <input
          id="forbidIpUrl"
          name="forbidIpUrl"
          value="/index.html"
          type="hidden"
        />
        <input
          id="certificationUrl"
          name="certificationUrl"
          value="/intro/adult_certification.html"
          type="hidden"
        />
        <input id="sIsSnsCheckid" name="sIsSnsCheckid" value="" type="hidden" />
        <input id="sProvider" name="sProvider" value="" type="hidden" />
        <div class="xans-element- xans-member xans-member-login ">
          <div class="wrapper2 padding2">
            <div class="login-box">
              <img class="padding2" src="/bvtIMG/sign_1.png" />
              &nbsp;
              <div class="login-title">
                우리가 먹고, 입고, 쓰는 일이 <br />
              </div>
              <div class="login-title">보다 가치있어집니다.</div>
              <fieldset>
                <legend>비보트 회원로그인</legend>
                <div class="login-mrg">
                  <div class="login-input">
                    <input
                      id="member_id"
                      name="member_id"
                      fw-filter="isFill"
                      fw-label="아이디"
                      fw-msg=""
                      class="inputTypeText"
                      placeholder=""
                      value=""
                      type="text"
                    />{" "}
                    <label for="member_id">아이디</label>
                  </div>
                  <div class="login-input">
                    <input
                      id="member_passwd"
                      name="member_passwd"
                      fw-filter="isFill&amp;isMin[4]&amp;isMax[16]"
                      fw-label="패스워드"
                      fw-msg=""
                      autocomplete="off"
                      value=""
                      type="password"
                    />{" "}
                    <label for="member_passwd">비밀번호</label>
                  </div>
                </div>

                <span class="auto">
                  <input
                    id="use_login_keeping0"
                    name="use_login_keeping"
                    fw-filter=""
                    fw-label="로그인상태유지"
                    fw-msg=""
                    onclick="MemberAction.confirmLoginKeeping(this);"
                    value="T"
                    type="checkbox"
                  />
                  <label for="use_login_keeping0">로그인 상태 유지</label>
                </span>
                <p class="security">
                  <img
                    src="//img.echosting.cafe24.com/design/skin/default/member/ico_access.gif"
                    alt="보안접속"
                  />{" "}
                  보안접속{" "}
                </p>
                <div class="login-mrg login-btn">
                  <label>
                    <a
                      href="#none"
                      onclick="MemberAction.login('member_form_5616509613'); return false;"
                    >
                      로그인하기
                    </a>
                  </label>
                </div>
                <ul class="find-box login-mrg">
                  <li>
                    <a href="/member/id/find_id.html">아이디찾기</a>
                  </li>
                  <li>
                    <a href="/member/passwd/find_passwd_info.html">
                      비밀번호찾기
                    </a>
                  </li>
                  <li id="signup">
                    <a href="/member/join_agree.html" class="link">
                      회원가입
                    </a>
                  </li>
                </ul>
                <div
                  class="link clear nomember-box displaynone"
                  id="noMemberWrap"
                >
                  <div class="btn-size-all btn-basic">
                    <a href="" class="btnEm" onclick="">
                      비회원구매
                    </a>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
