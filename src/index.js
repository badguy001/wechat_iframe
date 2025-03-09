import {createRouter,createWebHashHistory} from "vue-router";

const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/components/HellowWorld.vue'),
        props: true
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router