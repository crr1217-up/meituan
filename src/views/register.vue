<template>
<div class="register">
    <div class="head">
        <div>
            <div class="logo">美团</div>
            <span class="des">
                <span class="question">已有美团账号？</span>
                <router-link :to="{name:'login'}" class="login">登录</router-link>
            </span>
        </div>
    </div>
    <div class="center">
        <div class="inpu">
            <!-- <div class="user">
                <label for="name">用户名</label>
                <input v-model="name" type="text" id="name"
                    @blur="nameBlur" @focus="nameFocus"
                >
                <span class="tip" v-if="coName&&blur1">
                    <span class="el-icon-remove icon"></span>
                    <span>请输入用户名</span>
                </span>
                <span class="tip" v-else-if="!coName&&blur1">
                    <span class="el-icon-circle-check icon"></span>
                </span>
            </div>
            <div class="create">
                <label for="password">创建密码</label>
                <input v-model="password" type="password" id="password"
                    @blur="passwordBlur" @focus="passwordFocus"
                >
                <span class="tip" v-if="coPassword&&blur2">
                    <span class="el-icon-remove icon"></span>
                    请输入密码
                </span>
                <span class="tip" v-else-if="!coPassword&&blur2">
                    <span class="el-icon-circle-check icon"></span>
                </span>
                <div class="strength">
                    <div class="bar" :class="{weak:isWeak,normal:isNormal,strong:isStrong}"></div>
                    <div class="level">
                        <span>强</span>
                        <span>中</span>
                        <span>弱</span>
                    </div>
                </div>
            </div>
            <div class="confirm">
                <label for="rePassword">确认密码</label>
                <input v-model="rePassword" type="password" id="rePassword"
                    @focus="rePasswordFocus" @blur="rePasswordBlur"
                >
                <span class="tip" v-if="coRePassword&&blur3">
                    <span class="el-icon-remove icon"></span>
                    与上面的密码不一致
                </span>
                <span class="tip" v-else-if="!coRePassword&&blur3">
                    <span class="el-icon-circle-check icon"></span>
                </span>
            </div> -->
            <el-form size="small" :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model.number="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item class="create" label="密码" prop="password">
                    <el-input type="password" @input="onInput" v-model="ruleForm.password" auto-complete="off"></el-input>
                     <div class="strength">
                        <div :class="['bar',strongCalss]" ></div>
                        <div class="level">
                            <span>弱</span>
                            <span>中</span>
                            <span>强</span>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="确认密码" prop="rePassword">
                    <el-input type="password" v-model="ruleForm.rePassword" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">同意以下协议并注册</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- <button @click="handleRegister"></button> -->
        <p class="protocol">《美团点评用户服务协议》 《美团点评隐私政策》</p>
    </div>
    <div class="foot">©meituan.com  京ICP证070791号  京公网安备11010502025545号</div>
</div>
</template>

<script>
import api from "@/http.js";

