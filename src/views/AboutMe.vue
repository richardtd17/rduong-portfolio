<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const props = defineProps<{
  isPlayingMusic: boolean
}>() 

const aboutMeContent = ref([
    "When I'm not coding, you'll either find me in my home music studio writing and producing original music, playing video games, or at a local bar watching the NBA :)",
])

const emit = defineEmits(['play-music', 'stop-music'])

</script>

<template>
    <section id="about-me">
        <div class="header">
            <h2
                class="title fade-in"
                :class="{
                    'animate-text-background': isPlayingMusic,
                    'animate-song-name-gh': isPlayingMusic
                }"
            ></h2>
            <h3 class="subtitle fade-in-delay-1">
                <span>Software Developer</span>
                <span>and</span>
                <span @mouseover="emit('play-music')" @mouseleave="emit('stop-music')">Singer/Songwriter</span>
            </h3>
        </div>
        <div class="mobile-hero mobile-only">
            <img src="/img/richard/film-portrait.jpeg"/>
        </div>
        <div class="body">
                <p>
                    <span class="emphasis fade-in-delay-2">Hi I'm Richard!</span> <span class="fade-in-delay-4">I'm a software developer specializing in crafting dynamic, responsive user interfaces and building robust backend infrastructures.</span>
                </p>
                <p v-for="content in aboutMeContent" class="fade-in-delay-4">{{ content }}</p>
                <p class="contact fade-in-delay-4"><span class="emphasis">It was nice of you to stop by!</span> If you'd like to learn a little more about me or are interested in working with me, shoot me a message!</p>
                <div class="connect-button-container fade-in-delay-5">
                    <RouterLink to="/contact-me">
                        <button class="light-round-btn">
                            <span>Let's Connect<i class="fa-solid fa-caret-right smooth-bounce-x"></i></span>
                        </button>
                    </RouterLink>
                </div>
            </div>
    </section>
</template>

<style scoped>
section#about-me {
    flex-basis: 45%;
    height: max-content;

    display: flex;
    flex-direction: column;
    gap: 2rem;
}

section#about-me .header {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

section#about-me .header .title {
    color: var(--thirty);
    font-size: 3.5rem;
}
.animate-text-background {
    background-image: url('/img/hearts-background-1.jpg');
    background-position: 0px 0px;

    color: #3c484800 !important;
    -webkit-background-clip: text;
    background-repeat: repeat;

    transition-property: all;
    transition-duration: calc(0.8333s * 4);
    transition-timing-function: ease-in-out;

    animation: animatedBackground 5s linear infinite forwards;
}

section#about-me .header .title::after {
    content: 'Richard Duong';
}

.animate-song-name-gh::after {
    content: 'Richard Duong';

    animation: switch-name-gh calc(0.8333s * 6) linear infinite;
}

section#about-me .subtitle {
    display: inline-flex;
    column-gap: 0.5rem;

    color: var(--neutral);

    font-size: 1.5rem;
    flex-wrap: wrap;
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

    color: var(--thirty);
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
    display: flex;
    flex-direction: column;
    gap: 1rem;

    font-size: 1.1rem;
}

.emphasis{
    font-size: 1.2rem;
    font-weight: bold;
}

section#about-me .body .connect-button-container {
    display: flex;
    justify-content: flex-end;
}

section#about-me .body .connect-button-container button {
    padding: .5rem 1rem;
}

section#about-me .body .connect-button-container span {
    display: flex;
    align-items: center;

    gap: 5px;
}

@media screen and (max-width: 991px) {
    section#about-me .header .title {
        font-size: 2rem;
    }

    section#about-me {
        flex-basis: 0;
        height: max-content;

        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    section#about-me .mobile-hero {
        display: flex !important;
        justify-content: center;
    }

    section#about-me .mobile-hero img {
        width: 60%;
        height: auto;
        object-fit: cover; 

        box-shadow: -1rem 1rem var(--thirty);
    }

    section#about-me .body {
        margin-top: 1rem;
    }
}

@media all and (max-width: 768px) {
    section#about-me .mobile-hero img {
        width: 95%;
    }
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
