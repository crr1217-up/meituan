<template>
    <el-container >
        <el-header style="height:197px;padding:0">
            <m-header />
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>
            <m-footer />
        </el-footer>
    </el-container>
</template>

<script>
import MHeader from "@/components/myHeader.vue";
import MFooter from '@/components/myFooter.vue';
export default {
    components:{
        MHeader,
        MFooter
    }
}
</script>

<style scoped>
.el-container{
    background-color:#f8f8f8;
}
.el-main{
    overflow: visible;
    padding-top:10px;
    /* margin-top:10px; */
}
</style>