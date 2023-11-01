<template>
  <topNav></topNav>
  <caruose></caruose>
  <iconList></iconList>
  <MusicList></MusicList>
</template>
<script setup>
import { ref, reactive } from "vue";
import topNav from "..//components/home/topNav.vue";
import caruose from "..//components/Swiper/swiper.vue";
import iconList from "..//components/home/iconList.vue";
import MusicList from '../components/home/MusicList.vue'
</script>

<style lang="less" scoped>
* {
  overflow: hidden;
}
</style>
