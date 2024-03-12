<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface WorkExperience {
    title: string;
    subtitle: string;
    description: string[];
    img: string;
    date: string;
    orderClass: string;
}

const workExperiences = ref<Record<string, WorkExperience>>({
    activeherb: {
        title: 'Activeherb Technology Inc',
        subtitle: 'Software Developer',
        description: [
            'Created responsive web applications using suite of HTML5, CSS3, Vanilla Javascript, and Vue.js',
            'Managed web servers and performed regular IT duties to support web server infrastructure'
        ],
        img: '/img/experience/activeherb-logo.jpeg',
        date: "Mar 2023 - Oct 2023",
        orderClass: 'card-1'
    },
    homecoin: {
        title: 'homecoin.com',
        subtitle: 'Junior Software Developer',
        description: [
            'Designed, built, and shipped responsive customer-facing and administrative web applications in Laravel and Javascript'
        ],
        img: '/img/experience/homecoin-logo.jpeg',
        date: "Aug 2021 - Jan 2023",
        orderClass: 'card-2'
    },
    itsServiceDesk: {
        title: 'ITS Service Desk @ UCSD',
        subtitle: 'IT Service Desk Technician',
        description: ['Provided phone, email, and text support for network, email, phone, software, security issues, accounts, business web applications, and more using the ServiceNow platform, closing ~50-60 cases per week.'],
        img: '/img/experience/triton-logo.png',
        date: "Sept 2020 - Aug 2021",
        orderClass: 'card-3'
    }
});

const cardCurrentlyShown = ref<string>('activeherb');
const experienceCards = ref<Record<string, HTMLElement>>({});

const cardIsOverflown = computed(() => {
    let element = experienceCards.value[cardCurrentlyShown.value];

    return (element?.scrollHeight > element?.clientHeight || element?.scrollWidth > element?.clientWidth);
});
const showCardOverflowAnimation = ref(true);

onMounted(() => {
    changeCard(cardCurrentlyShown.value);
});

function changeCard(key:string) {

    let workExperiencesInstance = workExperiences.value;
    let cardClass = workExperiencesInstance[key].orderClass;

    workExperiencesInstance[key].orderClass = 'card-1';
    workExperiencesInstance[cardCurrentlyShown.value].orderClass = cardClass;

    cardCurrentlyShown.value = key;
}

function scrollCard() {
    if (cardIsOverflown.value) {
        let element = experienceCards.value[cardCurrentlyShown.value];

        if (element.scrollHeight - element.scrollTop - element.clientHeight < 1) {
            showCardOverflowAnimation.value = false;
        }
        else {
            showCardOverflowAnimation.value = true;
        }
    }
}

function scrollDown(key:string) {
    experienceCards.value[key].scrollTop = experienceCards.value[key].scrollHeight;
}

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
</script>

<template>
    <section id="experience-section">
        <div class="header fade-in">
            <h2 class="title">Work Experience</h2>
        </div>
        <div class="body">
            <div class="experiences-container fade-in">
                <div v-for="(item, key) in workExperiences" class="item" :class="item.orderClass"
                    :ref="el => {
                        if (el) experienceCards[key] = el as HTMLElement;
                    }"
                    @click="changeCard(key)" @scroll="scrollCard"
                >

                    <div class="experiences-content">
                        <div class="header">
                            <img v-if="item.img" :src="item.img"/>
                            <div class="title-container">
                                <h2>{{ item.title }}</h2>
                                <i>{{ item.subtitle }}</i>
                                <span>{{ item.date }}</span>
                            </div>
                        </div>

                        <ul class="description">
                            <li v-for="line in item.description">
                                {{ line }}
                            </li>
                        </ul>
                    </div>
                    <div class="scroll-icon-container" v-if="cardIsOverflown && showCardOverflowAnimation" @click="scrollDown(key)">
                        <div class="scroll-icon"><img src="/img/icons/arrow-down-solid.svg"/></div>
                    </div>
                </div>
            </div>

            <h3>Technologies</h3>
            <p class="technologies" v-for="(technologyList, index) in technologies">
                <h4>{{ index }}</h4>
                <div class="technology-list fade-in"><span v-for="technology in technologyList">{{ technology }} </span></div>
            </p>
        </div>
    </section>
