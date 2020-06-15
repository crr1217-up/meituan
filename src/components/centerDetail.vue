<template>
	<div class="centerDetail">
		<dl>
			<dd v-for="menu in menuTitle" :key="menu">{{ menu }}</dd>
		</dl>
		<el-row :gutter="20">
			<el-col id="slidePic" style="width:550px;padding:0;margin-left:10px;">
				<Slider />
			</el-col>
			<span>
				<div class="m-life-pic"></div>
			</span>
            <div class="userInfo">
                <div class="img">
                    <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
                </div>
                <p>hi~你好!</p>
                <template v-if="!userName">
                    <router-link :to="{name:'registor'}"><button>注册</button></router-link>
                    <router-link :to="{name:'login'}"><button>立即登录</button></router-link>
                </template>
                <template v-else>
                    <div style="font-weight:bold;">{{userName}}</div>
                    <button @click="logout">退出</button>
                </template>
            </div>
		</el-row>
		<el-row :gutter="20">
			<next-row />
		</el-row>
	</div>
</template>

<script>
import Slider from "./slider.vue";
import nextRow from "./nextRow.vue";
import {mapState} from "vuex";

export default {
	components: {
        Slider,
        nextRow
	},
	data() {
		return {
			menuTitle: [
				"美团外卖",
				"猫眼电影",
				"美团酒店",
                "民宿／公寓",
                "商家入驻",
				"美团公益",
			],
		};
    },
    computed:{
        ...mapState(["userName","log"])
    },
    methods:{
        logout(){
            const time=new Date();
            document.cookie=`isLogin=true;expires=${time.toGMTString()}`;
            this.$store.commit("changeLogStatus",false);
            this.$store.commit("changeName","");
        }
    }
};
</script>

<style lang="less">
.centerDetail {
	margin-left: 238px;
	// border: 1px solid;
	dl {
		position: absolute;
		top: -45px;
        left: 258px;
        z-index:5;
		dd {
			display: inline-block;
			color: #222;
			font-weight: 700;
			font-size: 16px;
			margin: 0 20px;
			cursor: pointer;
            position: relative;
            &:nth-of-type(1){
                &:hover{
                    color: #fbc700;
                }
                
            }
            &:nth-of-type(2){
                &:hover{
                    color: #ed1e24;
                }
                
            }
            &:nth-of-type(3){
                &:hover{
                    color: #f04d4e;
                }
                
            }
            &:nth-of-type(4){
                &:hover{
                    color: #FDC411;
                }
                
            }
            &:nth-of-type(5){
                &:hover{
                    color: #FE8C00;
                }
                
            }
             &:nth-of-type(6){
                 &:hover{
                     color:#f04d4e;
                 }
                
            }
            
		}
    }
    
	.slidePic {
	}
	.m-life-pic {
		display: inline-block;
		margin: 0 8px;
		width: 150px;
		height: 240px;
		background: url(//p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg);
		background-size: 150px;
    }
    .userInfo{
        position: absolute;
        right:-187px;
        top:0;
        text-align: center;
        padding-top: 30px;
        width: 228px;
        height: 209px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        .img{
            border-radius: 30px;
            margin: 0px auto 4px auto;
            img{
                width: 47px;
                height: 47px;
                border-radius: 50%;
                border: 4px solid #E5E5E5;
            }
        }
        p{
            font-size: 16px;
            color: #222;
            text-align: center;
            font-weight: 500;
            white-space: nowrap;
            width: 6em;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0 auto;
        }
        button{
            cursor: pointer;
            outline:none;
            width: 118px;
            text-align: center;
            margin: 10px auto 15px auto;
            background: #fff;
            border: 1px solid #e5e5e5;
            border-radius: 40px;
            font-size: 14px;
            color: #333;
            transition: background-color 0.5s;
            // display: block;
            line-height: 38px;
            &:nth-of-type(2){
                margin-top:0;
            }
        }
    }
}
</style>
