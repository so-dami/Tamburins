<template>
  <main id="cont">
    <section class="login-client-pg">
      <div class="login-client-container calc">
        <div class="w-100">
          <div class="login-title-box">
            <h2 class="login-title-txt">로그인</h2>
          </div>
          <form action="" class="login-client-form">
            <!-- 이메일 -->
            <div class="form-label-box">
              <input type="email" id="loginEmail" class="form-input" placeholder="이메일 입력" autofocus />
            </div>
            <!-- 비밀번호 -->
            <div class="form-label-box">
              <input type="password" id="loginPassword" class="form-input" placeholder="비밀번호 입력" />
            </div>
            <!-- 로그인하기 -->
            <div class="standard-btn-box">
              <button class="standard-btn pointer" type="submit" @click="loginClick()">로그인</button>
            </div>
          </form>
          <div class="pg-more-area">
            <a href="#">아이디 찾기</a>
            <span>ㅣ</span>
            <a href="#">비밀번호 찾기</a>
            <span>ㅣ</span>
            <a href="/signUp">회원가입</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {};
  },
  props: {},
  methods: {
    loginClick() {
      let userEmail = document.querySelector('#loginEmail').value;
      let userPw = document.querySelector('#loginPassword').value;
      let userInfo = { email: userEmail, pw: userPw };
      console.log(userInfo);

      event.preventDefault();

      // 이메일 공백 체크
      if (userInfo['email'] == '') {
        alert('이메일을 입력해 주세요.');
      }
      // 비밀번호 공백 체크
      else if (userInfo['pw'] == '') {
        alert('비밀번호를 입력해 주세요.');
      }
      // 이메일, 비밀번호 공백이 아니면?
      else if (userInfo['email'] != '') {
        // 이메일 일치 여부
        if (localStorage.getItem('join') != null) {
          let infoGet = JSON.parse(localStorage.getItem('join'));
          if (
            infoGet.findIndex((a) => {
              return a['email'] == userEmail;
            }) == -1
          ) {
            alert('존재하지 않는 이메일입니다.');
          } else {
            // 비밀번호 일치 여부
            if (
              infoGet.findIndex((a) => {
                return a['password'] == userPw;
              }) == -1
            ) {
              alert('비밀번호를 확인해 주세요.');
            }
            // 로그인 성공
            else {
              alert('로그인이 되었습니다.');
              document.cookie = 'login=true; max-age=1800';
              window.location.href = 'http://localhost:8080';
            }
          }
        }
      }
    },
  },
};
</script>
<style>
@import '../../assets/css/sub/login.css';
</style>
