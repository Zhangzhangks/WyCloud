<template>
  <router-view></router-view>
  <itemBottom></itemBottom>
</template>
<script setup>
import { ref, reactive } from "vue";
import itemBottom from "./components/Item/itemBottom.vue";


</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

.icon {
  width: 0.5rem
    /* 25px -> .5rem */
  ;
  height: 0.5rem
    /* 25px -> .5rem */
  ;
}

// .router-link-exact-active {
//   color: red;
// }
</style>
