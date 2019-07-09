<template>
  <div id="app">
    <NavBar></NavBar>

    <keep-alive>
      <router-view />
    </keep-alive>
    <Footer></Footer>
    <Loading v-show="loading" />
  </div>
</template>

<script>
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import jwt_decode from "jwt-decode";
import Loading from "./components/common/loading";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    NavBar,
    Footer,
    Loading
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  created() {
    if (localStorage.jwtToken) {
      const decoded = jwt_decode(localStorage.jwtToken);
      // 检验 token 是否过期
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // this.$store.dispatch("setIsAuthenticated", !this.isEmpty(decoded));
        // this.$store.dispatch("setUser", decoded);
        this.$store.dispatch("clearCurrentState");
        this.$router.push("/login");
      } else {
        this.$store.dispatch("setIsAuthenticated", !this.isEmpty(decoded));
        this.$store.dispatch("setUser", decoded);
      }
    }
  },
  methods: {
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

<style lang="scss">
</style>
