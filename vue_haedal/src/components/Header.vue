<template>
<div id="Header">
  <div id="Logo">
    <h1><a href="#">DIAL</a></h1>
  </div>
  <nav id="Nav">
    <a href="#" id="Board">게시판</a>
    <a href="#" id="Attendance">출석체크</a>
    <a href="#" id="Roulette">룰렛</a>
  </nav>
  <div id="Join">
    <a href="#">로그인/회원가입</a>
  </div>
</div>
</template>

<script>
</script>

<style>
#Header {
  background: white;
  display: grid;
  grid-template-areas: 'logo nav join';
}

#Logo {
  grid-area: logo;
  padding-left: 1vw;
  margin-left: 15vw;
}

#Nav {
  grid-area: nav;
  display: grid;
  grid-template-areas: 'board attendance roulette';
  padding-top: 4vh;
}

#Join {
  grid-area: join;
  text-align: right;
  padding-top: 1vh;
  padding-right: 1vw;
  margin-right: 15vw;
}

#Board {
  grid-area: board;
}

#Attendance {
  grid-area: attendance;
}

#Roulette {
  grid-area: roulette;
}
</style>
