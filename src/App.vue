<template>
  <router-view></router-view>
  <itemBottom ref="bottmRef"></itemBottom>
</template>
<script setup>
import { ref, reactive } from "vue";
import itemBottom from './components/item/itemBottom.vue'
import { useAlertsStore } from '../src/Store/itemList'
import { storeToRefs } from "pinia";
const { bottmRef } = storeToRefs(useAlertsStore())
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
