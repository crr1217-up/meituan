<template>
    <div class="changeCity">
       <el-row>
           <select-city />
       </el-row>
       <el-row>
           <hot-city :city="hotCity"/>
       </el-row>
       <el-row>
           <hot-city :city="recentCity"/>
       </el-row>
       <el-row>
           <city-list />
       </el-row>
    </div>
</template>

<script>
import selectCity from "@/components/select.vue";
import HotCity from "@/components/hotCity.vue";
import CityList from "@/components/cityChar.vue"

export default {
    components:{
        selectCity,
        HotCity,
        CityList
    },
    data(){
        return {
            hotCity:"热门城市",
            recentCity:"最近访问"
        }
    }
}
</script>

<style lang="less">
.changeCity{
    width: 1190px;
    box-sizing: border-box;
    margin: 20px auto 0;
    background-color: #fff;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    min-height: 1000px;
    padding: 20px;
    .el-row:not(:last-of-type){
        border-bottom: 1px solid #E5E5E5;
    }
}
</style>