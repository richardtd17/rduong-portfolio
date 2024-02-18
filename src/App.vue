<script setup lang="ts">
import { useRoute, RouterLink, RouterView } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute();

watch(() => route.name, () => {
  animateBannerExit();
});

const isPlayingMusic = ref(false)
const clickToPlayNotification = ref(false)
const bannerExit = ref(false)
const separatorBar = ref();
const showMobileNav = ref(false);

let goldenHeart = new Audio(location.href + '/sounds/golden-heart-slowed-4.mp3')
let dontKnowWhy = new Audio(location.href + '/sounds/dont-know-why.mp3') 

function playMusic() {
    try {
        dontKnowWhy.play()
        isPlayingMusic.value = true
    } catch {
        clickToPlayNotification.value = true
    }
}

function stopMusic() {
    isPlayingMusic.value = false
    dontKnowWhy.pause()
    dontKnowWhy.currentTime = 0
}

function animateBannerExit() {
    bannerExit.value = true;

    separatorBar.value.addEventListener("animationend", processAnimationEnd);

    function processAnimationEnd(event:AnimationEvent) {
        if (event.animationName.includes('slide-out-to-right')) {
            bannerExit.value = false;
            separatorBar.value.removeEventListener("animationend", processAnimationEnd);
        }
    }
}

function openLink(link:string) {
    window.open(link, '_blank');
}

function toggleNavMenu() {
    showMobileNav.value = !showMobileNav.value;
}

</script>

<template>
    <header :class="{'show-nav':showMobileNav}">
        <RouterLink to="/" class="logo">
            <img src="/img/logos/rd.svg" />
        </RouterLink>
        <span class="mobile-nav-button mobile-only" :class="{'show-nav':showMobileNav}" @click="toggleNavMenu()">
            <span v-if="showMobileNav">&#x2715;</span>
            <span v-else>&#9776;</span>
        </span>
        <nav class="mobile-hide">
            <RouterLink to="/experience">Experience</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
            <RouterLink to="/contact-me">Contact Me</RouterLink>

            <!-- <RouterLink to="/experience">Music</RouterLink> -->
        </nav>
    </header>
    <div id="mobile-nav" 
        :class="{
            'show-nav':showMobileNav, 
        }"
    >
        <div class="nav-links">
            <RouterLink to="/" @click="toggleNavMenu()">Home</RouterLink>
            <RouterLink to="/experience" @click="toggleNavMenu()">My Experience</RouterLink>
            <RouterLink to="/projects" @click="toggleNavMenu()">My Projects</RouterLink>
        </div>

        <div class="info">
            <h2>Reach Me</h2>
            <a href="mailto:richardtd17@gmail.com">richardtd17@gmail.com</a>
            <RouterLink to="/contact-me" @click="toggleNavMenu()">
                <button class="light-round-outlined-btn">
                    <span>Contact Me</span>
                    <i class="fa-solid fa-caret-right smooth-bounce-x"></i>                
                </button>
            </RouterLink>

            <div class="social-icons">
                <a href="https://www.linkedin.com/in/richardtduong/" target="_blank"><img class="main" src="/img/icons/linkedin.svg" /></a>
                <a href="https://www.instagram.com/rdtherde/?hl=en" target="_blank"><img src="/img/icons/instagram.svg" /></a>
                <div class="coming-soon"><img src="/img/icons/spotify.svg" /></div>
                <div class="coming-soon"><img src="/img/icons/soundcloud.svg" /></div>
                <div class="coming-soon"><img src="/img/icons/youtube.svg" /></div>
            </div>

            <span class="coming-soon-notifier">Coming soon</span>

        </div>
    </div>
    <div 
        ref="separatorBar" 
        class="separator-bar" 
        :class="{
            'slide-out-to-right':bannerExit, 
            'slide-in-from-left': !bannerExit, 
            'show-nav': showMobileNav
        }"
    >
    </div>
    <div id="side-menu" class="mobile-hide">
        <div class="social-media-icons-container">
            <div>
                <img src="/img/icons/linkedin.svg" @click="openLink('https://www.linkedin.com/in/richardtduong/')"/>
                <div class="social-content">
                    <div class="arrow-left"></div>
                    @richardtduong
                </div>
            </div>
            
            <div>
                <img src="/img/icons/instagram.svg" @click="openLink('https://www.instagram.com/rdtherde/?hl=en')"/>
                <div class="social-content">
                    <div class="arrow-left"></div>
                    @rdtherde
                </div>
            </div>
            <div>
                <img src="/img/icons/spotify.svg" />
                <div class="social-content">
                    <div class="arrow-left"></div>
                    Coming soon!
                </div>
            </div>
            <div>
                <img src="/img/icons/soundcloud.svg" />
                <div class="social-content">
                    <div class="arrow-left"></div>
                    Coming soon!
                </div>
            </div>
            <div>
                <img src="/img/icons/youtube.svg" />
                <div class="social-content">
                    <div class="arrow-left"></div>
                    Coming soon!
                </div>
            </div>
        </div>
    </div>
    
    <main id="main-content">
        <div v-if="isPlayingMusic" class="song-title-container">
            <div class="typed">Now playing... golden heart</div>
        </div>

        <section id="hero" class="mobile-hide">
            <img src="/img/richard/festival-portrait-edited.jpg"/>
        </section>

        <RouterView @play-music="playMusic" @stop-music="stopMusic" :isPlayingMusic="isPlayingMusic"/>
    </main>
