<template>
    <div class="searchTop">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <input type="text" placeholder="陈奕迅" @keydown.enter="searchStart" ref="iptRef" @keydown.esc="clear"
            pattern="^[\u4e00-\u9fa5a-zA-Z]{0,}$" v-model.trim="searchValue">
    </div>
    <div class="searchHistory">
        <div class="hisoryItme">
            <span>历史:</span>
            <svg class="icon" aria-hidden="true" @click="deleteItem">
                <use xlink:href="#icon-shanchu"></use>
            </svg>
        </div>
        <span v-for="item in keyWord" class="spanKey" :key="item">{{ item }}</span>

    </div>
    <div class="itemList">
        <div class="item" v-for="(item, i) in songs" :key="i">
            <div class="itemLeft">
                <span class="leftSpan">{{ i + 1 }}</span>
                <div>
                    <p>{{ item.name }}</p>
                    <span v-for="(item1, index) in item.artists" :key="index">{{
                        item1.name
                    }}</span>
                </div>
            </div>
            <div class="itemRight">
                <svg class="icon bofang" aria-hidden="true" v-if='item.mvid != 0'>
                    <use xlink:href="#icon-shipin"></use>
                </svg>
                <svg class="icon liebiao" aria-hidden="true">
                    <use xlink:href="#icon-31liebiao"></use>
                </svg>
            </div>
        </div>
    </div>
</template>
<script setup name="search">
import { searchLyric } from '../components/Api/swiper.js'
import { ref, reactive, onMounted } from 'vue'

const keyWord = ref([]);
const iptRef = ref();

const searchStart = () => {


    debounce(searchgeshou, 100)
}
const searchValue = ref()
onMounted(() => {
    keyWord.value = JSON.parse(localStorage.getItem('history')) || []
})
const clear = function () {
    iptRef.value.value = ''
}
const deleteItem = function () {
    localStorage.clear()
    keyWord.value = []
}

const songs = ref([])
async function searchgeshou() {
    const data = await searchLyric({ keywords: searchValue.value });

    songs.value = data.result.songs;

}

// 防抖
function debounce(fun, delay) {
    let timer = null;
    clearTimeout(timer)
    if (!timer) {
        setTimeout(() => {
            let temp = iptRef.value;
            if (temp.validity.valid) {

                keyWord.value.push(temp.value)
                keyWord.value = [... new Set(keyWord.value)]
                localStorage.setItem('history', JSON.stringify(keyWord.value))
            }
            fun && fun()
        }, delay)
    }
}
</script>


<style lang="less" scoped>
.searchTop {
    width: 100%;
    height: 1rem;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;

    input {
        margin-left: 0.2rem;
        border: none;
        border-bottom: 1px solid #999;
        width: 90%;
        padding: 0.1rem;
    }
}

.searchHistory {
    width: 100%;
    height: 0.5rem;
    padding: 0.2rem;
    position: relative;


    .hisoryItme {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.2rem;
        padding: 0.25rem;
    }

    .searchSpan {
        font-weight: 700;
    }

    .spanKey {
        padding: 0.1rem 0.2rem;
        background-color: rgb(185, 169, 169);
        border-radius: 0.4rem;
        margin: 0.1rem 0.2rem;
        display: inline-block;
    }

    .icon {
        width: 0.5rem;
        height: 0.5rem;
        position: absolute;
        right: 0.6rem;
    }
}

.itemList {
    width: 100%;
    padding: .2rem;

    .item {
        width: 100%;
        height: 1.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .itemLeft {
            width: 85%;
            height: 100%;
            display: flex;
            align-items: center;

            .leftSpan {
                display: inline-block;
                width: 0.2rem;
                text-align: center;
            }

            div {
                p {
                    width: 4.54rem;
                    height: .4rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-weight: 700;
                }

                span {
                    font-weight: 400;
                    font-size: .24rem;
                    color: #999;
                }

                margin-left: 0.3rem;
            }
        }

        .itemRight {
            width: 20%;
            height: 100%;
            display: flex;
            // justify-content: space-between;
            align-items: center;
            position: relative;

            .icon {
                fill: #999;
            }

            .bofang {
                position: absolute;
                left: 0;
            }

            .liebiao {
                position: absolute;
                right: 0;
            }
        }
    }
}
</style>