<template>
    <!-- 歌单详情页 -->
    <div class="musicdetail" v-if="musicDetail && musicDetailList">
        <itemTop :playlist="musicDetail" />
        <itemList :musicList="musicDetailList" :subscribedCount="musicDetail.subscribedCount" />
    </div>
</template>
<script setup >
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getMusicDetail, getMusicDetailList } from '../Api/swiper'
import itemTop from "../item/itemTop.vue"

import itemList from '../Item/itemList.vue'

const route = useRoute();
const musicDetailList = ref('')
const musicDetail = ref('');

onMounted(async () => {
    // 获取歌单详情
    const data = await getMusicDetail({ id: route.query.id });
    // 获取歌单详情歌曲
    let ListData = await getMusicDetailList({ id: route.query.id, })


    musicDetail.value = data.playlist;
    musicDetailList.value = ListData.songs


})
</script>


<style lang='less' scoped>
.musicdetail {
    width: 100%;
    height: 100%;
}
</style>