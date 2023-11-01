import { createRouter, createWebHashHistory } from 'vue-router'
const musicItem = () => import('../components/home/MusicItem.vue');
const home = () => import('../view/Home.vue');
const search = () => import('../view/Search.vue')
const routes = [
    { path: '/', component: home },
    {
        path: '/home', component: home,
    },
    { path: '/itemMusic', name: 'itemMusic', component: musicItem, props: true },
    { path: '/search', name: 'Search', component: search }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router