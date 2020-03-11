<template>

  <div class="login-wrapper">
    <div class="login">
      <h4 style="color:white;text-align: center">

      </h4>
     <form class="am-form tpl-form-line-form">
        <div class="am-form-group">
          <input type="text" class="tpl-form-input" id="username" v-model="loginForm.username" placeholder="请输入账号">
        </div>
        <div class="am-form-group">
          <input type="password" class="tpl-form-input" id="password" v-model="loginForm.password" placeholder="请输入密码">
        </div>
        <div class="am-form-group tpl-login-remember-me">
          <input id="remember-me" type="checkbox">
          <label for="remember-me">
            记住密码
          </label>
        </div>
        <div class="am-form-group">
          <button type="button" @click="submitClick"
                  class="am-btn am-btn-primary  am-btn-block tpl-btn-bg-color-success  tpl-login-btn">提交
          </button>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
  import {postRequest} from "../utils/api"
  import {getRequest} from "../utils/api"
  import {putRequest} from "../utils/api"

  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          username: 'admin',
          password: '124'
        },
      }
    },
    methods: {
      submitClick: function () {
        var _this = this;
        postRequest('/v1/user/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        }).then(resp => {
          if (resp.status === 200) {
            //成功
            if (resp.data.resultCode === '200') {
              alert('登录成功');
              _this.$router.replace({path: '/home'});
            } else {
              alert('账号密码错误!');
            }
          } else {
            //失败
            alert('登录失败!');
          }
        }, resp => {
          alert('找不到服务器!');
        });
      }
    }
  }
</script>

<style scoped>


  .login-wrapper{
    background:url("../../static/images/雪山.jpg");
    height: 100%;
    background-size: 100% 100%  ;

  }

  .login{
    width:400px;
    height:100%;
    margin:0 auto;
    background:rgba(255,255,255,0);
    padding: 270px 50px;
    border-radius:10px;
  }

</style>
