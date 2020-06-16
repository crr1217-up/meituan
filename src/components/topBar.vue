<template>
  <div class="header">
    <div class="middle">
      <div class="left">
        <span class="el-icon-location"></span>{{province}}
        <router-link class="changeCity" :to="{ name: 'changeCity' }"
          >切换城市</router-link
        >
        <span class="citySpot">
          [
          <span v-for="city in nearCity"
            :key="city"
          > {{city}}&nbsp;&nbsp; </span>
          ]
        </span>
        <template v-if="!userName">
          <router-link class="login" :to="{ name: 'login' }"
            >立即登录</router-link
          >
          &nbsp;&nbsp;&nbsp;&nbsp;
          <router-link class="register" :to="{ name: 'register' }">
            注册</router-link>
        </template>
        <template v-else>
          <span style="margin:0 5px 0 10px;color:green;font-weight:bold;">{{userName}}</span>
          <!-- <span>退出登录</span> -->
        </template>
      </div>
      <div class="right">
        <div id="item1">
          <span>我的美团</span>
          <dl class="dl">
            <dd v-for="item in myMeituan" :key="item">{{ item }}</dd>
          </dl>
        </div>
        <div id="item1" class="phone">
          <span>手机APP</span>
        </div>
        <div id="item1" class="ad">
          <span>商家中心</span>
          <dl class="dl">
            <dd v-for="item in commecial" :key="item">{{ item }}</dd>
          </dl>
        </div>
        <div id="item1">
          <span>美团规则</span>
          <dl class="dl">
            <dd v-for="item in rules" :key="item">{{ item }}</dd>
          </dl>
        </div>
        <div id="item1" class="websiteNav">
          <span>网站导航</span>
          <div class="content">
            <dl
              class="nodl"
              v-for="(item, index) in webNav"
              :key="item.title + index"
            >
              <dt>{{ item.title }}</dt>
              <dd v-for="lit in item.item" :key="lit">{{ lit }}</dd>
            </dl>
            <dl class="nodl">
              <dt>手机应用</dt>
              <dd>
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                />
              </dd>
              <dd>
                <a
                  href="https://www.dianping.com/events/m/index.htm"
                  target="_blank"
                  ><img
                    class="appicon"
                    src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                    title="点评app"
                    alt="点评app"
                /></a>
              </dd>
              <dd>
                <a href="https://minsu.meituan.com/app/" target="_blank"
                  ><img
                    class="appicon"
                    src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                    title="民宿app"
                    alt="民宿app"
                /></a>
              </dd>
              <dd>
                <a href="https://minsu.meituan.com/app/" target="_blank"
                  ><img
                    class="appicon"
                    src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                    title="民宿app"
                    alt="民宿app"
                /></a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/http.js";
import {mapState} from "vuex";
export default {
  computed:{
    ...mapState(["province","userName"])
  },
  data() {
    return {
      myMeituan: ["我的订单", "我的收藏", "抵用券", "账户设置"],
      commecial: [
        "美团餐饮商户中心",
        "登录商家中心",
        "美团智能收银",
        "我想开店",
        "餐饮代理商招募"
      ],
      rules: ["规则中心", "规则目录", "规则评论院"],
      webNav: [
        {
          title: "酒店旅游",
          item: [
            "国际机票",
            "火车票",
            "民宿",
            "经济型酒店",
            "主题酒店",
            "商务酒店",
            "公寓",
            "豪华酒店",
            "客栈",
            "青年旅社",
            "度假酒店",
            "别墅",
            "农家院"
          ]
        },
        {
          title: "吃美食",
          item: ["烤鱼", "特色小吃", "烧烤", "自助餐", "火锅", "代金券"]
        },
        {
          title: "看电影",
          item: [
            "热映电影",
            "热门影院",
            "热映电影口碑榜",
            "最受期待电影",
            "国内票房榜",
            "北美票房榜",
            "电影排行榜"
          ]
        }
      ],
      nearCity:[],
      isHover: false
    };
  },
  methods: {},
  created(){
    api.getCurPosition().then(res => { 
      console.log(res);
      this.$store.dispatch("changeCity",res.data.data.name);
      this.nearCity=res.data.data.nearCity.map(item=>{
        return item.name;
      })
    })
  }
};
</script>

