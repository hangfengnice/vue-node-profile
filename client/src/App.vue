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


export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    NavBar,
    Footer

  }
};
</script>

<style lang="scss">
</style>
