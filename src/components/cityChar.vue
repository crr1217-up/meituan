<template>
    <div class="getByChar">
        <div class="top">
            <span class="title">按拼音首字母选择：</span>
            <p>
                <a :href="'#'+char" class="char" v-for="char in firstChar"
                    :key="char"
                >{{char}}</a>
            </p>
        </div>
        <div class="bottom">
            <div class="letter" :id="char" v-for="(char,i) in firstChar"
                :key="char+i"
            >
                <span class="firstLetter">{{char}}</span>
                <span>
                    <span class="charCity"
                        v-for="(letter,index) in charObj[char]"
                        :key="letter+index"
                        @click="changeCity(letter)"
                    >{{letter}}</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/http.js";
export default {
    data(){
        return {
            firstChar:["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y",'Z'],
            charObj:{},
        }
    },
    created(){
        const self = this;
        api.getCity().then(res=>{
            let obj={};
            // console.log("char:",res);
            res.data.data.forEach(item=>{
                // let charArr=obj[item.firstChar.toUpperCase()]
                if(!obj[item.firstChar.toUpperCase()]){
                    obj[item.firstChar.toUpperCase()]=[];
                    // return;
                }
                obj[item.firstChar.toUpperCase()].push(item.name);
            })
            self.charObj=obj;
            
        })
        console.log("obj:",this.charObj)
    },
    methods:{
        changeCity(city){
            this.$store.commit("changePro",city);
            this.$router.push({name:'default'});
        }
    }
}
</script>

<style lang="less">
.top{
    padding: 30px 0;
    .title{
        font-size: 16px;
        color: #333;
        font-weight: 500;
        vertical-align: top;
        display: inline-block;
    }
    p{
        max-width:1000px;
        font-size: 14px;
        vertical-align: top;
        display: inline-block;
        margin-top: 2px;
        .char{
            font-size: 15px;
            margin: 0 17px;
            color: #666;
            display: inline-block;
            margin: 0 10px;
            width: 25px;
            height: 25px;
            padding-top: 2px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border-radius: 50%;
            &:hover{
                font-weight: 500;
                color: #222222;
                background: #F8F8F8;
            }
        }
    }
}
.bottom{
    .letter{
        padding: 13px 30px 13px 10px;
        border-radius: 10px;
        transition: background-color 500ms;
        &:hover{
            background: #F8F8F8;
        }
        .firstLetter{
            box-sizing: border-box;
            vertical-align: top;
            padding-top: 10px;
            display: inline-block;
            text-align: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: #222222;
            background: #FFD000;
        }
        .charCity{
            margin: 10px 20px;
            color: #666;
            display: inline-block;
            font-size: 14px;
            cursor: pointer;
            &:hover{
                color: #222222;
                font-weight: 500;
            }
        }
    }
}
</style>