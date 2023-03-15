<script>
import { ref } from "vue";
import { RouterView, RouterLink } from "vue-router";
import "./assets/main.css";
import Hamburger from "./components/Hamburger.vue";
import Home from "./components/Home.vue";
import Bottom from "./components/Bottom.vue";
import Shop from "./components/Shop.vue";
import Events from "./components/Events.vue";

export default {
    data() {
        return {};
    },
    components: {
        Home,
        Hamburger,
        Bottom,
        Shop,
        Events,
    },
};
</script>

<template>
    <Hamburger />
    <RouterView :key="$route.fullPath" />
    <Bottom />
</template>

<style>
body {
    background: #fff;
}
</style>