</template>

<style scoped>

#experience-section {
    flex-basis: 60%;

    display: flex;
    flex-direction: column;
    gap: 2rem;
}

#experience-section > .header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#experience-section .body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

#experience-section .body .experiences-container .header {
    display: flex;
    gap: 1rem;

    align-items: center;
}

#experience-section .body .experiences-container .header img {
    width: 20%;
}

#experience-section .body .experiences-container {

    height: clamp(500px, 60vh, 750px);
    min-height: 500px;

    display: flex;
    align-items: center;
    justify-content: center;
}

#experience-section .body .experiences-container .item {

    position: absolute;

    width: 30%;
    height: 500px;

    padding-block: 1rem;

    background-color: var(--sixty);
    color: var(--thirty);
    /* box-shadow: var(--ten) 0px 25px 50px -12px; */
    box-shadow: 0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11);
        
    border-radius: 1rem;
    cursor: pointer;
}

#experience-section .body .experiences-container .item::-webkit-scrollbar {
    display: none;
}

.experiences-container .item:hover {
    border: 1px solid var(--ten);
}

.card-1 {
    z-index: 3;
    overflow: auto;

    animation: front-card 1s ease-in-out forwards;
}
.card-2 {
    z-index: 2;
    overflow: hidden;

    animation: spread1 1s forwards;
}

.card-3 {
    z-index: 1;
    overflow: hidden;

    animation: spread2 1s forwards;
}

@keyframes front-card {
    0% {
        opacity: 0%;
        transform: 0;
    }
    40% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
}

@keyframes spread1 {
    0% {
        transform: 0;
        opacity: 100%;
    }
    100% {
        transform: translateX(5%) rotate(5deg) translateY(-5%);
        opacity: 95%;
    }
}

@keyframes spread2 {
    0% {
        transform: 0;
        opacity: 100%;

    }
    100% {
        transform: translateX(10%) rotate(10deg) translateY(-10%);
        opacity: 90%;

    }
}

.experiences-container .item .experiences-content{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem 2rem;
}

.experiences-container .item .experiences-content .title-container {
    width: 100%;

    display: flex;
    flex-direction: column;
}

.experiences-container .item .experiences-content .description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}


.scroll-icon-container {
    width: 100%;
    height: 0;
    position: sticky;

    bottom: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    
}
.scroll-icon-container .scroll-icon {

    height: 2rem;
    width: 2rem;
    background-color: var(--ten);

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    animation: smooth-bounce 1s ease-in-out infinite;
}

.scroll-icon-container:hover > .scroll-icon {
    background-image: linear-gradient(rgb(0 0 0/50%) 0 0);
}

.scroll-icon-container .scroll-icon img {
    width: 1rem;
    filter: invert(93%) sepia(7%) saturate(264%) hue-rotate(103deg) brightness(106%) contrast(95%);
}

section#experience-section .body .technology-list {
    padding: 1rem;
    background: var(--ten);
    border-radius: 7px;
    font-weight: 500;
    color: var(--sixty);

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

section#experience-section .body .technologies {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

section#experience-section .body .technologies h4 {
    font-weight: normal;
}

@media screen and (max-width: 991px) {
    #experience-section .body .experiences-container .item {
        width: 50%;

        padding-block: 0.5rem;
    }
}

@media screen and (max-width: 768px) {
    #experience-section .body {
        margin-top: 50px;
    }
    #experience-section .body .experiences-container .item {
        width: 65%;
    }
}

@media screen and (max-width: 540px) {

    #experience-section .body {
        margin-top: 0;
    }

    #experience-section .body .experiences-container {
        margin-bottom: 75px;
    }

    #experience-section .body .experiences-container .item {
        width: 85%;
    }
    .experiences-container .item .experiences-content{
        padding: 1rem 1rem;
    }

    .experiences-container .item .experiences-content .title-container {
        font-size: 90%;
    }

    @keyframes spread1 {
    0% {
        transform: 0;
        opacity: 100%;
    }
    100% {
        transform: translateY(7.5%);
        opacity: 95%;
    }
}

@keyframes spread2 {
    0% {
        transform: 0;
        opacity: 100%;

    }
    100% {
        transform: translateY(15%);
        opacity: 90%;

    }
}
}
</style>
