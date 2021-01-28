<template>
<div id="app">
  <Header />
  <div id="variable">
    <router-view />
  </div>
  <Footer />
</div>
</template>

<script>
import Header from "@/components/Header/Header.vue"
import Footer from "@/components/Footer/Footer.vue"

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#variable {
  width: 65vw;
  height: 85vh;
  margin: auto;
  background-color: #fff;
}
@media screen and (max-width: 1000px) {
  #variable {
    width: 100vw;
  }
}

#app {
  background-color: #E6E6E6;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  color: #43b984;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.wrap {
  width: 100%;
}

.container {
  width: 800px;
  margin: 0 auto;
}

a {
  text-decoration: none;
}

a:visited{
  color:#646464;
}

.btn {
  padding: 10px;
  background: #34445c;
  color: #fff;
}

.tbAdd {
  border-top: 1px solid #888;
}

/* ----------------------------------------------------------------------------- */
.tbAdd th {
  border-bottom: 1px solid #eee;
  padding: 5px 0;
  color: #43b984;
}

.tbAdd td {
  border-bottom: 1px solid #eee;
  padding: 5px 0;
}

.tbAdd td {
  padding: 10px 10px;
  box-sizing: border-box;
  border-left: 1px solid #eee;
}

.tbAdd td input {
  width: 100%;
  min-height: 30px;
  box-sizing: border-box;
  padding: 0 10px;
}

.tbAdd td textarea {
  width: 100%;
  min-height: 300px;
  padding: 10px;
  box-sizing: border-box;
}

.btnWrap {
  text-align: center;
  margin: 20px 0 0 0;
}

.btnWrap a {
  margin: 0 10px;
}

.btnAdd {
  background: #43b984;
  padding: 10px;
}

.btnDelete {
  background: #f00;
}
</style>