</template>

<style scoped>

header {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    background: var(--sixty);
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

    color: var(--thirty);
}

.separator-bar {
    position: relative;

    width: 85%;

    background: var(--thirty);
    padding: 1.25rem;
}

.separator-bar span {
   position: absolute;
   top: 0;
   left: 0;
}

.slide-in-from-left {
    animation: slide-in-from-left 1s ease-in-out;
}

@keyframes slide-in-from-left {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
}

.slide-out-to-right {
    animation: slide-out-to-right 1s ease-in-out;
}

@keyframes slide-out-to-right {
    0% {
        transform: translateX(0%);
    }
    100% {
        opacity: 0%;
        transform: translateX(100%);
    }
}

#side-menu {
    width: var(--side-menu-width);
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;

    background-color: var(--thirty);

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
    z-index: 9999;

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
    display: flex;
    gap: 2rem;
    padding: 2.5rem 1.5rem;
}

section#hero {
    flex-basis: 40%;

    height: 600px;

    display: flex;
    justify-content: center;
}

section#hero img {

    width: 80%;
    height: auto;
    object-fit: cover; 

    box-shadow: -1rem 1rem var(--thirty);
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

@media all and (min-width: 992px) {
    header {
        margin-left: var(--side-menu-width);
    }

    header nav {
        display: flex;
        align-items: baseline;
        justify-content: center;
        gap: 2rem;
    }

    #main-content {
        margin-left: var(--side-menu-width);
    }

    #mobile-nav.show-nav {
        visibility: hidden;
        opacity: 0;
    }

    #mobile-nav:not(.show-nav) {
        visibility: hidden;
        opacity: 0;
    }
}

.mobile-nav-button {
    font-size: 3rem;
    color: var(--thirty);
}

.mobile-nav-button.show-nav {
    color: var(--sixty);
}

#mobile-nav {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    background-color: var(--ten);
    overflow-x: hidden; 

    padding-top: 160px;
    padding-inline: 2rem;

    transition: 0.25s ease-in-out;

    color: var(--sixty);

    display: flex;
    flex-direction: column;

    gap: 4rem;
}

#mobile-nav .nav-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#mobile-nav .nav-links a {
    font-size: 2rem;
}

#mobile-nav .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#mobile-nav .info button {
    padding-inline: 1rem;
    padding-block: .5rem;

    display: flex;
    align-items: center;
    gap: 5px;
}

#mobile-nav .info .social-icons {
    margin-top: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

#mobile-nav .info .social-icons > a,
#mobile-nav .info .social-icons > .coming-soon {
    width: 10%;
    position: relative;
}
#mobile-nav .info .social-icons > .coming-soon {
    pointer-events: none;
}


#mobile-nav .info .social-icons img {
    filter: invert(100%);
}

#mobile-nav .info .social-icons > .coming-soon::after {
    content: '*';
    position: absolute;
    top: 0;
    left: 100%;
}

#mobile-nav .info .coming-soon-notifier {
    font-size: 90%;
}

#mobile-nav .info .coming-soon-notifier::before {
    content: '*';
    margin-right: 2px;
}


@media all and (max-width: 991px) {

    header {
        justify-content: space-between;
        padding: 1.5rem 2rem .25rem 2rem;
    }

    header.show-nav {
        width: 100%;

        position: sticky;
        
        z-index: 9999;

        transition: 0.25s ease-in-out;

        background-color: var(--ten);
    }

    header.show-nav .logo img {
        filter: invert(100%);

        transition: 0.5s;
    }

    #mobile-nav.show-nav {
        visibility: visible;
        opacity: 1;
    }

    #mobile-nav:not(.show-nav) {
        visibility: hidden;
        opacity: 0;
    }

    #main-content {
        display: flex;
        flex-direction: column;

        padding: 2rem;
    }

    section#hero img {

        width: 80%;
        height: auto;
        object-fit: cover; 

        box-shadow: -1rem 1rem var(--thirty);
    }

    .separator-bar {
        width: 100%;
        padding: .5rem;
    }

    .separator-bar.show-nav {
        background: var(--sixty);

        position: sticky;
        z-index: 9999;

        transition: 0.5s;
    }

    #side-menu {    
        align-items: start;
    }
}

@media all and (max-width: 768px) {
    
}

</style>
