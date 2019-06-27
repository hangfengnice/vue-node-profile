<template>
  <div class="add container">
    <Alert v-if='alert' :message='alert'></Alert>
   <h1 class="page-header">添加用户</h1>
   <form v-on:submit='addCustomer'>
     <div class="well">
       <h4>用户信息</h4>
       <div class="form-group">
         <label >姓名</label>
         <input type="text" class="form-control"
         placeholder="name" v-model='customer.name'>
       </div>
       <div class="form-group">
         <label >电话</label>
         <input type="text" class="form-control"
         placeholder="phone" v-model='customer.phone'>
       </div>
       <div class="form-group">
         <label >邮箱</label>
         <input type="text" class="form-control"
         placeholder="email" v-model='customer.email'>
       </div>
       <div class="form-group">
         <label >学历</label>
         <input type="text" class="form-control"
         placeholder="education" v-model='customer.education'>
       </div>
       <div class="form-group">
         <label >address(地址)</label>
         <input type="text" class="form-control"
         placeholder="address" v-model='customer.address'>
       </div>
       <div class="form-group">
         <label >company(公司)</label>
         <input type="text" class="form-control"
         placeholder="company" v-model='customer.company'>
       </div>
       <div class="form-group">
         <label >个人简介</label>
         <!-- <input type="text" class="form-control"
         placeholder="name" v-model='customer.name'> -->
         <textarea class='form-control' v-model='customer.profile' rows="10"></textarea>
       </div>
       <button type='submit' class='btn btn-success'>添加</button>
     </div>
   </form>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'add',
  data(){
    return {
      customer:{

      },
      alert:''
    }
  },
  methods:{
    addCustomer(e){
      console.log(123)
      e.preventDefault();
      if(!this.customer.name || !this.customer.phone || !this.customer.email){
        this.alert = "请输入对应的信息"
      }else{
        const newCustomer ={
          name:this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          address: this.customer.address,
          company: this.customer.company,
          profession: this.customer.profession,
          profile: this.customer.profile
        }
        this.$http.post('https://jsonplaceholder.typicode.com/users',newCustomer)
        .then((res) => {
          this.$router.push({path:'/',query:{alert:'用户信息添加成功'}})
        })
      }
    }
  },
  components: {
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
