<template>
    <div class="goodsDetail">
        <dl class="menu">
            <dd v-for="item in nav"
                :key="item.key"
                :class="{active:item.active}"
            >{{item.name}}</dd>
        </dl>
        <template v-if="isShow">
            <Product v-for="pro in proItem" 
                :key="pro.title"
                :meta="pro"
            />
        </template>
        <div v-else class="none">
            对不起，没有匹配的产品
        </div>
    </div>
</template>

<script>
import api from "@/http.js";
import Product from "@/components/products.vue"

export default {
    components:{
        Product
    },
    data(){
        return {
            proItem:[],
            nav: [
                {
                key: "s-default",
                name: "智能排序",
                active: true
                },
                {
                key: "s-price",
                name: "价格最低",
                active: false
                },
                {
                key: "s-score",
                name: "人气最高",
                active: false
                },
                {
                key: "s-comment",
                name: "评价最高",
                active: false
                }
            ],
            isShow:true
        }
    },
    created(){
        const self = this;
        api.goodsList().then(res=>{
            console.log("goods:",res);
            // const products={};
            self.proItem = res.data.data;
            self.includParam(self.proItem)
        })
        
    },
    methods:{
        includParam(item){
            let bol=true;
            // console.log(self.$route.params.good)
            item.forEach(item=>{
                if(!item.title.includes(this.$route.params.good)){
                    bol=false;
                }else{
                    bol=true;
                }
            })
            this.isShow=bol;
            this.$emit("isShow",this.isShow);
        }
    },
    watch:{
        "$route"(){
            this.includParam(this.proItem);
            // console.log("111",this.$route.params);
        }
    }
}
</script>

<style lang="less">
.goodsDetail{
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    color: #333;
    padding:11px 20px;
    width: 950px;
    font-size: 14px;
    line-height: 20px;
    margin-top:10px;
    .menu{
        padding:11px 20px;
        padding-top: 15px;
        // padding-bottom: 2px;
        height: 20px;
        margin-left: -25px;
        dd{
            min-width: 96px;
            padding: 0 10px;
            color: #666;
            display: inline-block;
            font-weight: normal;
            cursor: pointer;
            &.active{
                font-weight: 500;
                color: #222222;
            }
        }
    }
    .none{
        
        color: #999;
        font-weight: 400;
        text-align: center;
        padding: 50px 0;
    }
}
</style>