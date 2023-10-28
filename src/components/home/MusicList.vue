<template>
    <div class="musiclist">
        <div class="musicTop">
            <div class="title">发现好歌单</div>
            <span>查看更多</span>
        </div>

        <div class="rememcomdMusic" v-if="musiclist.length > 0">
            <van-swipe :loop="false" class="musicItem" :show-indicators="false" :width="130">
                <van-swipe-item v-for="item in  musiclist " :key="item.id">
                    <router-link :to="{ path: `/itemMusic`, query: { id: item.id } }">
                        <img :src="item.picUrl" alt="" />
                        <span>{{ item.name }}</span>
                        <div class="iconItems">
                            <svg class="svg-icon" aria-hidden="true">
                                <use xlink:href="#icon-24gl-play"></use>
                            </svg>
                            <span>{{ item.playCount }}</span>
                        </div>
                    </router-link>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { getMusicList } from "../Api/swiper";
const musiclist = ref([]);
onMounted(async () => {
    let { result } = await getMusicList({ limit: 10 });
    musiclist.value = result;
    // console.log(result);
    musiclist.value.forEach(ele => {
        if (ele.playCount > 100000000) {
            return ele.playCount = (ele.playCount / 100000).toFixed(2) + "亿";
        }
        if (ele.playCount > 10000000) {
            return ele.playCount = (ele.playCount / 10000000).toFixed(2) + "万";
        } else return
    })
});



</script>

<style lang="less" scoped>
.musiclist {
    margin-top: 0.2rem;

    .musicTop {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0.2rem;

        .title {
            font-size: 0.4rem;
            font-weight: 900;
        }
    }

    .musicItem {
        width: 100%;
        height: 3.6rem;
        overflow: hidden;
        border-radius: 0.2rem;

        // background-color: red;
        img {
            width: 96%;
            height: 2.6rem;
            object-fit: cover;
            display: block;
            border-radius: 0.2rem;

            +span {
                font-size: 13px;
                color: #333;
            }
        }
    }
}

:deep(.van-swipe-item) {
    width: 40% !important;
    position: relative;

    &:nth-child(1) {
        margin-left: 0.15rem;
    }

    .iconItems {
        position: absolute;
        top: 0.2rem;
        right: 0.6rem;
        z-index: 99;
        // border: 1px solid #000;
        height: 0.4rem;
        display: flex;
        align-items: center;
        color: #fff;

        .svg-icon {
            width: 0.4rem;
            height: 0.4rem;
            margin-right: 0.1rem;
        }
    }
}

:deep(.van-swipe__track) {
    width: 100% !important;
}
</style>
