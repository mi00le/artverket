import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Shop from "../components/Shop.vue";
import Events from "../components/Events.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/shop",
            name: "shop",
            component: Shop,
        },
        {
            path: "/event",
            name: "event",
            component: Events,
        },
    ],
});

export default router;
