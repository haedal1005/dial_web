<template>
<div id="mainContent">
  <div id="Content1"><a href="#">1번 글</a></div>
  <div id="Content2"><a href="#">2번 글</a></div>
  <div id="Content3"><a href="#">3번 글</a></div>
  <div id="Content4"><a href="#">4번 글</a></div>
  <div id="Content5"><a href="#">5번 글</a></div>
</div>
</template>
<script>
export default {

}
</script>

<style>
#mainContent {
  display: grid;
  grid-gap: 10px;
  grid-template-areas:
    'content1 content1 content1'
    'content2 content3 content3'
    'content4 content4 content5';
  background: white;
}

#Content1 {
  grid-area: content1;
  background: #f1f1f1;
}

#Content2 {
  grid-area: content2;
  background: #f1f1f1;
}

#Content3 {
  grid-area: content3;
  background: #f1f1f1;
}

#Content4 {
  grid-area: content4;
  background: #f1f1f1;
}

#Content5 {
  grid-area: content5;
  background: #f1f1f1;
}

@media screen and (max-width: 1000px) {
  #mainContent {
    grid-gap: 5px;
    grid-template-areas:
      'content1'
      'content2'
      'content3'
      'content4'
      'content5';
  }
}
</style>
