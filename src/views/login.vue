<template>
  <div class="login">
    <div class="center">
      <div class="logo">
        <router-link to="/" class="meituan">美团网</router-link>
      </div>
      <div>
        <img
          src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
        />
        <div class="inpu">
          <div v-if="msg" class="wrong">
            <span class="el-icon-remove"></span>
            {{ msg }}
          </div>
          <p class="title">账号登录</p>
          <el-input
            @focus="onFocus"
            class="phone"
            placeholder="请输入用户名"
            prefix-icon="el-icon-mobile-phone"
            v-model="userName"
          >
          </el-input>

          <el-input
            @focus="onFocus"
            class="password"
            type="password"
            placeholder="请输入密码"
            prefix-icon="el-icon-view"
            v-model="password"
          >
          </el-input>
          <p class="forget">忘记密码？</p>
          <button @click="login">登录</button>
          <p class="register">
            还没有账号？
            <router-link class="toRe" :to="{ name: 'register' }"
              >立即注册</router-link
            >
          </p>
          <div class="cooperate">
            <div class="des">用合作网站账号登录</div>
            <div class="icon">
              <span class="qq"></span>
              <span class="weibo"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <dl>
          <dd>关于美团</dd>
          <dd>加入我们</dd>
          <dd>商家入驻</dd>
          <dd>帮助中心</dd>
          <dd>美团手机版</dd>
        </dl>
        <p class="shangbiao">
          ©2020 美团网团购 meituan.com 京ICP证070791号
          京公网安备11010502025545号
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/http.js";
import { mapState } from "vuex";

export default {
  data() {
    return {
      userName: "",
      password: "",
      msg: ""
      // log:false
    };
  },
  computed: {
    ...mapState(["log"])
  },
  // created(){

  // },
  methods: {
    login() {
      api
        .logIn({
          params: {
            userName: this.userName,
            password: this.password
          }
        })
        .then(res => {
          console.log("登录：", res);
          if (res.data.status == "fail") {
            this.msg = res.data.msg;
          } else {
            // res.data.data;
            // const day=10;
            // const date=new Date();
            // const time=date.getTime()+day*24*60*60*1000;
            // const t=new Date(time);
            this.$store.commit("changeLogStatus", true);
            document.cookie = `isLogin=true;`;
            const isBack = window.confirm("是否回到原来的页面？");
            isBack ? this.$router.go(-1) : this.$router.push("/");
            this.$store.commit("changeName", res.data.data);
          }
        });
    },
    onFocus() {
      this.msg = "";
    }
  }
  // beforeRouteLeave(to,from,next){
  //     console.log("log:",from,to,this.log);
  //     if(!from.name=="index"&&this.log){
  //         const isBack = window.confirm("是否回到原来的页面？");
  //         isBack?this.$router.go(-1):next();
  //     }else{
  //         next();
  //     }
  // }
};
</script>

<style lang="less" scoped>
.center {
  // margin-bottom:70px;
  width: 980px;
  font-size: 14px;
  position: relative;
  .logo {
    width: 980px;
    height: 54px;
    margin: 40px auto 30px;
    .meituan {
      margin: 0;
      width: 82px;
      height: 54px;
      background-position: -188px -808px;
      background-image: url("https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png");
      background-repeat: no-repeat;
      background-size: initial;
      // float: left;
      position: absolute;
      // display: block;
      display: inline;
      text-indent: -9999px;
      overflow: hidden;
    }
    &::after {
      display: block;
      clear: both;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
  }
  img {
    // float: left;
    height: 370px;
    margin: 0 115px 0 0;
    width: 480px;
    margin-bottom: 70px;
  }
  .inpu {
    // float: left;
    position: absolute;
    right: 108px;
    top: 140px;
    padding-top: 0;
    width: 270px;
    margin-bottom: 70px;
    .wrong {
      position: absolute;
      top: -49px;
      left: 0;
      width: 248px;
      min-height: 18px;
      margin-top: 0;
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #f5d8a7;
      border-radius: 2px;
      background: #fff6db;
      font-size: 12px;
      .el-icon-remove {
        margin-right: 5px;
        color: orange;
        font-size: 16px;
      }
    }
    .title {
      font-weight: 400;
      color: #666;
      font-size: 14px;
    }
    .phone {
      box-sizing: border-box;
      width: 100%;
      padding: 0;
      // border: 1px solid #aaa;
      background-color: #fff;
      margin: 8px 0;
      overflow: hidden;
      display: flex;
      align-items: center;

      // max-width: 200px!important;
    }
    .password {
      padding-left: 0;
      padding-bottom: 8px;
    }
    .forget {
      padding-left: 0;
      padding-bottom: 8px;
      padding-top: 0;
      font-size: 12px;
      float: right;
      color: #fe8c00;
    }
    button {
      margin-left: 0;
      margin-bottom: 8px;
      width: 100%;
      color: #222;
      background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
      border-width: 0;
      box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
      background-size: 100%;
      // display: inline-block;
      vertical-align: middle;
      padding: 7px 20px 6px;
      font-weight: 700;
      line-height: 1.5;
      letter-spacing: 0.1em;
      text-align: center;
      border-width: 0 0 1px;
      border-style: solid;
      background-repeat: repeat-x;
      border-radius: 2px;
      user-select: none;
      border: none;
      outline: none;
      cursor: pointer;
    }
    .register {
      color: #666;
      font-size: 14px;
      .toRe {
        color: #fe8c00;
      }
    }
  }
  .cooperate {
    margin-top: 20px;
    position: relative;
    width: 270px;
    border-top: 1px solid #ccc;
    .des {
      position: absolute;
      top: -10px;
      left: 50%;
      margin-left: -75px;
      width: 150px;
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      color: #666;
      background: #fff;
    }
    .icon {
      padding-left: 88px;
      margin-top: 27px;
      margin-left: 10px;
      .qq {
        margin-right: 20px;
        width: 18px;
        height: 18px;
        background-position: -1250px -491px;
        float: left;
        cursor: pointer;
        background-image: url("https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png");
        &:hover {
          background-position: -1250px -509px;
        }
      }
      .weibo {
        background-position: -1250px -599px;
        width: 18px;
        height: 18px;
        float: left;
        cursor: pointer;
        background-image: url("https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png");
        &:hover {
          background-position: -1250px -545px;
        }
      }
    }
  }
  .bottom {
    width: 980px;
    font-size: 12px;
    color: #999;
    margin-bottom: 30px;
    dl {
      margin-bottom: 20px;
      padding: 12px 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      display: flex;
      dd {
        margin: 5px 0;
        display: inline-block;
        padding: 0 16px;
        line-height: 14px;
        &:first-of-type {
          padding-left: 0;
        }
        &:not(:last-of-type) {
          border-right: 1px solid #eee;
        }
      }
    }
    .shangbiao {
      text-align: left;
      font-size: 12px;
      font-family: initial;
    }
  }
}
</style>
