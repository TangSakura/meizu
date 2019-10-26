<template>
  <div class="login-div">
    <form class="p-4">
      <h4 class="text-center mt-4">欢迎注册Shop</h4>
      <div class="form-group mt-4">
        <label>手机号码:</label>
        <input type="text" class="form-control" placeholder="+86">
      </div>
      <div class="form-group mt-2">
        <label>验证码:</label>
        <input type="text" class="form-control">
        <button class="btn btn-info btn-sm mt-2">获取手机验证码</button>
      </div>
      <div class="form-group mt-2">
        <label>密码:</label>
        <input type="password" class="form-control">
      </div>
      <div class="form-group mt-2">
        <label>确认密码:</label>
        <input type="password" class="form-control">
      </div>
      <div class="form-group">
        <router-link to="/login">
          <button class="btn btn-primary btn-block text-center">注册</button>
        </router-link>
      </div>
      <div class="form-group text-dark text-right">
        <router-link to="/login">已有账号？去登录</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {},
  mounted(){
     document.querySelector('body').setAttribute('style','background-image:url(./images/18001.jpg);background-size:cover;overflow:hidden')
  },
  beforeDestroy(){
     document.querySelector('body').removeAttribute('style')
  }
};
</script>

<style scoped>
.login-div {
  width: 400px;
  height: 600px;
  position: absolute;
  left: 60%;
  top: 14%;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, box-shadow 0.5s;
}
.login-div:hover {
  background-color: #ffffff;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
}
a {
  text-decoration: none;
}
</style>
