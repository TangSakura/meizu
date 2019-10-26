<template>
  <div>
    <h3 class="m-3" v-cloak>.</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="co1">#</th>
          <th scope="col">商品</th>
          <th scope="col">单价</th>
          <th scope="col">数量</th>
          <th scope="col">总价</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" v-cloak :key="index">
          <th scope="row">{{index+1}}</th>
          <td>{{item.e.name}}</td>
          <td>{{item.e.price}}</td>
          <td >
              <div>
                 <button class="btn btn-sm btn-outline-primary" @click="$emit('reduce',index)">-</button>
                    {{item.cnt}}
                 <button class="btn btn-sm btn-outline-primary" @click="$emit('add',index)">+</button>
              </div>
          </td>
          <td>{{item.e.price*item.cnt}}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-right px-5" style="margin-right:80px">
        <button class="btn btn-outline-danger btn-sm mt-2 mr-2">共计{{totalprice}}元</button>
        <button class="btn btn-primary btn-sm mt-2" @click="pay">结算</button>
    </div>
    
     
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: ["cart",'totalprice'],
  data(){
      return{
      }
  },
  methods: {
      pay(){
          let ispay = confirm('是否结算？');
          if(ispay == true){
            this.$emit('payfor')
            alert('结算成功~~')
          }
          else alert('结算失败！')
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
