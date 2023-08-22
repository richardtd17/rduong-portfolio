<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isPlayingMusic = ref(false)
const clickToPlayNotification = ref(false)

let goldenHeart = new Audio(location.href + 'src/assets/sounds/golden-heart-slowed-4.mp3')

function playMusic() {
    try {
        goldenHeart.play()
        isPlayingMusic.value = true
    } catch {
        clickToPlayNotification.value = true
    }
}

function stopMusic() {
    isPlayingMusic.value = false
    goldenHeart.pause()
    goldenHeart.currentTime = 0
}
</script>

<template>
    <header>
        <RouterLink to="/" class="logo"><img src="/src/assets/img/logos/rd.svg" /></RouterLink>
        <nav>
            <!-- <RouterLink to="/projects">Projects</RouterLink> -->
            <RouterLink to="/experience">Experience</RouterLink>
            <!-- <RouterLink to="/experience">Music</RouterLink> -->
        </nav>
    </header>
    <div class="separator-bar"></div>
    <div id="side-menu" class="">
        <div class="social-media-icons-container">
            <div>
                <img src="/src/assets/img/icons/linkedin.svg" />
                <div class="social-content">
                    <div class="arrow-left"></div>
                    @richardtduong
                </div>
            </div>
            
            <div>
                <img src="/src/assets/img/icons/instagram.svg" />
                <div class="social-content">
                    <div class="arrow-left"></div>
                    @rdtherde
                </div>
            </div>
            <div>
                <img src="/src/assets/img/icons/spotify.svg" />
                <div class="social-content">
                    <div class="arrow-left"></div>
                    Coming soon!
                </div>
            </div>
            <div>
                <img src="/src/assets/img/icons/soundcloud.svg" />
                <div class="social-content">
                    <div class="arrow-left"></div>
                    Coming soon!
                </div>
            </div>
            <div>
                <img src="/src/assets/img/icons/youtube.svg" />
                <div class="social-content">
                    <div class="arrow-left"></div>
                    Coming soon!
                </div>
            </div>
        </div>
    </div>
    <main id="main-content">
        <img class="fade-pulse" src="/src/assets/img/logos/3.svg" />
        <div v-if="isPlayingMusic" class="song-title-container">
            <div class="typed">Now playing... golden heart</div>
        </div>

        <section id="hero">
            <img src="/src/assets/img/richard/festival-portrait-edited.jpg"/>
        </section>

        <RouterView @play-music="playMusic" @stop-music="stopMusic" :isPlayingMusic="isPlayingMusic"/>
    </main>
</template>

<style scoped>

header {
    margin-left: var(--side-menu-width);

    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    background: var(--lightest);
}

header .logo {
    width: 4rem;
}

header .logo img {
    width: 100%;
}

header span a {
    color: var(--darker);
    font-size: 1.5rem;
    text-decoration: none;
}

header nav a {
    text-decoration: none;
    color: var(--neutral);

    transition: all 0.2s ease-in-out;
}

header nav a:hover {
    font-size: 1.2rem;
    --x-offset: -0.0625em;
    --y-offset: 0.0625em;
    --stroke: 0.025em;
    --background-color: white;
    --stroke-color: #687578;

    text-shadow:
        var(--x-offset) var(--y-offset) 0px var(--background-color),
        calc(var(--x-offset) - var(--stroke)) calc(var(--y-offset) + var(--stroke)) 0px
            var(--stroke-color);

    color: var(--darkest);
}

@media all and (min-width: 992px) {

    header nav {
        display: flex;
        align-items: baseline;
        justify-content: center;
        gap: 2rem;
    }
}

.separator-bar {
    width: 65%;

    background: var(--darkest);
    padding: 1.25rem;
}

#side-menu {
    width: var(--side-menu-width);
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;

    background-color: var(--darkest);

    display: flex;
    align-items: center;
}

#side-menu .social-media-icons-container {    
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 1rem;

    padding: .5rem;
}

#side-menu .social-media-icons-container div {
    position: relative;
    width: 100%;

    display: flex;
    justify-content: center;
}

#side-menu .social-media-icons-container div img {
    width: 75%;
    cursor: pointer;

    filter: invert(67%) sepia(21%) saturate(308%) hue-rotate(184deg) brightness(87%) contrast(87%);

    transition: all .3s ease-in-out;
}

#side-menu .social-media-icons-container div img:hover {
    width: 100%;
    filter: invert(100%);
}

#side-menu .social-media-icons-container .social-content {
    display: none;

    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    width: max-content;
    height: 1rem;

    position: absolute;
    top: 0;
    left: var(--side-menu-width);
    z-index: 9999;

    padding: 1rem;
    background: #FFF;
}

#side-menu .social-media-icons-container .social-content .arrow-left {
    position: absolute;
    left: -5px;

    width: 0; 
    height: 0; 
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent; 
  
    border-right: 7px solid #FFF; 
}

#side-menu .social-media-icons-container img:hover + .social-content {
    display: flex !important;
    align-items: center;
}

#main-content {
    margin-left: var(--side-menu-width);
    display: flex;
    gap: 2rem;
    padding: 2.5rem 1.5rem;
}

section#hero {
    width: 40%;

    display: flex;
    justify-content: center;
}

section#hero img {
    width: 80%;
    height: auto;
    object-fit: cover; /*magic*/


    box-shadow: -1rem 1rem var(--darkest);
}

.song-title-container {
    position: absolute;
    top: 5rem;
    left: 1rem + var(--side-menu-width);

    display: inline-block;
}
.typed {
    overflow: hidden;
    border-right: 0.15em solid #000;
    white-space: nowrap;
    animation:
        typing 2s steps(25, end) forwards,
        blinking 0.8s infinite;
    width: 0;
    padding-right: 3px;
}

@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}

</style>
