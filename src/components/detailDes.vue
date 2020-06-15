<template>
    <div class="detailDes">
        <div class="leftInfo">
            <h2>{{good.title}}</h2>
            <p class="scorePrice">
                <el-rate
                v-model="good.score"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
                </el-rate>
                <span class="price">
                    人均￥{{good.avgPrice}}
                </span>
            </p>
            <div class="middleInfo">
                <p class="address">地址：{{good.address}}</p>
                <p class="phone">电话：{{good.phone}}</p>
                <p class="time">营业时间：{{good.businessTime}}</p>
            </div>
            <div class="icon">
                <div class="wifi" v-for="se in good.service"
                    :key="se"
                >
                    <span class="el-icon-star-off"></span>
                    <span class="des">{{se}}</span>
                </div>
                
            </div>
        </div>
        <div class="rightPic">
            <img :src="good.imgUrl" :alt="good.title">
            <!-- <div class="imgList"></div> -->
        </div>
    </div>
</template>

<script>
export default {
    props:{
        good:Object
    },
    data(){
        return {
            score:3.5
        }
    },
    created(){
        console.log("aaaaa=",this.good);
    }
}
</script>

<style lang="less">
.detailDes{
    font-size: 12px;
    color: #666;
    height:251px;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 20px 33px;
    border: 1px solid #e5e5e5;
    box-shadow: 0 5px 14px 0 rgba(0,0,0,.1);
    .leftInfo{
        float:left;
        width: 748px;
        padding-right: 20px;
        h2{
            font-size: 26px;
            line-height: 37px;
        }
        .scorePrice{
            font-size: 14px;
            height: 14px;
            margin: 6px 0 17px;
            // border-bottom:1px solid #e5e5e5;
            .el-rate{
                display: inline-block;
            }
            .price{
                display: inline-block;
                margin-left: 6px;
            }
        }
        .middleInfo{
            border-top: 1px solid #e5e5e5;
            border-bottom: 1px solid #e5e5e5;
            padding: 16px 0 11px;
            p{
                font-size: 14px;
                line-height: 20px;
                margin-bottom: 10px;
            }

        }
        .icon{
            padding-top: 20px;
            .wifi{
                margin-right: 16px;
                line-height: 17px;
                margin: auto auto 11px;
                font-size: 24px;
                position: relative;
                .el-icon-star-off{
                    margin-left: 8px;
                }
                .des{
                    position: absolute;
                    bottom: -25px;
                    left: 20px;
                    transform:translateX(-50%);
                    font-size: 12px;
                    color: #666;
                }
                // height: 24px;
                // border-radius: 0;

            }
        }
    }
    .rightPic{
        float: left;
        width: 380px;
        height: 214px;
        overflow: hidden;
        cursor: pointer;
        img{
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 4px;
        }
    }
}
</style>