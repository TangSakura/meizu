<template>
  <div class="login-div">
    <form class="p-4">
      <h4 class="text-center mt-4">个人信息修改</h4>
      <div class="form-group mt-4">
        头像:
        <img src="../../public/images/touxiang.png" alt="...">
      </div>
      <div class="form-group mt-4 form-inline">
        昵称：
        <input type="text" class="form-control" placeholder="请输入昵称">
      </div>
      <div class="form-group mt-4 form-inline">
        签名：
        <input type="password" class="form-control" placeholder="请输入个性签名">
      </div>
      <div class="form-group mt-4 form-inline">
        生日：
        <input type="date" class="form-control">
      </div>
      <div class="form-group mt-4 form-inline">
        电话：
        <input type="text" class="form-control" placeholder="请输入手机号码">
      </div>
      <div class="form-group mt-4 form-inline">
        地区：
        <input type="address" class="form-control" placeholder="请输入您所在地">
      </div>
      <div class="form-group">
        <router-link to="/personal">
          <button class="btn btn-primary btn-block text-center">保存</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserMessage",
  components: {}
};
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
  margin-left: 10px;
}
.login-div {
  width: 400px;
  height: 600px;
  position: absolute;
  left: 37%;
  top: 12%;
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
