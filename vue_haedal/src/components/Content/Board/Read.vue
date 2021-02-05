<template>
    <div>
        <table class="tbAdd">
            <tr>
                <td class="re_content">번호</td>
                <td class="re_title">제목</td>
                <td class="re_writer">글쓴이</td>
            </tr>
            <tr :key="i" v-for="i in userList.length" @click="detail(userList[i-1].b_id)">
                <td>{{ userList[i-1].b_id }}</td>
                <td class="value_title">{{ userList[i-1].b_title }}</td>
                <td>{{ userList[i-1].b_name }}</td>
            </tr>
        </table>
        <div class="btnWrap">
        <p><a href="javascript:;" @click="write" class=" btnAdd btn">글쓰기</a></p>
        </div>
    </div>
</template>
<script>
import http from "../../../services/http-common.js"

export default {
    name: 'Read',
    // beforeRouteEnter('Read', 'Create', )
    data() {
        return {
            userList: [],
            // name: '',
            // title: '',
            // content: '',
            // pw: '',

            // updateId:'',
            // updateName: '',
            // updateTitle: '',
            // updateContent: '',
        }
    },
    methods: {
        getRead() {
            http
                .get("/board")
                .then(Response => (this.userList = Response.data))
                .catch(error => {
                    console.log(error);
                });
        },
        write(){
            this.$router.push({
                path: 'read/create'
            })
        },
        detail(id){
            // console.log(index);
            this.$router.push({
                name: 'Detail',
                params: {
                    contentId: id
                }
            })
        },
        m_over(){
            text-decora
        },
        },
        mounted() {
            console.log("호출");
            this.getRead();
        }
}
</script>

<style scoped>
    .tbAdd td{border-bottom:1px solid #eee; padding:5px 0;}
    .tbAdd td{box-sizing:border-box; border-left:1px solid #eee;}
    .value_title:hover{text-decoration:underline; font-weight: bold;}
    .re_content{width: 10%;}
    .re_title{width: 70%;}
    .re_writer{width: 20%;}
    .btnWrap{text-align:center; margin:20px 0 0 0;}
	.btnWrap a{margin:0 10px; float:right; color:#eee;}
    .btnAdd {background:#43b984;}
    
</style>