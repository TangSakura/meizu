<template>
  <div>
    <div class="card-deck" style="margin-top:60px">
      <div class="card mt-4" style="min-width: 253px; max-width:253px" v-for="(item, index) in items" :key="index">
        <img :src="item.photo" class="card-img-top ml-4 mt-4 pl-1" alt="...">
        <div class="card-body text-center">
          <span class="h44">{{item.name}}</span><br>
          <span class="h66">{{item.introduce}}</span><br>
          <small>
              <goodprice currency="￥" precision="2" :value="item.price"></goodprice>
              <i class="fas fa-plus-circle ml-1 cursor-pointer" @click="$emit('addcart',item)" style="font-size:15px"></i>
          </small>
        </div>
      </div>
    </div>
  <footer></footer>

  </div>
</template>

<script>
import goodprice from './GoodPrice'

export default {
  name: "HomePage",
  components:{goodprice},
  props:['items'],
  data(){
      return{
          
      }
  },
  methods:{
    }
  }

</script>

<style scoped>
.card{
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, box-shadow 0.5s;
}
.card:hover{
  transform: translateY(-5px);
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);

}
img{
    width: 200px;
}
.h44{
	font-size: 14px;
	color: #333;
    margin-top: 30px;
    font-weight: bold;
}
.h66{
	font-size: 12px;
    color: #999;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #E02B41;
}
footer{
    width: 50px;
    height: 30px;
}
.buy{
  border-radius:50%;
  padding: 0;
  width: 20px;  
  height: 20px;
}
</style>
