<template>
    <div class="productReco">
        <div class="center">
            <template v-if="!toLogin">
                <template v-if="isHave">
                    <detail-des :good="good"/>
                    <div class="bottom">
                        <div class="left">
                            <left-detail  v-if="flag"
                                :good="good.dealItems" 
                                :cake="good.recommend"
                                :commentArr="good.comment"
                                :commentNum="good.commentNum"
                            />
                        </div>
                        <div class="right">
                            <!-- <keep-alive> -->
                                <guess-like />
                            <!-- </keep-alive> -->
                        </div>
                    </div>
                </template>
                <div class="notHave" v-else>
                    对不起，该商品详情暂时未上架!
                </div>
            </template>
            <div class="notHave" v-if="toLogin">
                需要登录后才能查看，现在登录吗？
                <router-link :to="{name:'login'}"><button>登录</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/http.js";
import detailDes from "@/components/detailDes.vue";
import guessLike from "@/components/guessLike.vue";
import leftDetail from "@/components/leftDetail.vue";

export default {
    components:{
        detailDes,
        guessLike,
        leftDetail
    },
    data(){
        return {
            good:{},
            flag:false,
            isHave:false,
            toLogin:true
            // reGood:null
        }
    },
    created(){
        
        api.goodDetail().then(res=>{
            console.log("detail:",res);
            this.good = res.data.data;
            this.flag=true;
            if(this.good.title.includes(this.$route.params.name)){
                // this.good = this.detailDes;
                this.isHave=true;

            }else{
                this.good=null;
                this.isHave=false;
            }
            // console.log("=11==",this.$route.params.name,this.good.title)
        })
        
        
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
            if(document.cookie.includes("isLogin=true")){
                vm.toLogin=false;
                // console.log("进入");
            }else{
                vm.toLogin=true;
            }
        });
    }
}
</script>

<style scoped>
.bottom{
    position:relative;
    color: #222;
    padding-top: 40px;
}
.bottom .right .recommendPro{
    right:0;
    top:64px;
    max-height: 1149px;
}
.notHave{
    width:100%;
    border:1px solid #e5e5e5;
    border-radius: 5px;
    background-color: #fff;
    padding:100px 0;
    text-align: center;
    color:#ccc;
    font-size:20px;
   
    /* font-weight: bold; */
}
.notHave button{
    padding:5px 15px;
    border-radius:15px;
    background-color:#ffc300;
    border:none;
    outline:none;
}
</style>