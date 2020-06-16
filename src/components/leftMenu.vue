<template>
  <dl class="left-menu" @mouseleave="onleave">
    <dt>全部分类</dt>
    <dd v-for="item in menuList" :key="item.type" @mouseenter="onenter(item)">
      <span class="iconfont">&#xe612;</span>
      {{ item.name }}
      <span class="el-icon-arrow-right arrow"></span>
    </dd>
    <div
      class="menuDetail"
      v-if="isEnter"
      @mouseenter="enterDetail"
      @mouseleave="leaveDetail"
    >
      <template v-for="(d, i) in details">
        <h3 :key="d.title + i">{{ d.title }}</h3>
        <dl :key="d.title">
          <dd v-for="dd in d.items" :key="dd">
            <router-link tag="div" :to="{name:'goods',params:{good:dd}}">{{ dd }}</router-link>
          </dd>
        </dl>
      </template>
    </div>
  </dl>
</template>

<script>
import api from "@/http.js";

export default {
  data() {
    return {
      menuList: [],
      details: null,
      isEnter: false,
      timer: null
    };
  },
  created() {
    // const self=this;
    api.getNavData().then(res => {
      this.menuList = res.data.data;
    });
  },

  methods: {
    onenter(item) {
      this.details = item.items;
      this.isEnter = true;
    },
    onleave() {
      const self = this;
      this.timer = setTimeout(() => {
        self.isEnter = false;
      }, 200);
    },
    enterDetail() {
      clearTimeout(this.timer);
    },
    leaveDetail() {
      this.isEnter = false;
    }
  }
};
</script>

<style lang="less">
.mainIndex {
  position: relative;
  .left-menu {
    padding: 15px 0 8px;
    width: 230px;
    height: 475px;
    position: absolute;
    left: 0;
    top: -9px;
    text-align: left;
    box-sizing: border-box;
    // float: left;
    margin-top: -50px;
    color: #646464;
    background: #fff;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    .menuDetail {
      position: absolute;
      top: 60px;
      left: 230px;
      width: 400px;
      height: 416px;
      padding: 24px 30px 0;
      // margin-top: 24px;
      background-color: #fff;
      z-index: 199;
      color: #666;
      overflow: hidden;
      h3 {
        font-size: 16px;
        font-weight: 500;
        color: #222;
        cursor: pointer;
        height: 22px;
        line-height: 22px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e5e5e5;
      }
      dd {
        display: inline-block;
        color: #999;
        font-size: 12px;
        line-height: 15px;
        display: inline-block;
        margin-right: 16px;
        margin-top: 10px;
        cursor: pointer;
        &:hover {
          color: #ff8200;
        }
      }
    }
    dt {
      padding-bottom: 25px;
      margin-left: 15px;
      color: #222222;
      font-size: 16px;
      font-weight: 700;
    }
    dd {
      padding: 2px 12px;
      cursor: pointer;
      font-size: 13px;
      line-height: 20px;
      height: 20px;
      color: #646464;
      span {
        font-size: 10px;
        margin-right: 5px;
        color: #ff8200;
        &.arrow {
          margin-left: 141px;
          margin-right: 0;
          color: #646464;
          margin-top: 7px;
          position: absolute;
        }
      }
    }
  }
}
</style>
