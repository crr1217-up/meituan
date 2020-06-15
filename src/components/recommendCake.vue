<template>
    <div class="recommendCake">
        <h3>推荐菜</h3>
        <div>
            <span v-for="cake in cakeList"
                :key="cake"
            >{{cake}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        cakeList:Array
    },
}
</script>

<style lang="less" scoped>
.recommendCake{
    width: 950px;
    overflow: hidden;
    margin-bottom: 40px;
    h3{
        font-size: 20px;
        line-height: 26px;
        margin-bottom: 8px;
    }
    >div{
        border: 1px solid #e5e5e5;
        background-color: #fff;
        padding: 33px 32px 26px;
        border-radius: 4px;
        span{
            display: inline-block;
            // float: left;
            margin: 0 20px 19px 0;
            font-size: 16px;
            line-height: 20px;
            color: #333;
        }
    }
}   
</style>