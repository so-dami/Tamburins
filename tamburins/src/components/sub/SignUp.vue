<template>
  <main id="cont">
    <section class="login-client-pg">
      <div class="signUp-client-container">
        <div class="login-title-box">
          <h2 class="login-title-txt">회원가입</h2>
        </div>
        <form action="" class="login-client-form">
          <!-- 성명 -->
          <div>
            <div class="form-label-box">
              <label class="form-label" for="signUpName">이름</label>
            </div>
            <div>
              <input
                type="text"
                id="signUpName"
                class="form-input"
                placeholder="이름 입력"
                autofocus
                @change="
                  (e) => {
                    name = e.target.value;
                  }
                "
              />
            </div>
          </div>
          <!-- 연락처 -->
          <div>
            <div class="form-label-box">
              <label class="form-label" for="signUpPhone">연락처</label>
            </div>
            <div>
              <input
                type="tel"
                id="signUpPhone"
                class="form-input"
                placeholder="핸드폰 번호 입력 (ex. 01012345678)"
                pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}"
                maxlength="14"
                @change="
                  (e) => {
                    phoneChange();
                    phone = e.target.value;
                  }
                "
              />
            </div>
          </div>
          <!-- 이메일 -->
          <div>
            <div class="form-label-box">
              <label class="form-label" for="signUpEmail">이메일</label>
            </div>
            <div>
              <input
                type="email"
                id="signUpEmail"
                class="form-input"
                placeholder="이메일 입력"
                @change="
                  (e) => {
                    email = e.target.value;
                  }
                "
              />
            </div>
          </div>
          <!-- 비밀번호 -->
          <div>
            <div class="form-label-box">
              <label class="form-label" for="signUpPw">비밀번호</label>
            </div>
            <div>
              <input
                type="password"
                id="signUpPw"
                class="form-input"
                placeholder="영어, 숫자, 특수문자 입력(8자리 이상)"
              />
            </div>
          </div>
          <!-- 비밀번호 확인-->
          <div>
            <div class="form-label-box">
              <label class="form-label" for="signUpPwChk">비밀번호 확인</label>
            </div>
            <div>
              <input
                type="password"
                id="signUpPwChk"
                class="form-input"
                placeholder="비밀번호 확인"
                @change="
                  (e) => {
                    password = e.target.value;
                  }
                "
              />
            </div>
          </div>

          <!-- 약관동의 -->
          <div class="policy-check-box">
            <div class="policy-all-check">
              <!-- 모두 동의 -->
              <div class="agree-all">
                <input type="checkbox" name="all-check" id="all-check" @input="allChk()" />
                <label class="chk-label" for="all-check">모두 동의합니다.</label>
              </div>
            </div>
            <!-- 필수 동의 -->
            <div class="policy-each-check">
              <div class="check-field">
                <input type="checkbox" name="policy-age" id="policy-age" @input="eachChk()" />
                <label class="chk-label" for="policy-age">(필수) 본인은 만 14세 미만이 아닙니다.</label>
              </div>
              <div class="check-field">
                <input type="checkbox" name="policy-termsOfUse" id="policy-termsOfUse" @input="eachChk()" />
                <label class="chk-label" for="policy-termsOfUse"
                  >(필수) <a href="https://www.tamburins.com/kr/terms-and-conditions/" target="_blank">이용약관</a>에
                  동의합니다.</label
                >
              </div>
              <div class="check-field">
                <input type="checkbox" name="policy-privacy" id="policy-privacy" @input="eachChk()" />
                <label class="chk-label" for="policy-privacy"
                  >(필수) <a href="https://www.tamburins.com/kr/privacy-policy/" target="_blank">개인정보처리방침</a>에
                  동의합니다.</label
                >
              </div>
              <!-- 선택 동의 -->
              <div class="check-field">
                <input type="checkbox" name="policy-privacy-optional" id="policy-privacy-optional" @input="eachChk()" />
                <label class="chk-label" for="policy-privacy-optional"
                  >(선택)
                  <a href="https://www.tamburins.com/kr/privacy-policy/" target="_blank"
                    >마케팅 목적의 개인정보처리방침</a
                  >에 동의합니다.</label
                >
              </div>
              <div class="check-field">
                <input type="checkbox" name="policy-marketing" id="policy-marketing" @input="eachChk()" />
                <label class="chk-label" for="policy-marketing"
                  >(선택) 탬버린즈에서 제공하는 소식을 SMS, 이메일로 받겠습니다.</label
                >
              </div>
            </div>
          </div>

          <!-- 가입하기 -->
          <div class="standard-btn-box">
            <button class="standard-btn pointer" type="submit" @click="joinClick()">가입하기</button>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      password: '',
      joinSet: [],
      joinGet: [],
    };
  },
  props: {},
  methods: {
    // 연락처에 '-' 추가
    phoneChange() {
      event.target.value = event.target.value
        .replace(/[^0-9]/g, '')
        .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, '$1-$2-$3');
    },

    // 회원가입 버튼 클릭
    joinClick() {
      event.preventDefault();

      let joinData = { name: this.name, phone: this.phone, email: this.email, password: this.password };
      let signUpName = document.querySelector('#signUpName').value;
      let signUpPhone = document.querySelector('#signUpPhone').value;
      let signUpEmail = document.querySelector('#signUpEmail').value;
      let signUpPw = document.querySelector('#signUpPw').value;
      let signUpPwChk = document.querySelector('#signUpPwChk').value;
      let signUpInfo = { name: signUpName, phone: signUpPhone, email: signUpEmail, pw: signUpPw, pwChk: signUpPwChk };

      // 이름 공백 여부 체크
      if (signUpInfo['name'] == '') {
        alert('이름을 입력해 주세요.');
      }

      // 연락처 공백 여부 체크
      else if (signUpInfo['phone'] == '') {
        alert('연락처를 입력해 주세요.');
      }

      // 이메일 공백 여부 체크
      else if (signUpInfo['email'] == '') {
        alert('이메일을 입력해 주세요.');
      }

      // 비밀번호 공백 여부 체크
      else if (signUpInfo['pw'] == '') {
        alert('비밀번호를 입력해 주세요.');
      }

      // 비밀번호 확인 공백 여부 체크
      else if (signUpInfo['pwChk'] == '') {
        alert('비밀번호를 한 번 더 입력해 주세요.');
      } else {
        // 비밀번호 확인
        if (signUpInfo['pw'] !== signUpInfo['pwChk']) {
          alert('비밀번호가 다릅니다. 확인해 주세요.');
        }

        // 공백 아니고, 비밀번호 확인까지 맞을 때
        else {
          let policyAge = document.querySelector('#policy-age');
          let policyTermsOfUse = document.querySelector('#policy-termsOfUse');
          let policyPrivacy = document.querySelector('#policy-privacy');

          // 필수 약관 동의 체크 여부
          if (policyAge.checked == false || policyTermsOfUse.checked == false || policyPrivacy.checked == false) {
            alert('필수 약관에 모두 동의해 주세요.');
          } else if (policyAge.checked == true && policyTermsOfUse.checked == true && policyPrivacy.checked == true) {
            if (localStorage.getItem('join') == null) {
              this.joinSet.push(joinData);
              localStorage.setItem('join', JSON.stringify(this.joinSet));
              // 로그인 페이지로 이동
              window.location.href = 'http://localhost:8080/login';
            } else {
              this.joinGet = JSON.parse(localStorage.getItem('join'));
              if (
                this.joinGet.findIndex((a) => {
                  return a['name'] == this.name && (a['phone'] == this.phone || a['email'] == this.email);
                }) == -1
              ) {
                this.joinGet.push(joinData);
                localStorage.setItem('join', JSON.stringify(this.joinGet));
              } else {
                alert('이미 가입되어 있습니다.');
              }
            }
          }
        }
      }
    },

    // 모두 동의 체크박스 클릭
    allChk() {
      let a = document.querySelectorAll('.policy-each-check input[type="checkbox"]');
      for (let i = 0; i < a.length; i++) {
        if (event.target.checked == true) {
          a[i].checked = true;
        } else {
          a[i].checked = false;
        }
      }
    },

    eachChk() {
      let allChkBox = document.querySelector('.policy-all-check input[type="checkbox"]');
      // let b = document.querySelectorAll('.policy-each-check input[type="checkbox"]');
      if (event.target.checked == false) {
        allChkBox.checked = false;
      }
      
    },
  },
  mounted() {
    // 스크롤 상단 고정
    window.scrollTo(0, 0);
  },
};
</script>
<style>
@import '../../assets/css/sub/signUp.css';
</style>
