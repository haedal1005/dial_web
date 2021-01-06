<template>
    <div class="SignInBox">
      <h1>DIAL</h1>
      <form>
        <input type="text" id="SignInId" placeholder="아이디"><br>
        <input type="password" id="SignInPw" placeholder="비밀번호"><br>
        <input type="submit" id="SignInBtn" value="로그인">
      </form>
      <div>
        <input type="checkbox" id="saveId">
        <label for="saveId">아이디 저장</label>
        <hr>
      </div>
      <div class="search">
        <a href="#">아이디 찾기</a>
        <a href="#">비밀번호 찾기</a>
      </div>
      <div class="SignUp">
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
