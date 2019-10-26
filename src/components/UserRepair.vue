<template>
  <div class="container">
    <h3 class="m-3" v-cloak>.</h3>
    <div class="mb-2 text-right">
      <router-link to="/admin">
            <button class="btn btn-warning">管理商品</button>
      </router-link>
      <button class="btn btn-outline-info ml-2">管理员 陈映宏</button>      
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="co1">#</th>
          <th scope="col">用户名</th>
          <th scope="col">账号</th>
          <th scope="col">密码</th>
          <th scope="col">状态</th>
          <th scope="col" class="text-center">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in userlist" v-cloak :key="index">
          <th scope="row">{{index+1}}</th>
          <td>{{item.username}}</td>
          <td>{{item.account}}</td>
          <td>{{item.password}}</td>
          <td>{{item.status}}</td>
          <td class="text-center" v-if="item.pid == 1">
            <button class="btn btn-primary btn-sm" @click="rePair(index)">修 改</button>
            <button class="btn btn-danger btn-sm ml-2" v-if="flag" @click="stop(index)">禁止登录</button>
            <button class="btn btn-success btn-sm ml-2" v-else @click="allow(index)">允许登录</button>
          </td>
          <td class="text-center" v-else>
            <button class="btn btn-success btn-sm" @click="rePair(index)">超级管理员</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 修改信息 -->
    <div id="repair" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">修改用户信息</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>用户名：</label>
              <input type="text" class="form-control" v-model="newname" />
            </div>
            <div class="form-group">
              <label>账号：</label>
              <input type="text" class="form-control" disabled v-model="newaccount" />
            </div>
            <div class="form-group">
              <label>密码：</label>
              <input type="text" class="form-control" disabled v-model="newpassword" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取 消</button>
            <button type="button" class="btn btn-primary" @click="reSave">修 改</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      newname: "",
      newaccount: "",
      newpassword: "",
      newstatus: "",
      delStuName: "",
      idx: -1,
      flag:true
    };
  },
  props:['userlist'],
  methods: {
    rePair(e) {
      $("#repair").modal("show");
      this.idx = e;
      let newlist = this.userlist[e];
      this.newname = newlist.username;
      this.newaccount = newlist.account;
      this.newpassword = newlist.password;
    },
    reSave() {
      //保存修改
      this.userlist.splice(this.idx, 1, {pid: this.idx+1,username: this.newname,account: this.newaccount,password: this.newpassword,status: "可登录"});
      $("#repair").modal("hide");
    },
    stop(e) {
      this.userlist[e].status="无法登录";
      this.flag = !this.flag;
      this.userlist[e].chance = false;
    },
    allow(e) {
      this.userlist[e].status="可登录";
      this.flag = !this.flag;
      this.userlist[e].chance = true;
    }
  },
  mounted(){
     document.querySelector('body').setAttribute('style','background-color: #ffffff')
  },
  beforeDestroy(){
     document.querySelector('body').removeAttribute('style')
  }  
};
</script>

<style scoped>
</style>
