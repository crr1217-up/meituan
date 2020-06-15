<template>
  <div class="search">
    <div class="center">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="logo">
            <div class="header-title">
              <router-link :to="{ name: 'default' }"
                ><img
                  src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
                  alt="美团"
              /></router-link>
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="searchInp">
            <input
              @input="oninput"
              v-model="seaContent"
              @focus="onfocus"
              @blur="onblur"
              type="text"
              placeholder="搜索商家或地点"
            />

            <router-link :to="{ name: 'goods', params: { good: seaContent } }">
              <el-button class="button" icon="el-icon-search"></el-button>
            </router-link>

            <dl
              v-if="isfocus && !seaContent"
              class="hotSearh"
              @mouseleave="onhotLeave"
            >
              <dt>热门搜索</dt>
              <dd
                @mouseenter="onhotClick"
                class="hotDD"
                v-for="(item, i) in resHot"
                :key="item + i"
              >
                <router-link :to="{ name: 'goods', params: { good: item } }">{{
                  item
                }}</router-link>
              </dd>
            </dl>
            <dl
              v-if="isfocus && seaContent && resSearch.length != 0"
              class="suggestSearh"
            >
              <dd
                v-for="(item, i) in resSearch"
                :key="item + '_' + i"
                @click="onClick(item)"
              >
                <router-link :to="{ name: 'goods', params: { good: item } }">{{
                  item
                }}</router-link>
              </dd>
            </dl>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import api from "@/http.js";
// import {mapState} from "vuex";

export default {
  data() {
    return {
      resSearch: [],
      resHot: [],
      seaContent: "",
      timer: null,
      isfocus: false
    };
  },
  methods: {
    onfocus() {
      const self = this;
      this.isfocus = true;
      // console.log(api.hotWords());
      api.hotWords().then(res => {
        if (res.status == 200) {
          self.resHot = res.data.data;
        }
      });
    },
    onClick(item) {
      this.seaContent = item;
    },
    // computed:{
    //   // ...mapState(["searchInfo"]),
    //   searchInfo:{
    //     get(){
    //       return this.$store.state.searchInfo;
    //     },
    //     set(value){
    //       this.$store.commit("changeSeaCon",value);
    //     }
    //   }
    // },
    onblur() {
      this.timer = setTimeout(() => {
        this.isfocus = false;
      }, 200);
    },
    onhotClick() {
      clearTimeout(this.timer);
      this.isfocus = true;
    },
    onhotLeave() {
      this.isfocus = false;
    },
    oninput() {
      // const self=this;
      const val = this.seaContent;
      api.searchKeyWords().then(res => {
        this.resSearch = res.data.data.list.filter(item => {
          return item.indexOf(val) > -1;
        });
      });
    }
  },
  watch: {
    $route() {
      this.seaContent = this.$route.params.good;
      // console.log("111",this.$route.params);
    }
  }
};
</script>

<style lang="less">
.search {
  height: calc(197px - 40px);
  background-color: #fff;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
  .logo {
    padding-top: 28px;
    padding-right: 60px;
    padding-bottom: 40px;
    font-size: 16px;
    min-width: 220px;
    height: 54px;
    box-sizing: content-box;
    vertical-align: sub;
    img {
      width: 126px;
      height: 46px;
      border: 0;
    }
  }
  .searchInp {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    margin-top: 28px;
    width: 550px;
    height: 40px;
    background: #fff;
    input {
      outline: none;
      border: 1px solid #e5e5e5;
      border-right: none;
      border-radius: 4px 0 0 4px;
      line-height: 100%;
      box-sizing: border-box;
      display: inline-block !important;
      padding: 15px;
      font-size: 14px;
      height: 100%;
      background: transparent;
      width: 85.45%;
      &::placeholder {
        color: #ccc;
      }
    }
    .button {
      outline: none;
      width: 14.55%;
      box-sizing: border-box;
      line-height: 100%;
      height: 100%;
      background: #ffc300;
      border: none;
      position: absolute;
      right: 0;
      top: 0;
      // float: right;
      color: #222222;
      cursor: pointer;
      font-size: 18px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  .hotSearh,
  .suggestSearh {
    position: absolute;
    width: 447px;
    top: 41px;
    left: 0;
    font-size: 12px;
    z-index: 100000;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    dt {
      color: #999;
      font-weight: bold;
      margin-bottom: 5px;
    }
    dd {
      line-height: 1.6;
      &.hotDD {
        display: inline-block;
        margin-right: 10px;
      }
      a {
        color: #666;
        &:hover {
          color: #fe8c00;
        }
      }
    }
  }
  .suggestSearh {
    position: absolute;
  }
}
</style>
