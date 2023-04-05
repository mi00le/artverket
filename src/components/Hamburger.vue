<template>
    <div>
        <div class="navbar">
            <RouterLink to="/"><img class="logo" src="../assets/logo.svg" /></RouterLink>
        </div>
        <div class="menu-btn" :class="{ open: menuOpen }" @click="toggleMenu">
            <div class="menu-btn__burger"></div>
        </div>
        <div class="menu-container" :class="{ open: menuOpen }">
            <ul class="menu-container-items">
                <li>
                    <RouterLink to="/" :class="{ home_active: active_tabs.home_active }" @click="toggle_active">HEM</RouterLink>
                </li>
                <li>
                    <a @click="toggle_v1_dropdown">TJÄNSTER</a>
                    <ul class="disabled" :class="{ toggle_v1: toggle_v1 }">
                        <li><button>STYLING</button></li>
                        <li><button>FOTOGRAFERING</button></li>
                        <li><button>EVENT</button></li>
                        <li><button>WORKSHOP</button></li>
                    </ul>
                </li>
                <li>
                    <RouterLink to="/shop" :class="{ shop_active: active_tabs.shop_active }" @click="toggle_active">SHOP</RouterLink>
                </li>
                <li><button>POP UP</button></li>
                <li><button>PORTFOLIO</button></li>
                <li><button>OM ARTVERKET</button></li>
                <li><button>KONTAKT</button></li>
            </ul>
        </div>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
    name: "Hamburger",
    data() {
        return {
            menuOpen: false,
            toggle_v1: false,
            active_tabs: {
                home_active: false,
                shop_active: false,
            },
        };
    },
    methods: {
        toggleMenu() {
            this.toggle_v1 = false;
            this.menuOpen = !this.menuOpen;
        },

        toggle_v1_dropdown() {
            this.toggle_v1 = !this.toggle_v1;
        },

        toggle_active(e) {
            // console.log(e.target.classList.contains("active"));

            switch (e.target.innerHTML) {
                case "HEM":
                    this.active_tabs.home_active = true;
                    this.active_tabs.shop_active = false;
                    break;
                case "SHOP":
                    this.active_tabs.shop_active = true;
                    this.active_tabs.home_active = false;

                    break;
                default:
                    this.active_tabs.home_active = false;
                    this.active_tabs.shop_active = false;

                    break;
            }

            console.log(e.target.innerHTML);
        },
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    letter-spacing: 0.1em;
}
@font-face {
    font-family: "proxima_nova";
    src: url("../assets/proxima_nova.ttf");
}

body {
    font-family: "proxima_nova";
}
h1 {
    font-family: "proxima_nova";
}

ul {
    list-style: none;
    font-family: "proxima_nova";
}
li {
    padding-top: 1em !important;
}

a {
    text-decoration: none;
    color: #00000091;
}

.home_active,
.shop_active {
    text-decoration: none;
    color: #000;
}

.active {
    text-decoration: none;
    color: #000;
}

button {
    background-color: #0000;
    border: none;
    font-family: "proxima_nova";
    font-size: 1em;
    color: #00000091;
}

.menu-container {
    width: 250px;
    height: 100vh;
    position: fixed;
    background-color: #fff;
    left: -250px;
    transition: all 0.3s ease-in-out;
    z-index: 1;
}
.menu-container-items {
    padding-top: 5em;
    padding-left: 4em;
}
.menu-btn {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    z-index: 999;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin: 10px;
}
.menu-btn__burger {
    width: 25px;
    height: 1px;
    background: #6e6e6e;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
}
.menu-btn__burger::before,
.menu-btn__burger::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 1px;
    background: #6e6e6e;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
}
.menu-btn__burger::before {
    transform: translateY(-8px);
}
.menu-btn__burger::after {
    transform: translateY(8px);
}
/* ANIMATION */
.menu-btn.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
}
.open + .menu-container {
    left: 0px;
}
.menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
}
.menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
}

/* drop down menu */

.disabled {
    display: none;
    /* visibility: hidden; */
    opacity: 0;
    transition: opacity 1s ease-in-out;
}
.toggle_v1 {
    margin-left: 1em;
    display: block;
    opacity: 1;
}

/* NAVBAR LOGO */

.navbar {
    display: flex;
    width: 100%;
    justify-content: center;
    position: fixed;
    height: 4.5em;
    background-color: white;
    padding: 0;
    margin: 0;
    align-items: center;
}

.logo {
    width: clamp(10em, 20vw, 18em);
}
</style>
