<template>
    <div>
        <table class="tbAdd">
            <tr>
                <td class="re_content">내용</td>
                <td class="re_title">제목</td>
                <td class="re_writer">글쓴이</td>
            </tr>
            <tr :key="index" v-for="(value, index) in data" @click="detail(index)">
                <td>{{value.content}}</td>
                <td class="value_title">{{value.title}}</td>
                <td>{{value.writer}}</td>
            </tr>
        </table>
        <div class="btnWrap">
        <a href="javascript:;" @click="write" class=" btnAdd btn">글쓰기
        </a>
        </div>
    </div>
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
        write(){
            this.$router.push({
                path: 'create'
            })
        },
        detail(index){
            this.$router.push({
                name: 'Detail',
                params: {
                    contentId: index
                }
            })
        },
        m_over(){
            text-decora
        }
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
	.btnWrap a{margin:0 10px; float:right;}
    .btnAdd {background:#43b984}
    
</style>