<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top bg-light justify-content-center row m-0"
      v-if="$route.path !=='/login' && $route.path !=='/register' && $route.path !=='/adlogin'"
    >
      <a class="navbar-brand col-sm-1 text-center" href="#">Shop</a>
      <div class="collapse navbar-collapse col-sm-5">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" tag="li">
              <span class="fas fa-home mr-1"></span>主页
            </router-link>
          </li>
          <!-- 下拉框 -->
          
          <li class="nav-item dropdown">
            <div class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-shopping-cart"></i>
                <span class="badge badge-primary mx-1">{{shoppingCart.count}}</span>
            </div>
            <div class="dropdown-menu">
              <a
                href="#"
                class="dropdown-item"
                v-for="(item,index) in shoppingCart.items"
                :key="item.e.pid"
              >
                <button
                  class="btn btn-dark mr-1"
                  @click="addBtn(index)"
                  style="padding: 0px; width: 20px;height: 20px;line-height: 16px;"
                >+</button>
                <span class="badge badge-primary mr-1">{{item.cnt}}</span>
                <button
                  class="btn btn-dark"
                  @click="reduceBtn(index)"
                  style="padding: 0px; width: 20px;height: 20px;line-height: 16px;"
                >-</button>
                {{item.e.name}}
                <goodprice currency="$" precision="2" :value="item.cnt*item.e.price"></goodprice>
              </a>
              <hr>
             <router-link to="/shoppingcart" class="dropdown-item">
               <i class="fa fa-shopping-cart mr-1"></i>购物管理
             </router-link>
              <b class="dropdown-item">
                共{{shoppingCart.count}}件，总价格
                <goodprice currency="$" precision="2" :value="shoppingCart.totalPrice"></goodprice>
              </b>
            </div>
          </li>
          
          <li class="nav-item">
            <router-link to="/personal" tag="li" v-if="!isadmin">
              <span class="fas fa-user mr-1"></span>个人中心
            </router-link>
          </li>
        </ul>
        <router-link class="text-white" to="/login">
            <button class="btn btn-sm btn-info mr-2">登录</button>
        </router-link>
        <router-link class="text-white" to="/register">
            <button class="btn btn-sm btn-info mr-2">注册</button>
        </router-link>
        <router-link class="text-white" to="/admin" v-if="isadmin">
            <button class="btn btn-sm btn-danger">管理员</button>
        </router-link>
      </div>
      <div class="collapse navbar-collapse col-sm-3">
        <form class="form-inline my-2 my-lg-0 pl-4 ml-5">
          <input class="form-control mr-sm-2" type="search" placeholder="搜索" v-model="message">
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit" @click="search">Go</button>
        </form>
      </div>
    </nav>
    <div class="container">
      <transition enter-active-class="animated bounceInDown">
        <router-view @noadmin="isadmin = false" @yesadmin="isadmin = true" @payfor="payfor($event)" 
        @add="addBtn($event)" @reduce="reduceBtn($event)" @addcart="addShoppingCart($event)" 
        :totalprice="shoppingCart.totalPrice" :cart="shoppingCart.items" :items="products" 
        :list="products" :userlist="lists">
        </router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import goodprice from './components/GoodPrice'

