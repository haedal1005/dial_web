<template>
<div>
  <h1>게시판 등록</h1>
  <div class="AddWrap">
    <form>
      <table class="tbAdd">
        <colgroup>
          <col width="15%" />
          <col width="*" />
        </colgroup>
        <tr>
          <th>작성자</th>
          <td><input type="text" v-model="name" placeholder="작성자를 입력하세요" /></td>
        </tr>
        <tr>
          <th>제목</th>
          <td><input type="text" v-model="title" placeholder="제목을 입력하세요" /></td>
        </tr>
        <tr>
          <th>내용</th>
          <td><textarea v-model="content" placeholder="내용을 입력하세요"></textarea></td>
        </tr>
        <tr>
          <th>비밀번호</th>
          <td><input type="text" v-model="pw" placeholder="비밀번호를 입력하세요"/></td>
        </tr>
      </table>
    </form>
  </div>
  <div class="btnWrap">
    <a href="javascript:;" @click="fnList" class="btn">목록</a>
    <a href="javascript:;" @click="index !== undefined ? update() : addUser()" class="btnAdd btn">{{index !== undefined ? '수정' : '작성'}}</a>
  </div>
</div>
<!-- <div>
        <input v-model="writer" placeholder="글쓴이"/>
        <input v-model="title" placeholder="제목"/>
        <textarea v-model="content" placeholder="내용"/>
        <button @click="index !== undefined ? update() : write()">{{index !== undefined ? '수정' : '작성'}}</button>
    </div> -->
</template>
<script>
import data from '@/data'
import http from '../../../services/http-common.js'

export default {
  name: 'Create',
  data() {
    const index = this.$route.params.contentId;
    return {
      // data: data,
      userList: [],
      // name: '',
      // title: '',
      // content: '',
      // pw: "",
      index: index,

      // name: index !== undefined ? data[index].writer : "",
      // title: index !== undefined ? data[index].title : "",
      // content: index !== undefined ? data[index].content : "",
      // password: index !== undefined ? "****" : "",
    }
  },
  methods: {
    addUser() {
      if (!this.name) {
        alert("작성자를 입력해 주세요");
      } else if (!this.title) {
        alert("제목을 입력해 주세요");
      } else if (!this.content) {
        alert("내용을 입력해 주세요");
      } else if (!this.pw) {
        alert("비밀번호를 입력해 주세요");
      } else {
      http
        .post("/board", {b_name:this.name, b_title:this.title,
        b_content:this.content, b_pw:this.pw})
        .then(Response => {
          Read.userList = Response.data
        })
        .catch(error => {
          console.log(error);
        });
        // this.name = "", this.title="", this.content="", this.pw="";
        this.$router.push({
          path: '/read'
        })
      }
    },
    fnList() {
      this.$router.push({
        path: '/read'
      })
    },
    write() {
      if (!this.write) {
        alert("글쓴이를 입력해 주세요");
      } else if (!this.title) {
        alert("제목을 입력해 주세요");
      } else if (!this.content) {
        alert("내용을 입력해 주세요");
      } else if (!this.password) {
        alert("비밀번호를 입력해 주세요");
      } else {
        this.data.push({
          writer: this.writer,
          title: this.title,
          content: this.content,
          password: this.password,
        })
        this.$router.push({
          path: '/read'
        })
      }
    },
    update() {
      if (!this.writer) {
        alert("글쓴이를 입력해 주세요");
      } else if (!this.title) {
        alert("제목을 입력해 주세요");
      } else if (!this.content) {
        alert("내용을 입력해 주세요");
      } else if (!this.password) {
        alert("비밀번호를 입력해 주세요");
      } else {
        if(data[this.index].password == this.password){
          data[this.index].writer = this.writer
          data[this.index].title = this.title
          data[this.index].content = this.content
          this.$router.push({
            path: '/read'
          })
        }
        else{
          alert("비밀번호가 다릅니다.")
        }
      }
    }
  }
}
</script>

<style scoped>
.tbAdd {
  border-top: 1px solid #888;
}

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
  display: inline-block;
}

.btnAdd {
  background: #43b984
}

.btnDelete {
  background: #f00;
}
</style>
