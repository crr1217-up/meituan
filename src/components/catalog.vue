<template>
  <dl class="label">
    <dt :class="{active:!isActive}"
      @click="handleClick"
    >全部</dt>
    <dd class="detail" v-for="(val, key, i) in list" :key="key + i">
      <span >
          <span class="des" :class="{active:isActive&&num==i}">{{ key }}</span>
          <span class="el-icon-caret-bottom"></span>
      </span>
      <dl class="dropdown">
        <dt>{{ key }}</dt>

        <dd v-for="item in list[key]" 
            :key="item"
            @click="onClick(i,item)"
        >
            <span>{{ item }}</span>
        </dd>
      </dl>
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    list: {
        type: Object,
        default:()=>{
            return {
                "美食":["日本菜","饮品店","面包甜点"],
                "酒店住宿":["温泉酒店","经济型酒店","高端酒店"]
            }
        }
    }
  },
  data(){
      return {
          isActive:false,
          num:null,
          // subNum:null,
          list1:null
      }
  },
  // watch:{
  //   list(newVal){
  //     this.list = newVal;
  //     this.list1 = newVal;
  //   }
  // },
  methods:{
      onClick(i,item){
          this.isActive=true;
          this.num=i;
          this.$router.push({name:"goods",params:{good:item}});
          // this.subNum=n;
      },
      handleClick(){
        this.isActive=false;
        this.num=null;
      }
  }
};
</script>

<style lang="less">
.label {
  display: flex;
  > dt {
    &.active{
        border-radius: 100px;
        background: linear-gradient(to bottom right, #ffd000, #ffbd00);
    }
    color: #222;
    padding: 0 10px;
    display: inline-block;
    font-weight: normal;
    height: 22px;
    line-height: 22px;
    cursor: pointer;
    margin-right: 47px;
  }
  .detail {
    line-height: 28px;
    margin-top: -3px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;
    &:hover {
      .dropdown {
        display: block;
      }
    }
    > span {
      display: inline-block;
      min-width: 120px;
      padding: 0 10px;
      color: #666;
      cursor: pointer;
      font-weight: normal;
      box-sizing: border-box;
      .des{
          display: inline-block;
          &.active{
            border-radius: 100px;
            background: linear-gradient(to bottom right, #ffd000, #ffbd00);
            padding: 0 10px;
          }
      }
    }
    .dropdown {
      display: none;
      padding: 19px 15px;
      padding-bottom: 9px;
      position: absolute;
      // top: 200px;
      // left: 100px;
      z-index: 1000;
      cursor: auto;
      user-select: text;
      white-space: normal;
      font-size: 12px;
      line-height: 1.5;
      font-weight: 500;
      text-align: left;
      background: #fff;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      background-clip: padding-box;
      &::after {
        content: "";
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-bottom-color: #e5e5e5;
        position: absolute;
        top: -11px;
        left: 18px;
      }
      &::before {
        content: "";
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-bottom-color: #fff;
        position: absolute;
        top: -10px;
        left: 18px;
        z-index: 3;
      }
      dt {
        color: #ccc;
        font-size: 16px;
        margin-bottom: 11px;
        cursor: default;
      }
      dd {
        min-width: 120px;
        display: inline-block;
        margin-bottom: 5px;
        margin-left: -5px;
        padding: 0 10px;
        color: #666;
        display: inline-block;
        font-weight: normal;
        cursor:pointer;
        box-sizing: border-box;
        // &.active{
        //     span{
        //         display: inline-block;
        //         border-radius: 100px;
        //         background: linear-gradient(to bottom right, #ffd000, #ffbd00);
        //         padding: 0 10px;
        //     }
             
        // }
      }
    }
  }
}
</style>
