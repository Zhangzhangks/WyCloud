import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { getGeci } from '../components/Api/swiper'
export const useAlertsStore = defineStore('itemList', () => {
    const playList = ref([{
        al:
        {
            id: 3116775,
            name: "寻",
            pic: 2925800441997173,
            picUrl: "https://p1.music.126.net/tgkN397ohC6XpqRRHzndLw==/2925800441997173.jpg"

        },
        id: 31445474,
        ar: [{
            name: "三亩地"
        }]
    }]);
    const Musciid = ref('1919684213');
    const playListIndex = ref(0)
    const isBofang = ref(true)
    const bottmRef = ref('')
    const detailShow = ref(false);
    const lyricList = ref({})

    // 拿取歌词
    async function getGeCiValue(id) {
        let data = await getGeci({ id });
        lyricList.value = data.lrc
    }

    return { playList, lyricList, Musciid, getGeCiValue, detailShow, bottmRef, playListIndex, isBofang }
})