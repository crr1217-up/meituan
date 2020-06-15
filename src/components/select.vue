<template>
    <div class="sel">
        <span class="itemTitle">按省份选择:</span>
        <sel-city placeHolder="省份" :list="provinceList"
            @changePro="changeProvince"
        />
        <span class="itemTitle">按城市选择:</span>
        <sel-city placeHolder="城市" :list="cityList" 
            :class="{disabled:!isSelectPro}" 
            :isDisabled="isSelectPro"
            @changePro="changeCity"
        />
        <span class="itemTitle">直接搜索：</span>
         <el-select v-model="directFind" filterable placeholder="请选择">
            <el-option
            v-for="city in cityList"
            :key="city"
            :label="city"
            :value="city"
            >
            </el-option>
        </el-select>
    </div>
</template>

<script>
import api from "@/http.js";
import SelCity from "./selectCity.vue"
export default {
    components:{
        SelCity
    },
    data(){
        return {
            provinceList:[],
            cityList:[],
            data:[],
            isSelectPro:false,
            directFind:"",
        }
    },
    watch:{
        directFind(newVal){
            this.changeCity(newVal);
        }
    },
    created(){
        const self = this;
        api.getProvice().then(res=>{
            // console.log(res);
            self.data=res.data.data;
            res.data.data.forEach(item=>{
                self.provinceList.push(item.provinceName);
            });
        })
    },
    methods:{
        changeProvince(pro){
            this.isSelectPro=true;
            const self=this;
            // console.log(pro,this.data);
            this.data.forEach(item=>{
                if(item.provinceName==pro){
                    // console.log("匹配成功",item);
                    self.cityList = self.mapList(item);
                }
            })
        },
        changeCity(city){
            this.$store.commit("changePro",city);
            this.$router.push({name:'default'});
            
        },
        mapList(data){
            return data.cityInfoList.map(item1=>{
                return item1.name;
            })
        }
    }
}
</script>

<style lang="less">
span.itemTitle{
    font-size: 16px;
    color: #333;
    font-weight: 500;
    vertical-align: middle;
    display: inline-block;
}
</style>