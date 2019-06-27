<template>
  <div class="details container">
    <router-link to='/' class='btn btn-success'>返回首页</router-link>
    <h1 class="page-header">详细信息
      <span class='pull-right'>
        <router-link class='btn btn-primary' :to='"/edit/"+customer.id'>
        编辑
        </router-link>
        <button class='btn btn-danger' @click='deleteCustomer(customer.id)'>删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class=" glyphicon glyphicon-phone-alt">{{customer.phone}}</span>
      </li>
      <li class="list-group-item">
        <span class=" glyphicon glyphicon-envelope">{{customer.email}}</span>
      </li>
      <li class="list-group-item">
        <span class=" glyphicon glyphicon-wrench">{{customer.education}}</span>
      </li>
      <li class="list-group-item">
        <span class=" glyphicon glyphicon-home">{{customer.address}}</span>
      </li>
      <li class="list-group-item">
        <span class=" glyphicon glyphicon-user">{{customer.name}}</span>
      </li>
      <li class="list-group-item">
        <span class=" glyphicon glyphicon-envelope">{{customer.profile}}</span>
      </li>
      <li class="list-group-item">
        <span class=" glyphicon glyphicon-education">{{customer.profession}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "customersdetails",
  data() {
    return {
      customer: {}
    };
  },
  methods: {
    fetchCustomers(id) {
      this.$http.get("https://jsonplaceholder.typicode.com/users/" + id).then(res => {
        // console.log(res);
       this.customer = {
          name:res.data.name,
          phone: res.data.phone,
          email: res.data.email,
          address: res.data.address.street,
          company: res.data.company.name,
          profession: res.data.profession,
          profile: res.data.profile,
          id: res.data.id
        }
      });
    },
    deleteCustomer(id){
       this.$http.delete("http://jsonplaceholder.typicode.com/users/" + id).then(res => {
        // console.log(res);
        this.$router.push({path:'/',query:{alert:'用户删除成功'}})
      });
    }
  },
  created() {
    console.log(this.$route.params.id)
    this.fetchCustomers(this.$route.params.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
