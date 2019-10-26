<template>
    <div class="container">
        <h3 class="m-3" v-cloak>管理系统 3.0</h3>
        <div class="mb-2 text-right">
            <router-link to="user">
                 <button class="btn btn-warning">管理用户</button>
            </router-link>
            <button class="btn btn-outline-info btn ml-2">管理员 陈映宏</button>      
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="co1">#</th>
                    <th scope="col">图片</th>
                    <th scope="col">名称</th>
                    <th scope="col">介绍</th>
                    <th scope="col">价格</th>
                    <th scope="col" class="text-center">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in list" v-cloak :key="index">
                    <th scope="row" >{{index+1}}</th>
                    <td>
                        <img :src="item.photo" alt="..." style="width:40px;height:50px">
                    </td>
                    <td>{{item.name}}</td>
                    <td>{{item.introduce}}</td>
                    <td>
                        <goodprice currency="￥" precision="2" :value="item.price"></goodprice>
                    </td>
                    <td class="text-center">
                        <button class="btn btn-primary btn-sm" @click="rePair(index)"> 修 改 </button>
                        <button class="btn btn-danger btn-sm ml-2" @click="del(index)"> 下 架 </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="text-right" style="margin-right:43px">
             <button class="btn btn-primary" @click="add">添加商品</button>
        </div>
        <!-- 增加新商品 -->
        <div id="login" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">增加新商品</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>商品名：</label>
                            <input type="text" class="form-control" v-model="newsname">
                        </div>
                        <div class="form-group">
                            <label>图片地址：</label>
                            <input type="text" class="form-control" v-model="newsphoto">
                        </div>
                        <div class="form-group">
                            <label>介绍：</label>
                            <input type="text" class="form-control" v-model="newstext">
                        </div>
                        <div class="form-group">
                            <label>价格：</label>
                            <input type="text" class="form-control" v-model="newsprice">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"> 关 闭 </button>
                        <button type="button" class="btn btn-primary" @click="addSave"> 保 存 </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 修改商品信息 -->
        <div id="repair" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">修改商品信息</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>商品名：</label>
                            <input type="text" class="form-control" v-model="newsname">
                        </div>
                        <div class="form-group">
                            <label>图片地址：</label>
                            <input type="text" class="form-control" v-model="newsphoto">
                        </div>
                        <div class="form-group">
                            <label>介绍：</label>
                            <input type="text" class="form-control" v-model="newstext">
                        </div>
                        <div class="form-group">
                            <label>价格：</label>
                            <input type="text" class="form-control" v-model="newsprice">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"> 取 消 </button>
                        <button type="button" class="btn btn-primary" @click="reSave"> 修 改 </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 下架商品 -->
        <div id="del" class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">下架商品</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {{delStuName}}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"> 取 消 </button>
                        <button type="button" class="btn btn-primary" @click="delSave"> 确 定 </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import goodprice from './GoodPrice'

export default {
        components:{goodprice},
        data(){
            return{
                newsname: '',
                newsphoto:'',
                newsprice:0,
                newstext: '',
                delStuName:'',
                idx: -1,
            }},
            props:['list'],
            methods: {
                add() { 
                    $('#login').modal('show');
                    this.newsname = this.newsphoto  = this.newstext ='';
                    this.newsprice = 0;
                },
                addSave() { //保存添加的商品信息
                        if(this.newsname == '' || this.newsphoto == ''  || this.newstext =='')
                        alert('不可为空！')
                        else{
                            this.list.push({pid:this.idx,photo:this.newsphoto,name:this.newsname,introduce:this.newstext,price:parseInt(this.newsprice)});
                            $('#login').modal('hide');
                        }
                },
                rePair(e) { //修改商品
                    $('#repair').modal('show');
                    this.idx = e;
                    let newlist = this.list[e];
                    this.newsname = newlist.name;
                    this.newsphoto = newlist.photo;
                    this.newsprice = newlist.price;
                    this.newstext = newlist.introduce;
                    // console.log(typeof(this.newsprice));
                },
                reSave() { //保存修改
                    this.list.splice(this.idx, 1,{pid:this.idx,photo:this.newsphoto,name:this.newsname,introduce:this.newstext,price:parseInt(this.newsprice)});
                    $('#repair').modal('hide');
                },
                del(e) { //弹出删除modal
                    $('#del').modal('show');
                    this.idx = e;
                    this.delStuName = `是否删除【${this.list[e].name}】`
                },
                delSave() { //删除确定
                    this.list.splice(this.idx, 1);
                    $('#del').modal('hide');
                }
            },
            mounted(){
                document.querySelector('body').setAttribute('style','background-color: #ffffff')
             },
            beforeDestroy(){
                document.querySelector('body').removeAttribute('style')
             }
}
</script>

<style scoped>

</style>
