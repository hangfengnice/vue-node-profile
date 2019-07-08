<template>
  <div id="app">
    <NavBar></NavBar>

    <keep-alive>
    <router-view />

    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./components/navBar";
import Footer from './components/footer'
import jwt_decode from 'jwt-decode'

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    NavBar,
    Footer

  },
  created(){
    if(localStorage.jwtToken){
      const decoded = jwt_decode(localStorage.jwtToken)
      this.$store.dispatch('setIsAuthenticated',!this.isEmpty(decoded))
      this.$store.dispatch('setUser',decoded)
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
