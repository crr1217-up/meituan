<template>
    <div class="product">
        <div class="leftImg">
            <img :src="meta.image" :alt="meta.title">    
        </div> 
        <div class="rightInfo">
            <div class="mainInfo">
                <p class="title">{{meta.title}}</p>
                <p class="score">
                    <el-rate
                    v-model="meta.score"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                    </el-rate>
                    <span class="scoreDes" v-if="meta.score > 4.5">很好</span>
                    <span class="scoreDes" v-else-if="meta.score > 4">好</span>
                    <span class="scoreDes" v-else-if="meta.score > 3.5">不错</span>
                    <span class="scoreDes" v-else-if="meta.score > 3">一般</span>
                    <span class="scoreDes" v-else>很差</span>
                    <span class="scoreNum">{{meta.score}}分</span>
                    <span class="comment">{{meta.commentNum}}人评论</span>
                </p>
                <p class="area">
                    <!-- <span class="tab" v-for="(t,i) in meta.tab" :key="t">{{t + i < (meta.tab.length-1)?'|':''}}</span> -->
                    <span class="areaTab" v-for="v in meta.tab" :key="v">{{v +'|'}}</span>
                    <span class="address">{{meta.address}}</span>
                </p>
                <p class="price">人均￥{{meta.avgPrice}}</p>
            </div>
            <router-link tag="div" v-for="item in meta.dealItems" 
                :key="item.title" :to="{name:'productRecommend',params:{name:meta.title}}">
                <div class="recommend">
                    <div class="recoItem">{{item.title}}</div>
                    <p class="price2">
                        <span class="priceNum">￥{{item.price}}</span>
                        <span class="counterNum">门市价{{item.counterPrice}}</span>
                        <span class="saleNum">已售{{item.saleNum}}</span>
                    </p>
                </div>
            </router-link>
        </div>
        
    </div>
</template>

<script>

export default {
    props:{
        meta:Object
    },
    
    
}
</script>

<style lang="less">
.product{
    padding: 20px 0 16px;
    min-height: 125px;
    border-top: 1px solid #E5E5E5;
    .leftImg{
        background-color: #f4f4f4;
        position: absolute;
        height: 125px;
        width: 220px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 4px;
        }
    }
    .rightInfo{
        margin-left: 220px;
        padding-left: 20px;
        font-size: 12px;
        color: #666;
        .mainInfo{
            position: relative;
            padding-bottom: 10px;
            border-bottom: 1px dashed #E5E5E5;
            .title{
                font-weight: 500;
                font-size: 16px;
                color: #333;
                display: block;
            }
            .score{
                margin-top: 6px;
                .el-rate{
                    margin-left: -2px;
                    height: 20px;
                    line-height: 20px;
                    margin-right: 10px;
                }
                .scoreDes{
                    margin-right: 10px;
                }
                .comment{
                    color: #FF9900;
                }
            }
            .area{
                margin-top: 6px;
                .areaTab{
                    margin-right: 10px;
                    max-width: 110px;
                    // display: block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .address{
                    margin-right: 10px;
                    max-width: 460px;
                }
            }
            .price{
                line-height: 20px;
                margin-top: 6px;
                // color: #FF6600;
                font-size: 12px;
                color: #666;
            }

        }
        .recommend{
            margin-bottom: -10px;
            margin-top: 10px;
            width: 100%;
            display: block;
            margin-left: -10px;
            padding: 6px 10px 8px;
            cursor: pointer;
            transition: background-color 200ms;
            &:hover{
                background-color: #F8F8F8;
                border-radius: 4px;
                .recoItem{
                    color: #FE8C00;
                }
            }
            .priceNum{
                font-size: 15px;
                color: #ff6600;
                margin-right: 10px;
            }
            .counterNum{
                font-size: 12px;
                color: #999;
                margin-right: 10px;
            }
            .saleNum{
                font-size: 12px;
                color: #999;
            }
        }
    }
}
</style>