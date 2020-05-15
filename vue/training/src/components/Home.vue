<template>

  <div data-type="index">
    <div class="am-g tpl-g">
      <Header></Header>
    <!--  <Skin></Skin>-->
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

      this.$axios.get('/basic-service/v1/info/teachers'+"?username="+sessionStorage.getItem("username")+"&token="+sessionStorage.getItem("token")).then( (res)=>{
        sessionStorage.setItem('teachers',JSON.stringify(res.data));
      }).catch( (err)=>{
        console.log(err);
      });

      this.$axios.get('/basic-service/v1/info/classes'+"?username="+sessionStorage.getItem("username")+"&token="+sessionStorage.getItem("token")).then( (res)=>{
        sessionStorage.setItem('classes',JSON.stringify(res.data));
      }).catch( (err)=>{
        console.log(err);
      });

    },

  };
</script>

<style scoped>

</style>