export default {
    data(){
        var checkName = (rule, value, callback) => {
            const char = /\w+/g;
            const num = /\d+/g;
            const line = /_/g;
            const strong = value.match(char)&&value.match(num)&&value.match(line);
            // console.log(value.toString().length<4,value.toString().length>16,(/\W+/g).test(value.toString()));
            if (!value) {
                return callback(new Error('用户名不能为空'));
            }else if (value.toString().length<4||value.toString().length>16||!strong) {
                callback(new Error('用户名必须为4-16位的字母数字下划线组成'));
            } else{
                callback();
            }
            // setTimeout(() => {
                
            // }, 1000);
        };
        var checkPassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            }else if (value.toString().length<6||value.toString().length>16) {
                callback(new Error('密码必须为4-16位的字母数字下划线组成'));
            }else {
                if (this.ruleForm.rePassword !== '') {
                    this.$refs.ruleForm.validateField('checkPassword');
                }
                callback();
            }
            // setTimeout(() => {
            //     if (value.length<6&&value.length>16&&!value.match(/\w+/g)) {
            //         callback(new Error('密码必须为4-16位的字母数字下划线组成'));
            //     } else{
            //     }
            // }, 1000);
        };
        var checkeRePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            ruleForm:{
                name:"",
                password:"",
                rePassword:"",
            },
            rules2: {
                password: [
                    { validator: checkPassword, trigger: 'blur' }
                ],
                rePassword: [
                    { validator: checkeRePassword, trigger: 'blur' }
                ],
                name: [
                    { validator: checkName, trigger: 'blur' }
                ]
            },
            strongCalss:""
            // name:"",
            // password:"",
            // rePassword:"",

            // coName:false,
            // coPassword:false,
            // coRePassword:false,

            // blur1:false,
            // blur2:false,
            // blur3:false
        }
    },
    methods:{
        handleRegister(){
            api.register({
                params:{
                    userName:this.ruleForm.name,
                    password:this.ruleForm.password,
                    rePassword:this.ruleForm.rePassword
                }
            }).then(res=>{
                console.log("register:",res);
                if(res.data.msg=="用户名已存在"){
                    alert("用户名已存在，请重新注册");
                    this.ruleForm.name="";
                    this.ruleForm.password="";
                    this.ruleForm.rePassword="";
                }
                if(res.data.status=="success"){
                    this.ruleForm.name="";
                    this.ruleForm.password="";
                    this.ruleForm.rePassword="";
                    const toLogin = window.confirm("注册成功，现在是否登录");
                    if(toLogin){
                        this.$router.push({name:"login"});
                    }else{
                        this.$router.push("/");
                    }
                }
            })
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.handleRegister();                    
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        onInput(){
            const char = /\w+/g;
            const num = /\d+/g;
            const line = /_/g;
            const strong = this.ruleForm.password.match(char)&&this.ruleForm.password.match(num)&&this.ruleForm.password.match(line);
            if(this.ruleForm.password.length>=12&&strong){
                this.strongCalss="strong";
            }else if(this.ruleForm.password.length<7&&this.ruleForm.password.length>0){
                this.strongCalss="weak";
            }else if(!this.ruleForm.password){
                this.strongCalss="";
            }else{
                this.strongCalss="normal";
            }
        }
        // nameBlur(){
            
        //     // this.blurMethod(this.blur1,this.name,this.coName);
        //     // console.log(this.blur1,this.name,this.coName);
        //     this.blur1=true;
        //     this.coName=this.name?false:true;
        // },
        // nameFocus(){
        //     // this.focusMethod(this.blur1);
        //     // console.log(this.blur1);
        //     this.blur1=false;
        // },
        // passwordBlur(){
        //     // this.blurMethod(this.blur2,this.password,this.coPassword);
        //     this.blur2=true;
        //     this.coPassword=this.password?false:true;
        // },
        // passwordFocus(){
        //     // this.focusMethod(this.blur2);
        //     this.blur2=false;
        // },
        // rePasswordBlur(){
        //     // this.blurMethod(this.blur3,this.rePassword,this.coRePassword);
        //     this.blur3=true;
        //     this.coRePassword=this.rePassword?false:true;
        // },
        // rePasswordFocus(){
        //     // this.focusMethod(this.blur3);
        //     this.blur3=false;
        // },
    }

}
</script>

