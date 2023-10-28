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
            <svg class="icon liebiao" aria-hidden="true" @click="play" v-if="isbtnShow">
                <use xlink:href="#icon-bofanganniu"></use>
            </svg>
            <svg class="icon liebiao" aria-hidden="true" @click="play" v-else>
                <use xlink:href="#icon-weibiaoti--"></use>
            </svg>
            <svg class="icon liebiao" aria-hidden="true">
                <use xlink:href="#icon-zu"></use>
            </svg>
        </div>
        <audio :src="`https://music.163.com/song/media/outer/url?id=${Musciid}.mp3`" ref="audio"></audio>
    </div>
</template>
<script setup >
import { ref, reactive, toRefs } from 'vue'
import { useAlertsStore } from '../../Store/itemList'
import { storeToRefs } from 'pinia'
const { playList, Musciid, playListIndex, isbtnShow } = storeToRefs(useAlertsStore());
// console.log(playList.value[playListIndex.value]);
const audio = ref('')
const play = function () {
    isbtnShow.value = !isbtnShow.value;
    console.log(isbtnShow.value);
    if (isbtnShow.value) { return audio.value.play() } else { audio.value.pause() }
}


</script>


<style lang='less' scoped>
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