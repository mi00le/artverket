<template>
    <div>
        <div class="footer">
            <div class="links">
                <a href="http://">INSTAGRAM</a>
                <a href="http://">FACEBOOK</a>
                <a href="http://">KONTAKT</a>
            </div>
        </div>
        <div class="cont">
            <div class="container">
                <p>MADE BY CARL-MICHAEL LINDFORS</p>
            </div>

            <div class="copyright">
                <p>© COPYRIGHT {{ new Date().getFullYear() }} ARTVERKET</p>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
* {
    font-family: "proxima_nova";
}
.footer {
    background-color: white;
    width: 100%;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.links {
    display: flex;
    width: clamp(25em, 20vw, 30em);
    justify-content: center;
    justify-content: space-evenly;
}

p {
    text-align: center;
    font-size: 0.8em;
}

a {
    text-decoration: none;
    color: #6e6e6e;
}

.cont {
    display: flex;
    flex-direction: row;
}
.container {
    display: flex;
    width: 100%;
    justify-content: center;
    position: absolute;
}
.copyright {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: absolute;
    right: 1em;
}

@media screen and (max-width: 740px) {
    .copyright {
        margin-top: 2em;
        justify-content: center;
        right: 0;
    }
}
</style>
