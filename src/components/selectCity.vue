<template>
    <div class="select">        
        <div class="proSelect">
            <span class="default" @click="selectPro">{{val}}<span class="el-icon-arrow-down icon"></span></span>
            <dl v-if="isSelect" @mouseleave="onleave">
                <p >{{placeHolder}}</p>
                <dd
                    v-for="item in list"
                    :key="item"
                    :value="item"
                    @click="clickPro(item)"
                    >{{item}}
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        placeHolder:String,
        list:Array,
        isDisabled:Boolean
    },
    data(){
        return {
            isSelect:false,
            val:""
        }
    },
    mounted(){
        this.val=this.placeHolder;
        // console.log(this.isDisabled);
    },
    methods:{
        selectPro(){
            this.isSelect=!this.isSelect;
        },
        clickPro(newVal){
            this.val=newVal;
            this.isSelect=false;
            this.$emit('changePro',newVal);
        },
        onleave(){
            this.isSelect=false;
        }
    }
}
</script>

<style lang="less">
.select{
    padding-bottom: 30px;
    display: inline-block;
    &.disabled{
        .proSelect{
            cursor:not-allowed;
        }
    }
  .proSelect {
    padding: 10px 0 10px 10px;
    cursor: pointer;
    border-radius: 4px;
    vertical-align: middle;
    display: inline-block;
    width: 150px;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid #E5E5E5;
    margin: 0 10px 0 20px;
    position: relative;
    font-size: 14px;
    color: #666;
    
    .icon{
        margin-left:83px;
    }
    dl{
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        z-index: 10;
        cursor: default;
        top: 45px;
        left: 0;
        width: 264px;
        // height: 375px;
        background-color: #fff;
        padding: 20px 0 20px 15px;
        box-sizing: border-box;
        background-color: #fff;
        border: 1px solid #E5E5E5;
        box-shadow: 0 3px 5px 0 rgba(0,0,0,0.10);
        border-radius: 4px;
        p{
            width:100%;
            font-size: 16px;
            color: #CCC;
            margin-bottom: 11px;
        }
        dd{
            display: inline-block;
            cursor: pointer;
            font-size: 12px;
            color: #666;
            display: table;
            box-sizing: border-box;
            min-width: 40px;
            height: 20px;
            padding: 1px 8px;
            margin: 6px 38px 6px 0;
            &:hover {
                border-radius: 10px;
                background: #F4F4F4;
            }
        }
    }
}
}


</style>