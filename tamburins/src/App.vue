<template>
  <div>
    Welcome to the Tamburins!
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Roboto:wght@100;300;400;500;700;900&display=swap');

/* 
  영문 포인트
  font-family: 'Abhaya Libre', serif;

  영문, 한글 기본
  font-family: 'Noto Sans KR', sans-serif;
*/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html,
body,
ul,
ol,
li,
h1,
h2,
h3,
h4,
div,
span,
p,
a {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
  /* color: #ff3901; */
}

/* ul, ol 설정 */
ul,
ol,
li,
a {
  list-style: none;
  text-decoration: none;
  /* color: #ff3901; */
}
</style>
