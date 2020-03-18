<template>

  <div data-type="index">
    <div class="am-g tpl-g">

      <Header></Header>
      <Skin></Skin>
      <Sidebar></Sidebar>
    </div>
  </div>


</template>

<script>

  import Header from "./common/Header";
  import Skin from "./common/Skin";
  import Sidebar from "./common/Sidebar";

  export default {
    name: "Home",
    components: {
      Header,
      Skin,
      Sidebar,
    },
    data() {

    },
    created() {
    },

  };
</script>

<style scoped>

</style>
