<template>
<div class="loginbox">
  <h1>DIAL</h1>
  <form>
    <input type="text" id="SignInId" placeholder="아이디" name="username"><br>
    <input type="password" id="SignInPw" placeholder="비밀번호" name="password">
    <input type="submit" id="SignInbtn" value="로그인">
  </form>
  <div class="chk">
    <input type="checkbox" id="idchk">
    <label for="idchk">아이디 저장</label>
  </div>
  <div class="search">
    <span class="text">·아이디 또는 비밀번호를 잊으셨나요?</span>
    <a href="#">아이디 찾기</a>
    <a href="#">비밀번호 찾기</a>
  </div>
  <div class="btnwrap">
    <a href="#">회원가입</a>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style>
@import '../../assets/style/signin.css';
</style>
