import request from "../Request/request";

/**
 * 拿取轮播图数据
 */
export const getSwiper = (type) => {
    return request(`banner`, 'get', type)
}

/**
 *
 * @param {number} limit
 * @returns  拿去发现歌单
 */
export const getMusicList = (limit = 1) => {
    return request(`personalized`, 'get', limit)
}


/**
 *
 * @param {number} id
 * @returns 拿去推荐歌单
 */
export const getMusicDetail = (id) => {
    return request(`playlist/detail`, 'get', id)
}


export const getMusicDetailList = (playload) => {
    return request(`/playlist/track/all`, 'get', playload)
}
