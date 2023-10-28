import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertsStore = defineStore('itemList', () => {
    const playList = ref([{
        al:
        {
            id: 19078,
            name: "张国荣告别乐坛演唱会s",
            pic: 109951164373664320,
            picUrl: "https://p1.music.126.net/qseUH9tBtprMauNYv5jR8Q==/109951164373664324.jpg",
            pic_str: "109951164373664324",
        }

    }]);
    const Musciid = ref('1919684213');
    const playListIndex = ref(0)
    const isbtnShow = ref(true)
    return { playList, Musciid, playListIndex, isbtnShow }
})