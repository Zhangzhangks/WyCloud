<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="1000" lazy-render indicator-color="#fff">
      <van-swipe-item v-for="item in list" :key="item.targetId">
        <img :src="item.pic" alt="" :title="item.typeTitle">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { getSwiper } from '../Api/swiper'

const list = ref([]);
onMounted(async () => {
  let { banners } = await getSwiper({ type: 2 });
  list.value = banners;
  // console.log(list.value);
})
</script>
<style lang="less" scoped>
.swiper {
  width: 100%;
  height: 4.4rem;
  // background-color: red;
  overflow: hidden;

  .my-swipe {
    width: 90%;
    border-radius: 0.4rem;
    height: 3.6rem;
    margin-left: 5%;
    margin-top: 5%;

    img {
      width: 100%;
      height: 100%;

      z-index: -22;

    }

    :deep(.van-swipe__indicators) {
      z-index: 99;
      bottom: 20px;
    }
  }
}
</style>
