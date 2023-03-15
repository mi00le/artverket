<template>
    <div>
        <div class="footer">
            <div class="links">
                <a href="http://">INSTAGRAM</a>
                <a href="http://">FACEBOOK</a>
                <a href="http://">KONTAKT</a>
            </div>
        </div>
        <div class="copyright">
            <p>MADE BY CARL-MICHAEL LINDFORS</p>

            <p>© COPYRIGHT {{ new Date().getFullYear() }} ARTVERKET</p>
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

.copyright {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-content: center;
}
</style>