export default {
  name: "app",
  components:{goodprice},
  data() {
    return {
      message:'',
      isadmin:false,
      shoppingCart: {
        items: [],
        count: 0,
        totalPrice: 0
      },
      list:[
              {pid:'1',photo:'./images/16plus.png',name:'魅族 16th',introduce:'晓龙845 年度旗舰',price:2698},
              {pid:'2',photo:'./images/6T.png',name:'魅族 S6',introduce:'忠于体验 打磨颜值',price:999},
              {pid:'3',photo:'./images/e31.png',name:'魅蓝 E3',introduce:'晓龙845 屏下指纹',price:2598},
              {pid:'4',photo:'./images/15plus.png',name:'魅族 15plus',introduce:'全面屏 人机交互新体验',price:2498},
              {pid:'5',photo:'./images/ep51.png',name:'EP51 蓝牙运动耳机',introduce:'臻享音质 自在运动',price:169},
              {pid:'6',photo:'./images/er5.png',name:'HD50 头戴式耳机',introduce:'清新简洁，有音质更有颜值',price:299},
              {pid:'7',photo:'./images/er2.png',name:'EP2X 蓝牙耳机',introduce:'契合声音的流动之美',price:198},
              {pid:'8',photo:'./images/b4.png',name:'无线手环',introduce:'时尚个性 动无拘束',price:1258},
              {pid:'9',photo:'./images/bao.png',name:'休闲旅行双肩包',introduce:'曲面一体式 多功能夹层',price:169},
              {pid:'10',photo:'./images/n6tao1.png',name:'魅蓝S6 潮趣真我保护壳',introduce:'致敬艺术经典',price:19},
              {pid:'11',photo:'./images/cdb.png',name:'双向闪充移动电源',introduce:'潮流新色 闪充升级',price:149},
              {pid:'12',photo:'./images/m-u.png',name:'多功能数据线',introduce:'出众性能 全面升级',price:29},

          ],
          products:[
              {pid:'1',photo:'./images/16plus.png',name:'魅族 16th',introduce:'晓龙845 年度旗舰',price:2698},
              {pid:'2',photo:'./images/6T.png',name:'魅族 S6',introduce:'忠于体验 打磨颜值',price:999},
              {pid:'3',photo:'./images/e31.png',name:'魅蓝 E3',introduce:'晓龙845 屏下指纹',price:2598},
              {pid:'4',photo:'./images/15plus.png',name:'魅族 15plus',introduce:'全面屏 人机交互新体验',price:2498},
              {pid:'5',photo:'./images/ep51.png',name:'EP51 蓝牙运动耳机',introduce:'臻享音质 自在运动',price:169},
              {pid:'6',photo:'./images/er5.png',name:'HD50 头戴式耳机',introduce:'清新简洁，有音质更有颜值',price:299},
              {pid:'7',photo:'./images/er2.png',name:'EP2X 蓝牙耳机',introduce:'契合声音的流动之美',price:198},
              {pid:'8',photo:'./images/b4.png',name:'无线手环',introduce:'时尚个性 动无拘束',price:1258},
              {pid:'9',photo:'./images/bao.png',name:'休闲旅行双肩包',introduce:'曲面一体式 多功能夹层',price:169},
              {pid:'10',photo:'./images/n6tao1.png',name:'魅蓝S6 潮趣真我保护壳',introduce:'致敬艺术经典',price:19},
              {pid:'11',photo:'./images/cdb.png',name:'双向闪充移动电源',introduce:'潮流新色 闪充升级',price:149},
              {pid:'12',photo:'./images/m-u.png',name:'多功能数据线',introduce:'出众性能 全面升级',price:29},

          ],
          lists: [
        {pid:1,chance: true,username: "Kirito",account: "222222",password: "222222",status: "可登录"},
        {pid:2,chance: true,username: "陈映宏",account: "333333",password: "333333",status: "可登录"}
      ],
    };
  },
  methods: {
    search(){
        this.products = [];
        for(let i=0;i<this.list.length;i++)
        {
        if(this.list[i].name.indexOf(this.message) != -1){//有对应的名字
          this.products.push(this.list[i]);
        }
        }
        // console.log(this.products);
    },
    addShoppingCart(data) {
      let a = -1;
      for (let i = 0; i < this.shoppingCart.items.length; i++) {
        if (this.shoppingCart.items[i].e.pid == data.pid) {
          a = i;
          break;
        }
      }
      if (a == -1) {
        this.shoppingCart.items.push(new getItems(data, 1));
      } else {
        this.shoppingCart.items[a].cnt++;
      }
      this.shoppingCart.count++;
      this.shoppingCart.totalPrice += data.price;
    },
    addBtn(index) {
      this.shoppingCart.items[index].cnt++;
      this.shoppingCart.count++;
      this.shoppingCart.totalPrice += this.shoppingCart.items[index].e.price;
    },
    reduceBtn(index) {
      this.shoppingCart.items[index].cnt--;
      this.shoppingCart.count--;
      this.shoppingCart.totalPrice -= this.shoppingCart.items[index].e.price;
      if (this.shoppingCart.items[index].cnt == 0)
        this.shoppingCart.items.splice(index, 1);
    },
    payfor(){
      this.shoppingCart.items = [];
      this.shoppingCart.count = 0;
      this.shoppingCart.totalPrice = 0;
    }
  },
};
function getItems(e, cnt) {
  this.e = e;
  this.cnt = cnt;
}
</script>

<style scoped>
nav {
  height: 55.6px;
}
ul {
  height: 55.6px;
}
li {
  width: 100px;
  text-align: center;
  line-height: 55.6px;
}
li:hover {
  color: blue;
}
.collapse {
  position: relative;
  cursor: pointer;
}
a {
  text-decoration: none;
}
</style>
