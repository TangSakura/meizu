<template>
  <div class="login-div">
    <form class="p-4">
      <h4 class="text-center mt-4">欢迎登录Shop</h4>
      <div class="form-group mt-4">
        <label>手机号码:</label>
        <input type="text" class="form-control" v-model="tel" placeholder="+86">
      </div>
      <div class="form-group mt-4">
        <label>密码:</label>
        <input type="password" v-model="password" class="form-control">
      </div>
      <div class="form-group form-check align-middle">
        <input type="checkbox" class="form-check-input align-middle">
        <label class="form-check-label align-middle">Remember me</label>
      </div>
      <div class="form-group">
        <router-link :to="flag">
          <button class="btn btn-primary btn-block text-center" @click="login">登录</button>
        </router-link>
      </div>
      <div class="form-group">
        <router-link to="/admin">
          <button class="btn btn-danger btn-block text-center" @click="$emit('yesadmin')">管理员登录</button>
        </router-link>
      </div>
      <div class="form-group text-dark text-right">
        <router-link to="/register">没有账号？去注册</router-link>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      tel:'',
      password:'',
      flag:'/personal'
    }
  },
  props:['userlist'],
  methods:{
    login(){
      if(this.tel == this.userlist[0].account && this.password == this.userlist[0].password && !this.userlist[0].chance){
        this.flag = '/login';
        alert('您的账号已被限制登录！')
      }
      this.$emit('noadmin')
    }
  },
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
