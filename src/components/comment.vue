<template>
    <div class="comment">
        <h3>{{commentNum}}条网友点评</h3>
        <dl>
            <dd v-for="item in comment"
                :key="item.evaluate"
            >
                <img class="user" :src="item.image" alt="">
                <div class="info">
                    <p class="name">{{item.username}}</p>
                    <p class="rate">
                        <el-rate
                        v-model="item.rate"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}">
                        </el-rate>
                    </p>
                    <p class="val">{{item.evalaute}}</p>
                    <p class="pics">
                        <img v-for="pic in item.pics" :key="pic"
                        :src="pic" alt="">
                    </p>
                </div>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    props:{
        commentNum:Number,
        comment:Array
    }
}
</script>

<style lang="less" scoped>
.comment{
    margin-bottom: 40px;
    width:950px;
    h3{
        font-size: 20px;
        line-height: 26px;
    }
    dl{
        margin-top: 8px;
        background: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        padding: 0 20px 40px;
        color: #666;
        dd{
            padding: 30px 0 0;
            position: relative;
            .user{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                position: absolute;
                top: 34px;
                left: 6px;
            }
            .info{
                display: inline-block;
                padding-left: 20px;
                margin-left: 71px;
                width: 792px;
                .name{
                    font-size: 16px;
                    color: #222;
                    line-height: 22px;
                    margin-bottom: 1px;
                }
                .rate{
                    line-height: 14px;
                    margin-top: 3px;
                    height: 16px;
                    font-size: 11px;
                }
                .val{
                    font-size: 14px;
                    line-height: 20px;
                    padding-top: 13px;
                }
                .pics{
                    font-size: 14px;
                    line-height: 20px;
                    // padding-top: 13px;
                    padding-top: 10px;
                    position: static;
                    background: #fff;
                    overflow: hidden;
                    cursor: pointer;
                    img{
                        width: 140px;
                        height: 140px;
                        margin-right: 0;
                        border: 10px solid #fff;
                    }
                }
                &:not(:last-of-type){
                    border-bottom: 1px solid #E5E5E5;
                }
            }
        }
    }
}
</style>