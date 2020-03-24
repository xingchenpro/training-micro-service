<template>

  <div data-type="index">
    <div class="am-g tpl-g">
      <Header></Header>
      <Skin></Skin>
      <keep-alive>
        <!--显示路由匹配到的组件-->
        <router-view ></router-view>
      </keep-alive>
      <Sidebar></Sidebar>
      <Footer></Footer>
    </div>
  </div>

</template>

<script>

  import Header from "./common/Header";
  import Skin from "./common/Skin";
  import Sidebar from "./common/Sidebar";
  import Footer from "./common/Footer";

  export default {
    name: "Home",
    components: {
      Header,
      Skin,
      Sidebar,
      Footer,
    },
    data() {
      return {

      };
    },
    created() {
    },

  };
</script>

<style scoped>

</style>
