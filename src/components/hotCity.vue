<template>
    <div class="hotCity">
        <span>{{city}}:</span>
        <dl>
            <dd v-for="city in cityList"
                :key="city"
                @click="changeCity(city)"
            >{{city}}</dd>
        </dl>
    </div>
</template>

<script>
import api from "@/http.js";

export default {
    props:{
        city:String
    },
    data(){
        return {
            cityList:[],
        }
    },
    created(){
        if(this.city=="热门城市"){
            api.getHotCity().then(res=>{
                // console.log(res);
                this.cityList = res.data.data.map(item=>{
                    return item.name;
                })
                // console.log("hot:",this.cityList);
            });
        }else{
            api.getRecentCity().then(res=>{
                // console.log("recent:",res);
                this.cityList = res.data.data.map(item=>{
                    return item.name;
                })
            })
        }
    },
    methods:{
        changeCity(city){
            this.$store.commit("changePro",city);
            this.$router.push({name:'default'});
            
        },
    }
}
</script>

<style lang="less">
.hotCity{
    // border-bottom: 1px solid #E5E5E5;
    padding: 30px 0;
    span{
        font-size: 16px;
        color: #333;
        font-weight: 500;
        vertical-align: top;
        display: inline-block;
    }
    dl{
        font-size: 14px;
        vertical-align: top;
        display: inline-block;
        margin-top: 2px;
        max-width: 900px;
        dd{
            margin: 0 20px;
            color: #666;
            display: inline-block;
            cursor: pointer;
            &:hover{
                color: #222222;
                font-weight: 500;
            }
        }
    }
    
}

</style>