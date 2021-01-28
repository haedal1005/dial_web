<template>
<div class="SignUpContent">
  <h1>회원 가입</h1>
  <form id="SignUpForm">
    <div class="inputArea" id="nameArea">
      <input type="text" id="name" class="inputTag" placeholder="이름">
    </div>
    <div class="inputArea" id="idArea">
      <input type="text" id="id" class="inputTag" placeholder="아이디">
    </div>
    <div class="inputArea" id="pwArea">
      <input type="password" id="pw" class="inputTag" placeholder="비밀번호">
    </div>
    <div class="inputArea" id="pwArea">
      <input type="password" id="pw" class="inputTag" placeholder="비밀번호 재확인">
    </div>
    <input type="submit" id="SignUpBtn" value="가입하기">
  </form>
</div>
</template>

<script>
export default {
}
</script>

<style>
@import '../../../assets/style/signUp.css';
</style>
