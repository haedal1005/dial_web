<template>
    <div>
        <h2 class="de_title">{{userList.b_title}}</h2>
        <div class="de_writer">{{userList.b_name}}</div>
        <div class="de_content">{{userList.b_content}}</div>
        <div class="btnWrap">
            <a href="javascript:;" @click="updateData" class="btnAdd btn">수정</a>
            <a href="javascript:;" @click="deleteData(userList.b_id)" class="btn">삭제</a>
        </div>
    </div>
</template>

<script>
import data from '@/data'
import http from "../../../services/http-common.js"
export default {
    name: 'Detail',
    data(){
        return{
            userList: [],
            // name: '',
            // title: '',
            // content: '',
            // pw: '',

            // updateId:'',
            // updateName: '',
            // updateTitle: '',
            // updateContent: '',
            // data: data[index],
        }
    },
    methods: {
        getUserOne(id) {
            http
                .get(`/board/${id}`)
                .then(Response => (this.userList = Response.data))
                .catch(error => {
                    console.log(error);
                });
        },
        deleteUser(id) {
            http
                .delete(`/board/${id}`)
                .then(Response => {
                    this.userList = Response.data
                })
                .catch(error => {
                    console.log(error);
                });
        },
        deleteData(){
            data.splice(this.id, 1)
            this.$router.push({
                path: '/read'
            })
        },
        updateData(){
            this.$router.push({
                name: 'Create',
                params: {
                    contentId: index
                }
            })
        }
    },

    created() {
        const id = this.$route.params.contentId;
        if(id == undefined) {
            alert("오류입니다.");
            this.$router.push('/read');
        }
    },
    mounted() {
        const id = this.$route.params.contentId;
        this.getUserOne(id);
    }
}
</script>
<style>
    .de_title{text-align: left; height: 20px;}
    .de_writer{text-align: left; margin: 10px;}
    .btnWrap{text-align:center; margin:20px 0 0 0;}
    .btnWrap a{margin:0 10px; display:inline-block;}
    .btn{padding:10px; background:#34445c; color:#fff;}
    .btnAdd {background:#43b984}
    .btnDelete{background:#f00;}
</style>