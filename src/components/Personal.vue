<template>
  <div>
    <header>
      <div class="card" style="margin-top:80px">
        <div class="row no-gutters">
          <div class="col-md-2 position-relative">
            <img class="img-1" src="../../public\/images/touxiang.png" alt="...">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">Kirito</h5>
              <p class="card-text">阁下何不乘风起，扶摇直上九万里</p>
              <p class="card-text">
                <router-link to="/usermessage">
                  <small class="text-primary" >修改个人信息 ></small>
                </router-link>
              </p>
            </div>
          </div>
          <div>
            <div class="card-body">
              <p class="card-text">总积分：456分</p>
              <p class="card-text">星座：天蝎座</p>
              <p class="card-text">地点：福州</p>
            </div>
          </div>
        </div>
      </div>
    </header>
    <footer>
      <div class="row mt-4">
        <div class="col-sm-6">
          <div class="card">
            <h6 class="card-header row">
              <div class="col-sm-6">订单状态</div>
              <div class="col-sm-6 text-right">
                <small class="text-primary">查看全部订单 ></small>
              </div>
            </h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-md-3 position-relative">
                    <img class="img-2" src="../../public\/images/zhifu.jpg" alt="...">
                  </div>
                  <div class="col-md-6 ">
                      <p class="m-0">待支付订单: 1</p>
                      <small class="text-primary">查看全部订单 ></small>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                  <div class="row">
                  <div class="col-md-3 position-relative">
                    <img class="img-2" src="../../public\/images/shouhuo.jpg" alt="...">
                  </div>
                  <div class="col-md-6 ">
                      <p class="m-0">待收货订单: 1</p>
                      <small class="text-primary">查看全部订单 ></small>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                  <div class="row">
                  <div class="col-md-3 position-relative">
                    <img class="img-2" src="../../public\/images/zulin.jpg" alt="...">
                  </div>
                  <div class="col-md-6 ">
                      <p class="m-0">租赁中订单: 1</p>
                      <small class="text-primary">查看全部订单 ></small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <h6 class="card-header row">
              <div class="col-sm-6">消息提醒</div>
              <div class="col-sm-6 text-right">
                <small class="text-primary">查看全部消息 ></small>
              </div>
            </h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-md-3 position-relative">
                        <small>2019-6-24</small> <br>
                        <small>14:02:23</small>
                  </div>
                  <div class="col-md-9 ">
                      <p class="m-0">您购买的【小米9 数据线】已发货</p>
                      <small class="text-primary">查看详情 ></small>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                  <div class="row">
                  <div class="col-md-3 position-relative">
                        <small>2019-6-24</small> <br>
                        <small>14:02:23</small>
                  </div>
                  <div class="col-md-9 ">
                      <p class="m-0">您购买的【小米9 数据线】已发货</p>
                      <small class="text-primary">查看详情 ></small>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                  <div class="row">
                  <div class="col-md-3 position-relative">
                        <small>2019-6-24</small> <br>
                        <small>14:02:23</small>
                  </div>
                  <div class="col-md-9 ">
                      <p class="m-0">您购买的【小米9 数据线】已发货</p>
                      <small class="text-primary">查看详情 ></small>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    
  </div>
</template>

<script>

export default {
  name: "Personal",
  components: {}
};
</script>

<style scoped>
.img-1 {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  left: 30%;
  top: 20%;
  cursor: pointer;
}
.img-2 {
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: -25%;
  cursor: pointer;
}
a {
  text-decoration: none;
}
</style>
