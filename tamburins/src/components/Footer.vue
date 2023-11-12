<template>
  <footer id="footer">
    <div class="footer">
      <div class="footer-wrap">
        <div class="company-info">
          주&#41;아이아이컴바인드 | 사업자등록번호: 119-86-38589 | 대표자: 김한국 | 서울특별시 마포구 어울마당로5길 41 |
          대표번호: 1644-1246 | 이메일: <a href="mailto:cs@tamburins.com">cs@tamburins.com</a>
          <br />
          개인정보 보호 책임자: 정태호 | 호스팅 서비스 사업자: Aws | 통신판매업신고: 제 2014-서울마포-1050 호 &#40;<a
            href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1198638589"
            target="_blank"
            >사업자정보확인</a
          >&#41; | <a href="#">개인정보처리방침</a> | <a href="#">이용약관</a>
        </div>
        <div class="guarantee-payment"></div>
        <ul class="sns">
          <li class="kakaotalk">
            <a href="https://pf.kakao.com/_RkqIj" target="_blank">Kakaotalk</a>
          </li>
          <li class="instagram">
            <a href="https://www.instagram.com/tamburinsofficial" target="_blank">Instagram</a>
          </li>
          <li class="weibo">
            <a href="https://weibo.com/tamburinsofficial" target="_blank">Weibo</a>
          </li>
          <li class="facebook">
            <a href="https://www.facebook.com/tamburinsofficial/" target="_blank">Facebook</a>
          </li>
        </ul>
        <div class="copyright">
          <span>&copy; 탬버린즈</span>
          <span>대한민국</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>

<style>
.footer a {
  color: #535353;
}

.footer-wrap {
  padding: 50px;
  font-size: 10px;
  color: #535353;
  text-align: center;
  line-height: 15px;
}

.company-info a {
  text-decoration: underline;
}

.sns {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.copyright {
  margin-top: 20px;
}

.copyright > span {
  margin: 0 6px;
}
</style>
