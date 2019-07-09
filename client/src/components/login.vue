<template>
  <!-- Login -->
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">登录</h1>
          <p class="lead text-center">使用已有的账户登录</p>
          <form @submit.prevent="submit" autocomplete="off" method="post">
            <TextField
              type="email"
              placeholder="邮箱地址"
              name="email"
              v-model="user.email"
              :error="errors.email"
            />
            <TextField
              type="password"
              name="password"
              placeholder="密码"
              v-model="user.password"
              :error="errors.password"
            />
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from "./common/textFiledGroup";
import jwt_decode from "jwt-decode";
export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: " "
      },
      errors: {}
    };
  },
  components: {
    TextField
  },
  methods: {
    submit() {
      this.$axios
        .post("/api/login", this.user)
        .then(res => {
          // console.log(res.data)
          const { token } = res.data;
          window.localStorage.setItem("jwtToken", token);
          const decoded = jwt_decode(token);
          // console.log(decoded);
          this.$store.dispatch("setIsAuthenticated", !this.isEmpty(decoded));
          this.$store.dispatch("setUser", decoded);
          this.$router.push('/dashboard')
        })
        .catch(err => {
          // console.log(err.response.data)
          this.errors = err.response.data;
        });
    },
    isEmpty: value => {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>

<style lang='scss' scoped>
</style>