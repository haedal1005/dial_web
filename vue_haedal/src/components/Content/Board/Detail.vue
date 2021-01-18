<template>
    <div>
        <h2 class="de_title">{{data.title}}</h2>
        <div class="de_writer">{{data.writer}}</div>
        <div class="de_content">{{data.content}}</div>
        <div class="btnWrap">
            <a href="javascript:;" @click="updateData" class="btnAdd btn">수정</a>
            <a href="javascript:;" @click="deleteData" class="btn">삭제</a>
        </div>
    </div>
</template>

<script>
import data from '@/data'
export default {
    name: 'Detail',
    data(){
        const index = this.$route.params.contentId
        return{
            data: data[index],
            index: index,
        }
    },
    methods: {
        deleteData(){
            data.splice(this.index, 1)
            this.$router.push({
                path: '/read'
            })
        },
        updateData(){
            this.$router.push({
                name: 'Create',
                params: {
                    contentId: this.index
                }
            })
        }
    }
}
</script>
<style>
    .de_title{text-align: left; height: 20px;}
    .de_writer{text-align: left;}
    .btnWrap{text-align:center; margin:20px 0 0 0;}
    .btnWrap a{margin:0 10px; display:inline-block;}
    .btn{padding:10px; background:#34445c; color:#fff;}
    .btnAdd {background:#43b984}
    .btnDelete{background:#f00;}
</style>