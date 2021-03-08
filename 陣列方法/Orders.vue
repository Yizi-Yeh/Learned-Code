<template>
<div>
<div class="text-right mt-4">
    </div>
    <table class="table mt-4">
      <thead>
        <tr class="text-center">
          <th width="100">訂單日期</th>
          <th width="100">活動名稱</th>
          <th width="100">活動日期</th>
          <th width="100">會員帳號</th>
          <th width="100">訂單金額</th>
          <th width="100">匯款金額</th>
          <th width="100">匯款日期</th>
          <th width="80">編輯</th> 
        </tr>
      </thead>
      <tbody  class="text-center">
        <tr v-for="item in this.totalOrder" :key="item._id">
           <td>{{ item.orderDate }}</td>
           <td>{{ item.p_id.p_id.title }}</td>
           <td>{{ item.p_id.date }}</td>
           <td>{{ 111 }}</td>
           <td>{{ item.p_id.price }}</td>
        </tr>
      </tbody>
    </table>
   
</div>
</template>
<script>
import Axios from 'axios'
import store from '@/store'
export default {
  data () {
    return {
      orderConfirm:{
        order:[{
          orderDate:'',
          p_id:{
          p_id:{title:''}
        }
        }]
      },
      userConfirm:[{
      }],
      index:0,
      totalOrder:[],
    }
  },
  computed: {
    user () {
      return store.state.user
    },
    products() {
      return store.state.products; 
    },
    newplanswiper(){
      return store.state.newplans
    },
    OrderLists() {
    return store.state.currentOrder; 
      },     
      OrderDetails() {
    return store.state.currentOrderDetails; 
  }, 
  },
    methods: {
        getOrder() {
        const api = `${process.env.VUE_APP_API}`+ '/users/order'
        Axios.get(api).then((response) => {
        if(response.data.success){
        this.orderConfirm = response.data.result
            this.getOrderList()
          }console.log('已取得訂單資料',response.data.result)
        })
        },
        // 取得報名資料
        getOrderUserDetails() {
        const api = `${process.env.VUE_APP_API}`+ '/userdetails'
        Axios.get(api).then((response) => {
        if(response.data.success){
        this.userConfirm = response.data.result
          
          }console.log('已取得報名資料',response.data)
        })
        },
        getOrderList(){
          const orderList = new Set()
          this.OrderLists.forEach((item) => { orderList.add(item.order);
          })
         this.totalOrder = Array.from(orderList).flat(Infinity) 
        },
    },
    created() {
      this.getOrder() 
      this.getOrderUserDetails()
       store.dispatch('getOrders')
       store.dispatch('getOrderUserDetails')
    }
}
</script>