<style lang="less" scoped>
.register{
    font-size: 14px;
    .head{
        border-bottom: 2px solid #D8D8D8;
        min-width: 980px;
        color: #666;
        width:100%;
        >div{
            padding: 10px 0;
            width: 980px;
            display: inline-block;
            margin-left: 185px;
            position: relative;
            .logo{
                display: inline-block;
                height: 36px;
                width: 128px;
                background: url("https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png") no-repeat;
                background-size: contain;
                text-indent: -1000px;
                overflow: hidden;
            }
            .des{
                line-height: 36px;
                position:absolute;
                right:0;
                top:11px;
                .question{
                    margin-right: 10px;
                    vertical-align: sub;
                }
                .login{
                    padding: 3px 10px;
                    font-size: 12px;
                    // border-color: rgba(191,105,0,.15);
                    color: #222;
                    background-image: linear-gradient(135deg,#FFD000 0,#FFBD00 100%);
                    // border-width: 0;
                    box-shadow: 0 2px 1px rgba(191,105,0,.15);
                    background-size: 100%;
                    font-weight: 400;
                    border-radius: 2px;
                    user-select: none;
                    cursor: pointer;
                    line-height: 1.5;
                    letter-spacing: .1em;
                    text-align: center;
                    vertical-align: middle;
                }
            }
        }
    }
    .center{
        margin: 0 auto 30px;
        padding-top: 30px;
        width: 980px;
        min-height: 300px;
        .inpu{
            .el-form-item{
                position: relative;
                padding: 8px 0 8px 0;
                zoom: 1;
                .tip{
                    color:#666;
                    display: inline-block;
                    margin-left: 4px;
                    padding: 6px 0;
                    line-height: 24px;
                    font-size: 12px;
                    // vertical-align: top;
                    zoom: 1;
                    
                }
                .icon{
                        font-size:20px;
                        color:orange;
                        margin-top: -2px;
                        vertical-align: middle;
                        &.el-icon-circle-check{
                            color:yellowgreen;
                        }
                    }
                 label{
                    position: absolute;
                    left: 0;
                    width: 100px;
                    padding-top: 6px;
                    font-size: 14px;
                    text-align: right;
                    color: #333;
                }
                .el-input{
                    width: 260px;
                    // height: 24px;
                    input{
                        width: 248px;
                        height: 24px;
                        // *margin: -1px auto;
                        padding: 5px;
                        border: 1px solid #aaa;
                        line-height: 24px;
                        vertical-align: top;
                        outline: none;
                    }
                }
            }
            .create{
                padding-bottom: 27px;
                .el-form-item__content{
                    .strength{
                        position: absolute;
                        width: 260px;
                        top: 52px;
                        left: 0;
                        background: #eee;
                        .bar{
                            background: #d3ebee;
                            height: 20px;
                            line-height: 20px!important;
                            width: 0;
                            overflow: hidden;
                            transition: all .4s linear;
                            &.weak{
                                width: 85px;
                                background: #f76120;
                            }
                            &.normal{
                                width: 172px;
                                background: #ff8900;
                            }
                            &.strong{
                                width: 260px;
                                background: #5bab3c;
                            }
                        }
                        .level{
                            line-height: 20px!important;
                            position: absolute;
                            top: 0;
                            left: 0;
                            span{
                                display: inline-block;
                                // float: left;
                                text-align: center;
                                font-size: 12px;
                                height: 20px;
                                line-height: 20px;
                                width: 85px;
                                border-right: 2px solid #fff;
                                color: #fff;
                                &:last-of-type{
                                    border-right: 0;
                                }
                            }
                        }
                    }
                }
            }
            button{
                // margin: 8px 0 8px 110px;
                color: #222;
                background-image: linear-gradient(135deg,#FFD000 0,#FFBD00 100%);
                border-width: 0;
                box-shadow: 0 2px 1px rgba(191,105,0,.15);
                background-size: 100%;
                padding: 7px 20px 6px;
                font-weight: 700;
                line-height: 1.5;
                letter-spacing: .1em;
                text-align: center;
                outline:none;
                user-select: none;
                cursor: pointer;
                // *zoom: 1;
            }
        }
        
        .protocol{
            position: relative;
            padding: 3px 10px 3px 93px;
            margin: 0 auto 8px;
            zoom: 1;
            font-size: 13px;
            color: #FE8C00;
        }
    }
    .foot{
        border-top: 1px solid #EEE;
        padding-top: 20px;
        text-align: center;
        font-size: 12px;
        font-family: initial;
        color: #999;
    }
}
</style>