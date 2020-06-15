<template>
    <div class="zong">
        <div class="leftDetail">
            <h3>商家团购及优惠</h3>
            <dl class="youhui" v-if="good.length">
                <dt>{{list.length}}款优惠</dt>
                <dd v-for="item in list"
                    :key="item.title"
                >
                    <img src="https://p1.meituan.net/208.126/deal/8b4803f645103f434cf4d9fd20237508843830.jpg@100w_100h_1e_1c" alt="">
                    <div>
                        <div class="title">{{item.title}}</div>
                        <div class="saleNum">已售{{item.saleNum}}</div>
                        <div class="price">
                            <span class="realPrice">
                                <span class="ch">￥</span>
                                {{item.price}}
                            </span>
                            <span class="lastPrice">门店价￥{{item.counterPrice}}</span>
                        </div>
                        <button @click="handleClick(item.title,item.price)">立即抢购</button>
                    </div>
                </dd>
            </dl>
        </div>
        <recommend-cake :cakeList="cake"/>
        <comment :commentNum="commentNum" :comment="commentArr"/>
    </div>
</template>

<script>
import recommendCake from "./recommendCake.vue";
import comment from "./comment.vue";

export default {
    components:{
        recommendCake,
        comment
    },
    props:{
        good:Array,
        cake:Array,
        commentNum:Number,
        commentArr:Array
    },
    data(){
        return {
            list:this.good
        }
    },
    // computed:{
    //     textList(){
    //         let list = [];
    //         list = this.good;
    //         console.log("hhhhhhh:",this.good);
    //         return list;
    //     }
    // },
    created(){
        console.log("aaa==>",this.good);
    },
    watch:{
        good(newVal){
            if(newVal){
                // console.log("接收数据了:",newVal);
                this.list = newVal;
                this.good = newVal;
            }
        }
    },
    methods:{
        handleClick(item,price){
            const isBuy = window.confirm(item+"需要支付"+price+"元","确认购买吗？");
            isBuy?alert("购买成功"):"";
        }
    },
    // beforeRouteEnter(to,from,next){

    // }
}
</script>

<style lang="less" scoped>
.leftDetail{
    width: 950px;
    h3{
        font-size: 20px;
        line-height: 26px;
        margin-bottom: 8px;
    }
    dl{
        margin-bottom: 40px;
        background: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        padding: 16px 20px 20px;
        dt{
            font-size: 16px;
            line-height: 26px;
            font-weight: bold;
        }
        dd{
            padding-bottom: 20px;
            margin-top: 17px;
            img{
                width: 100px;
                height: 100px;
                // float: left;
                cursor: pointer;
                border-radius: 4px;
            }
            >div{
                // float: left;
                position: relative;
                display: inline-block;
                padding: 1px 0 0 20px;
                width: 788px;
                button{
                    width: 120px;
                    height: 40px;
                    font-size: 14px;
                    background-color: #f90;
                    text-align: center;
                    line-height: 40px;
                    color: #fff;
                    // display: inline-block;
                    margin-top: 30px;
                    border-radius: 100px;
                    border:none;
                    outline:none;
                    position:absolute;
                    right:0;
                    top:0;
                    cursor: pointer;
                }
                .title{
                    font-size: 16px;
                    line-height: 22px;
                    cursor: pointer;
                }
                .saleNum{
                    font-size: 12px;
                    color: #666;
                    line-height: 17px;
                    margin: 1px 0 22px;
                    cursor: pointer;
                }
                .price{
                    font-size: 30px;
                    color: #f60;
                    cursor: pointer;
                    .realPrice{
                        font-size: 30px;
                        color: #f60;
                        cursor: pointer;
                        .ch{
                            font-weight: 400;
                            font-size: 14px;
                            margin-right: -9px;
                        }

                    }
                    .lastPrice{
                        color: #999;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
            }
            &:not(:last-of-type){
                border-bottom: 1px solid #e5e5e5;
            }
        }
    }
}
</style>>
