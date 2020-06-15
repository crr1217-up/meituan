<template>
    <div class="centerBottom">
        <dl class="menu" :class="res.class">
            <dt>{{res.title}}</dt>
            <dd 
                :class="{active:type==item.type}"
                v-for="item in res.lists"
                :key="item.type"
                @mouseenter="changeType(item.type)"
            >{{item.text}}</dd>
        </dl>
        <dl class="items">
            <dd v-for="item in list[type]"
                :key="item.title"
            >
                <router-link :to="{name:'productRecommend',params:{name:item.title}}">
                    <div class="image">
                        <img :src="item.image">
                    </div>
                    
                    <div class="info">
                        
                        <p>{{item.subTitle}}</p>
                        <p>{{item.title}}</p>
                        <p>{{item.address}}</p>
                        <p>
                            <span class="symbol">￥</span>
                            <span class="yuan">{{item.price}}</span>
                            <span class="priceDes">起</span>
                        </p>
                    </div>
                </router-link>
            </dd>
        </dl>
    </div>
</template>

<script>
import api from "@/http.js";
export default {
    props:{
        res:Object,
        likeList:Array,
        
    },
    data(){
        return {
            list:{},
            
            type:"all"
        }
    },
    created(){
       
        const self = this;
      
        api.getBottomData().then(res=>{
            self.list=res.data.data;
            // console.log(self.list);
        })
        
    },
    // mounted(){
    //     console.log(this.res.type);
    //     this.type=this.res.type;
    // },
    methods:{
        changeType(kind){
            this.type=kind;
            console.log(this.list);
        }
    }
}
</script>

<style lang="less">
.centerBottom{
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    .menu{
        display: flex;
        background: linear-gradient(to right, rgb(88, 174, 221) 2%, rgb(66, 191, 205) 97%) rgb(88, 174, 221);
        width: 100%;
        height: 44px;
        line-height: 44px;
        box-sizing: border-box;
        font-size: 14px;
        color: #fff;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        &.movie{
            background: linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%) rgb(243, 182, 74);;
        }
        dt{
            font-size: 18px;
            margin-left: 13px;
            margin-right: 10px;
            padding: 0 5px;
            position: relative;
            cursor: pointer;
        }
        dd{
            padding: 0 5px;
            position: relative;
            cursor: pointer;
            text-transform: uppercase;
            &.active::after{
                content:"";
                position:absolute;
                top: 37px;
                left:50%;
                transform:translateX(-50%);
                width:2px;
                height:0;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-bottom: 7px solid #fff;
            }
        }
    }
    .items{
        display:flex;
        background-color: #fff;
        border: 1px solid #E5E5E5;
        border-top: 0;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        max-height: 758px;
        padding: 10px 10px 20px;
        width: 100%;
        box-sizing: border-box;
        overflow-y: hidden;
        text-align: left;
        dd{
            width:20%;
            height:246px;
            padding:10px;
            box-sizing: border-box;
            transition: background-color 500ms;
            border-radius: 4px;
            &:hover{
                background: #F4F4F4;
            }
            .image {
                width: 100%;
                height:120px;
                border-radius: 4px;
                overflow: hidden;
                // padding-bottom: 56.25%;
                // display: block;
                img{
                    width:100%;
                    height:120px;
                    font-size: 0;
                }
            }
            .info{
                position: relative;
                margin-top: 10px;
                p{
                    font-size: 16px;
                    line-height: 22px;
                    width: 100%;
                    height: 22px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    color: #222222;
                    &:nth-of-type(1){
                        margin: 0;
                        font-weight: 500;
                    }
                    &:nth-of-type(2){
                        height:24px;
                        font-size: 12px;
                        color: #999;
                    }
                    &:nth-of-type(3){
                        font-size: 12px;
                        color: #999999;
                        width: 100%;
                        height: 18px;
                        line-height: 18px;
                        overflow: hidden;
                        margin-top: 4px;
                    }
                    &:nth-of-type(4){
                        color: #FF6600;
                        height:28px;
                        line-height: 28px;
                        .symbol{
                            font-size: 14px;
                            font-weight: 700;
                        }
                        .yuan{
                            letter-spacing: -0.5px;
                            font-size: 22px;
                        }
                        .priceDes{
                            font-size: 12px;
                            margin-left: 4px;
                            font-weight: 700;
                        }
                    }
                }
            }
        }
        
    }
}
</style>