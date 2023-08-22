<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isPlayingMusic = ref(false)
const clickToPlayNotification = ref(false)

const aboutMeContent = ref([
    "Hello! I'm Richard, a software developer specializing in crafting dynamic, responsive user interfaces and building robust backend infrastructures.",
    " When I'm not coding, you'll either find me in my home music studio writing and producing original music, playing video games, or at a local bar watching the NBA :)"
])
const programmingTechnologies = [
    'Javascript',
    'HTML5',
    'CSS',
    'Vue.js',
    'jQuery',
    'Python',
    'Pandas',
    'PHP',
    'Laravel',
    'Eloquent',
    'Atlassian',
    'MySQL',
    'AWS (S3, EC2, Lambda)'
]

const musicTechnologies = ['Ableton']

const technologies = ref({
    Programming: programmingTechnologies,
    Music: musicTechnologies
})

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
    <header>
        <span><RouterLink to="/">Richard Duong</RouterLink></span>
        <nav>
            <!-- <RouterLink to="/projects">Projects</RouterLink> -->
            <RouterLink to="/experience">Experience</RouterLink>
            <!-- <RouterLink to="/experience">Music</RouterLink> -->
        </nav>
    </header>
    <main id="main-content">
        <img class="fade-pulse" src="/src/assets/img/flower-background.png" />
        <div v-if="isPlayingMusic" class="song-title-container">
            <div class="typed">Now playing... golden heart</div>
        </div>

        <section id="about-me">
            <div class="title-container fade-in">
                <h2
                    class="title"
                    :class="{
                        'animate-text-background': isPlayingMusic,
                        'animate-song-name-gh': isPlayingMusic
                    }"
                ></h2>
                <h3 class="subtitle">
                    <span>Software Developer</span>
                    and
                    <span @mouseover="playMusic" @mouseleave="stopMusic">Singer/Songwriter</span>
                </h3>
                <div class="body">
                    <p v-for="content in aboutMeContent">{{ content }}</p>

                    <h3>Technologies</h3>
                    <p class="technologies" v-for="(technologyList, index) in technologies">
                        <h4>{{ index }}</h4>
                        <div class="technology-list fade-in"><span v-for="technology in technologyList">{{ technology }} </span></div>
                    </p>
                </div>
            </div>
        </section>
        <RouterView />
    </main>
</template>

<style scoped>
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

header {
    margin-left: var(--side-menu-width);

    display: flex;
    align-items: baseline;
    gap: 2rem;
    padding: 1rem;
    background: var(--lightest);
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
#main-content {
    margin-left: var(--side-menu-width);
    display: flex;
    gap: 2rem;
    padding: 2.5rem 5rem;
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

section#about-me {
    flex-basis: 45%;
    padding-top: 2rem;
    height: max-content;
}

section#about-me .title-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

section#about-me .title-container .title {
    color: var(--darkest);
    font-size: 3.5rem;
}
.animate-text-background {
    background-image: url('/src/assets/img/hearts-background-1.jpg');
    background-position: 0px 0px;

    color: #3c484800 !important;
    -webkit-background-clip: text;
    background-repeat: repeat;

    transition-property: all;
    transition-duration: calc(0.8333s * 4);
    transition-timing-function: ease-in-out;

    animation: animatedBackground 5s linear infinite forwards;
}

section#about-me .title-container .title::after {
    content: 'Richard Duong';
}

.animate-song-name-gh::after {
    content: 'Richard Duong';

    animation: switch-name-gh calc(0.8333s * 6) linear infinite;
}

section#about-me .subtitle {
    display: inline-flex;
    gap: 0.5rem;

    color: var(--neutral);
}

section#about-me .subtitle span {
    transition: all 0.3s ease-out;

    width: max-content;
    color: var(--darker);
}

section#about-me .subtitle span:hover {
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

section#about-me .subtitle span:nth-child(1) {
    animation-name: wobble;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-delay: 10s;
}
section#about-me .subtitle span:nth-child(2) {
    animation-name: wobble;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-delay: 10.5s;
}
section#about-me .subtitle span:nth-child(3) {
    animation-name: wobble;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-delay: 11s;
}

section#about-me .body {
    color: var(--neutral);
    line-height: 1.5;

    display: flex;
    flex-direction: column;
    gap: 1rem;
}
section#about-me .body .technology-list {
    padding: 1rem;
    background: var(--light);
    border-radius: 7px;
    font-weight: 500;
    color: var(--lightest);

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

section#about-me .body .technologies {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

section#about-me .body .technologies h4 {
    font-weight: normal;
}

/* Animations  */

@keyframes animatedBackground {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 100% 100%;
    }
}

@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}
@keyframes blinking {
    from {
        border-color: transparent;
    }
    to {
        border-color: #000;
    }
}

@keyframes switch-name-gh {
    0%,
    100% {
        content: 'choi';
    }
    33.33% {
        content: 'golden heart';
    }
    66.67% {
        content: 'Richard Duong';
    }
}

@keyframes wobble {
    0%,
    10%,
    100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }

    1%,
    9% {
        transform: translate3d(-1px, 0, 0);
        color: var(--darker);
    }

    2%,
    8% {
        transform: translate3d(2px, 0, 0);
        color: var(--darker);
    }

    3%,
    5%,
    7% {
        transform: translate3d(-4px, 0, 0);
        color: var(--darker);
    }

    4%,
    6% {
        transform: translate3d(4px, 0, 0);
        color: var(--darker);
    }

    40% {
        color: var(--neutral);
    }
}
</style>
