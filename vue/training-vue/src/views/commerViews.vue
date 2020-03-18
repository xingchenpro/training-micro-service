<template>
    <div>
      <router-view></router-view>
    </div>

</template>

<script>
import MenuTree from "./layout/aside/menuTree";

export default {
  components: {MenuTree},
  name: 'commerViews'
}
</script>

<style scoped>

</style>
