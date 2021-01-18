<template>
<header>
  <div id="headerArea">
    <div id="logo">
      <h1><a href="/">DIAL</a></h1>
    </div>
    <nav id="topMenu">
      <ul>
        <li class="topMenuLi"><a class="MenuLink" href="#">게시판</a>
          <ul class="submenu">
            <li><a class="subMenuLink" href="#" @click="read">공지사항</a></li>
            <li><a class="subMenuLink" href="#">자유게시판</a></li>
          </ul>
        </li>
        <li class="topMenuLi"><a class="MenuLink" href="#">출석체크</a></li>
        <li class="topMenuLi"><a class="MenuLink" href="#">룰렛</a></li>
      </ul>
    </nav>
    <div id="join">
      <button id="btnJoin" @click="signin">로그인/회원가입</button>
    </div>
  </div>
</header>
</template>

<script>
import data from '@/data'

export default {
  name: 'Read',
  data() {
    return {
      data: data
    }
  },
  methods: {
    read() {
      this.$router.push({
        path: '/read'
      })
    },
    signin() {
      this.$router.push({
        path: '/SignIn'
      })
    }
  }
}
</script>

<style>
@import '../../assets/style/header.css';
</style>
