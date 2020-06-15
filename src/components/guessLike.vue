<template>
<dl class="recommendPro">
    <dt>猜你喜欢</dt>
    <dd v-for="item in recoList" :key="item.title">
        <router-link tag="div" :to="{name:'productRecommend',params:{name:item.title}}">
            <div class="img">
                <img :src="item.imgUrl">
            </div>
            <p class="title">{{item.title}}</p>
            <p class="score">
                <el-rate
                v-model="item.score"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
                </el-rate>
                <span class="comment">{{item.commentNum}}条评论</span>
            </p>
            <p class="area">{{item.area}}</p>
            <p class="price">
                <span class="ch">￥</span> 
                <span class="priNum">{{item.price}}</span>
                <span class="aa">起</span> 
            </p>
        </router-link>
    </dd>
</dl>
</template>

<script>
import api from "@/http.js";

export default {
    data(){
        return {
            recoList:[],
            score:5
        }
    },
    created(){
        const self=this;
        api.getRecommend().then(res=>{
            console.log("recommend:",res.data.data);
            // self.recoList = res.data.data;
            self.recoList = res.data.data.map(item=>{
                const obj={
                    title:item.title,
                    imgUrl:"https://p0.meituan.net/msmerchant/b14ad37ac42c07628ce8a6730506ace9151853.jpg",
                    score:JSON.parse(item.score),
                    price:item.lowPrice,
                    commentNum:item.commentNum,
                    area:item.areaName
                };
                return obj;
            })
            console.log("---->",this.recoList);
            
        });
    },
}
</script>
<style lang="less" scoped>
.recommendPro{
        position:absolute;
        right:41px;
        top:253px;
        margin-top: 10px;
        background-color: #fff;
        border: 1px solid #E5E5E5;
        border-radius: 4px;
        padding: 16px 20px 0;
        width: 230px;
        max-height: 711px;
        overflow-y: scroll;
        box-sizing: border-box;
        &::-webkit-scrollbar { width: 0 !important }
        dt{
            margin-bottom: 12px;
            font-size: 16px;
            color: #333333;
            line-height: 22px;
            font-weight: 500;
        }
        dd{
            margin-bottom: 20px;
            display: inline-block;
            width: 190px;
            // width: 100%;
            box-sizing: border-box;
            .img{
                height: 0;
                width: 190px;
                padding-bottom: 56.25%;
                // background-color: #f4f4f4;
                // // background-image: url(//p0.meituan.net/travelcube/214b841….png);
                // background-size: cover;
                // background-position: 50% 50%;
                border-radius: 4px;
                overflow: hidden;
                img{
                    width: 100%;
                    font-size: 0;
                }
            }
            .title{
                // position: relative;
                margin-top: 10px;
                font-size: 14px;
                color: #222222;
                line-height: 20px;
                width: 100%;
                // margin: 0;
                font-weight: 500;
            }
            .comment{
                font-size: 12px;
                color: #999;
                height: 24px;
                line-height: 24px;
                // margin-left: 10px;
            }
            .area{
                font-size: 12px;
                color: #999999;
                width: 100%;
                height: 18px;
                line-height: 18px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-top: 4px;
            }
            .price{
                color: #FF6600;
                .ch{
                    font-size: 14px;
                    font-weight: 700;
                }
                .priNum{
                    font-size: 22px;
                    letter-spacing: -0.5;
                }
                .aa{
                    font-size: 12px;
                    margin-left: 4px;
                    font-weight: 700;
                }
            }
        }
    }
</style>