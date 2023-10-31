import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { getGeci } from '../components/Api/swiper'
export const useAlertsStore = defineStore('itemList', () => {
    const playList = ref([{
        al:
        {
            id: 123723319,
            name: "再见莫妮卡",
            pic: 109951165770805060,
            picUrl: "https://p2.music.126.net/me6QV0CallEOlOP6Zb0b3w==/109951165770805050.jpg",
            pic_str: "109951165770805050"
        },
        id: 31445474,
        ar: [{
            alias: Array[0],
            id: 30644200,
            name: "彭席彦",
            tns: Array[0]
        },
        {
            alias: Array[0],
            id: 12338185,
            name: "Franky弗兰奇",
            tns: Array[0],

        }]
    }]);
    const Musciid = ref('1919684213');
    const playListIndex = ref(0)
    const isBofang = ref()
    const bottmRef = ref('')
    const detailShow = ref(false);
    const lyricList = ref({})
    const currentTime = ref(0)
    // 拿取歌词
    async function getGeCiValue(id) {
        let data = await getGeci({ id });
        lyricList.value = data.lrc
    }

    return { playList, lyricList, currentTime, Musciid, getGeCiValue, detailShow, bottmRef, playListIndex, isBofang }
})