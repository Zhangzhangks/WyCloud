<template>
    <div class="FooterMusic">
        <div class="footerLeft" @click="updateDetailShow">
            <img :src="playList[playListIndex].al.picUrl" alt="" />
            <div class="author">
                <span>{{ playList[playListIndex].al.name }}</span>
                <span>横滑切换上下首哦</span>
            </div>
        </div>
        <div class="footerRight">
            <svg class="icon liebiao" aria-hidden="true" @click="playAudio" v-if="isBofang">
                <use xlink:href="#icon-bofanganniu"></use>
            </svg>
            <svg class="icon liebiao" aria-hidden="true" @click="playAudio" v-else>
                <use xlink:href="#icon-weibiaoti--"></use>
            </svg>
            <svg class="icon liebiao" aria-hidden="true">
                <use xlink:href="#icon-zu"></use>
            </svg>
        </div>
        <audio :src="`https://music.163.com/song/media/outer/url?id=${Musciid}.mp3`" ref="audioRef"></audio>
    </div>

    <!-- 右侧弹出 -->
    <van-popup v-model:show="detailShow" position="right" :style="{ height: '100%', width: '100%' }">
        <MusciDetail :musicList="playList[playListIndex]" :play="playAudio" :isBofang="isBofang" />
    </van-popup>
</template>
<script setup>
import { ref, reactive, onMounted, toRefs, watch, watchEffect } from "vue";
import { useAlertsStore } from "../../Store/itemList";
import { storeToRefs } from "pinia";
import MusciDetail from './MusciDetail.vue'
const { playList, Musciid, playListIndex, isBofang, detailShow, lyricList } = storeToRefs(
    useAlertsStore()
);
const { getGeCiValue } = useAlertsStore();

// console.log(playList.value[playListIndex.value]);
const audioRef = ref("");
const playAudio = function () {
    isBofang.value = !isBofang.value;
    if (!isBofang.value) {
        audioRef.value.play();
    } else {
        audioRef.value.pause();
    }

};
const updateDetailShow = function () {
    detailShow.value = !detailShow.value
}
const autoPlay = () => {
    // audio.value.play();

};
// 监听索引变化自动播放
watch(
    [playListIndex, playList],
    ([pre, list], [newvalue, old]) => {
        audioRef.value.autoplay = true;
        if (audioRef.value.pause) {

            isBofang.value = false;
        }

        if (list.length > old.length) {
            if (isBofang.value) {
                isBofang.value = true
            }
        }
        if (Musciid.value) {
            getGeCiValue(Musciid.value);
        }
    }


);
watchEffect(() => {

})
defineExpose({ autoPlay });
</script>

<style lang="less" scoped>
.FooterMusic {
    width: 100%;
    height: 1.4rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #999;
    display: flex;
    padding: 0.2rem;
    justify-content: space-between;

    .footerLeft {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        img {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }

        >.author {
            display: flex;
            flex-direction: column;
        }
    }

    .footerRight {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .icon {
            width: 0.6rem;
            height: 0.6rem;
        }
    }
}
</style>
