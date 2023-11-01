<template>
  <div class="main">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-31liebiao"></use>
    </svg>
    <div class="topContent">
      <span>我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <svg class="icon" aria-hidden="true" @click="router.push('/search')">
      <use xlink:href="#icon-sousuo"></use>
    </svg>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import router from "../../router/router";
</script>
<style lang="less" scoped>
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1rem
    /* 50px -> 1rem */
  ;

  .icon {
    width: 0.5rem
      /* 25px -> .5rem */
    ;
    height: 0.5rem
      /* 25px -> .5rem */
    ;
  }

  .topContent {
    width: 65%;
    display: flex;
    justify-content: space-between;
    font-size: 0.36rem
      /* 18px -> .36rem */
    ;
  }
}

.active {
  font-weight: 900;
}
</style>
