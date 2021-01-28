<template>
<div class="SignInContent">
  <h1>회원 로그인</h1>
  <form id="SignInForm">
    <div class="inputArea" id="idArea">
      <input type="text" id="id" class="inputTag" placeholder="아이디">
    </div>
    <div class="inputArea" id="pwArea">
      <input type="password" id="pw" class="inputTag" placeholder="비밀번호">
    </div>
    <input type="submit" id="SignInBtn" value="로그인">
  </form>
  <div class="findArea">
    <a href="#">아이디 찾기</a>
    <span class="bar">|</span>
    <a href="#">비밀번호 찾기</a>
    <span class="bar">|</span>
    <a href="#" @click="SignUp">회원가입</a>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    SignUp() {
      this.$router.push({
        path: '/SignUp'
      })
    }
  }
}
</script>

<style>
@import '../../../assets/style/signin.css';
</style>
