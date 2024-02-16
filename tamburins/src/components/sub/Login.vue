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
      event.preventDefault();
    },
  },
};
</script>
<style>
@import '../../assets/css/sub/login.css';
</style>