<style lang="less">
// @import "@/assets/css/register/index.scss";
// @import "@/assets/css/header/headNav.less";
header {
  display: flex;
  align-items: center;
  .header {
    background-color: #f8f8f8;
    font-size: 12px;
    width: 100%;
    // padding-top:20px;
    color: #999;

    .middle {
      width: 1190px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .left {
        line-height: 40px;
        .changeCity {
          background: #f4f4f4;
          border: 1px solid #e5e5e5;
          border-radius: 2px;
          color: #666;
          margin: 0 4px;
          padding: 0 2px;
          &:hover {
            color: #fe8c00;
          }
        }
        .citySpot {
          span {
            &:hover {
              color: #fe8c00;
            }
          }
        }
        .login {
          margin-left: 15px;
        }
      }
      .right {
        display: flex;
        #item1 {
          border-left: 1px solid transparent;
          border-right: 1px solid transparent;
          width: 77px;
          text-align: center;
          position: relative;
          box-sizing: border-box;
          line-height: 40px;
          &.ad dl {
            width: 140%;
            left: -31px;
            border-top-color: #e5e5e5;
            // z-index: -3;
            top: 40px;
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;
            &::after {
              content: "";
              position: absolute;
              width: 75px;
              height: 3px;
              right: 0px;
              top: -2px;
              background-color: #fff;
            }
          }
          &.websiteNav {
            &:hover {
              > .content {
                display: flex;
              }
            }
            .content {
              position: absolute;
                z-index:14;
              width: 1200px;
              height: 287px;
              border: 1px solid #e5e5e5;
              box-sizing: border-box;
              box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
              padding: 30px 36px 36px 47px;
              right: -1px;
              background-color: #fff;
              display: flex;
              display: none;
              &::after {
                content: "";
                position: absolute;
                width: 75px;
                height: 3px;
                right: 0px;
                top: -2px;
                background-color: #fff;
              }
              dl {
                position: relative;
                display: flex;
                align-content: flex-start;
                // flex-direction: column;
                flex-wrap: wrap;
                // width:auto;
                &:nth-of-type(1) {
                  width: 234px;
                  margin-right: 47px;
                }
                &:nth-of-type(2) {
                  width: 156px;
                  margin-right: 47px;
                  dd {
                    width: 50%;
                  }
                }
                &:nth-of-type(3) {
                  width: 90px;
                  margin-right: 47px;
                  dd {
                    width: 100%;
                  }
                }
                &:nth-of-type(4) {
                  width: 380px;
                  margin-right: 47px;
                  dd {
                    width: 60px;
                    margin: 0 8px;
                  }
                  img {
                    width: 60px;
                    height: 60px;
                    border: 0;
                  }
                }
                dt {
                  width: 100%;
                  height: 16px;
                  margin-bottom: 26px;
                  font-size: 14px;
                  line-height: 16px;
                  color: #222222;
                  font-weight: 500;
                }
                dd {
                  // height:16px;
                  padding: 5px 0;
                  line-height: 16px;
                  width: 33%;
                  text-align: center;
                  &:hover {
                    color: #fe8c00;
                  }
                }
              }
            }
          }
          &:not([class="phone"]):hover {
            height: 41px;
            background-color: #fff;
            border-left-color: #e5e5e5;
            border-right-color: #e5e5e5;
            border-bottom-color: transparent;
            box-shadow: 0 -4px 5px 0 rgba(0, 0, 0, 0.1);

            > dl {
              display: block;
            }
          }

          .dl {
            display: none;
            width: 100%;
            position: absolute;
            z-index:11;
            left: -1px;
            top: 39px;
            border: 1px solid #e5e5e5;
            border-top-color: transparent;
            background-color: #fff;
            // z-index: 3;
            box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
            dd:hover {
              color: #fe8c00;
            }
          }
          // margin:0 10px;
          span {
            display: inline-block;
            line-height: 40px;
            width: 100%;
          }
          span:hover {
            color: #fe8c00;
          }
        }
      }
    }
  }
}
.right span:hover dl {
  display: block;
}
</style>
