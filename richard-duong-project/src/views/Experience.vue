<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const workExperiences = ref({
    activeherb: {
        title: 'Activeherb Technology Inc',
        subtitle: 'Software Developer',
        description: [
            'Developed checkout process, account pages, and product pages for website redesign using HTML5, CSS, Vue.js, and vanilla Javascript',
            'Collaborated with design team to transform static design mockups into dynamic and responsive web pages',
            'Optimized legacy checkout process to reduce load speeds by 22% on average across all checkout pages',
            'Consolidated and refactored checkout process to streamline sales and minimize tech debt',
            'Managed web servers and performed regular IT duties to support web server infrastructure',
            'Led major security updates on websites to ensure compliance with up-to-date programming practices and maintain strict adherence to PCI (Payment Card Industry) standards',
            'Worked closely with the office manager to optimize shipping and packaging processing algorithm, improving the accuracy of automated shipping label generation by 35% on 500+ labels printed weekly'
        ],
        img: '/src/assets/img/experience/activeherb-logo.jpeg',
        date: "Mar 2023 - Present",
        orderClass: 'card-1'
    },
    homecoin: {
        title: 'homecoin.com',
        subtitle: 'Junior Software Developer',
        description: [
            'Designed and built a scalable marketing outreach system leading to 6% faster increase in user acquisition and sales in first month of launch (Vue.js, PHP/Laravel)',
            'Built and maintained tool to save 100s of admin hours visualizing and manipulating spatial data (jQuery, PHP/Laravel)',
            'Led checkout redesign implementing new features and reducing time in checkout by 5% (Vue.js, PHP/Laravel)',
            'Performed various website and algorithmic hotfixes to tailor customer experience',
            'Collaborated in weekly code review and testing for all production software'
        ],
        img: '/src/assets/img/experience/homecoin-logo.jpeg',
        date: "Aug 2021 - Jan 2023",
        orderClass: 'card-2'
    },
    itsServiceDesk: {
        title: 'ITS Service Desk @ UCSD',
        subtitle: 'IT Service Desk Technician',
        description: ['Provided phone, email, and text support for network, email, phone, software, security issues, accounts, business web applications, and more using the ServiceNow platform, closing ~50-60 cases per week.'],
        img: '/src/assets/img/experience/triton-logo.png',
        date: "Sept 2020 - Aug 2021",
        orderClass: 'card-3'
    }
});

const cardCurrentlyShown = ref('activeherb');
const experienceCards = ref({});
const cardIsOverflown = computed(() => {
    let element = experienceCards.value[cardCurrentlyShown.value];

    return (element?.scrollHeight > element?.clientHeight || element?.scrollWidth > element?.clientWidth);
});
const showCardOverflowAnimation = ref(true);

onMounted(() => {
    changeCard(cardCurrentlyShown.value);
});

function changeCard(key:String) {

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

function scrollDown(key:String) {
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
            <h2 class="title">Experience</h2>
        </div>
        <div class="body">
            <h3 class="fade-in-delay-1">Work Experience</h3>
            <div class="experiences-container fade-in">
                <div v-for="(item, key) in workExperiences" class="item" :class="item.orderClass" :ref="(el:HTMLElement) => {experienceCards[key] = el}" @click="changeCard(key)" @scroll="scrollCard">
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
                        <div class="scroll-icon"><img src="/src/assets/img/icons/arrow-down-solid.svg"/></div>
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
    flex-basis: 55%;

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
    height: 55%;

    padding-block: 1rem;

    background-color: var(--sixty);
    color: var(--thirty);
    /* box-shadow: var(--ten) 0px 25px 50px -12px; */
    box-shadow: 0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11);
        
    border-radius: 1rem;
    cursor: pointer;
}

.experiences-container .item:hover {
    border: 1px solid var(--ten);
}

.card-1 {
    z-index: 9999;
    overflow: auto;

    animation: front-card 1s ease-in-out forwards;
}
.card-2 {
    z-index: 9998;
    overflow: hidden;

    animation: spread1 1s forwards;
}

.card-3 {
    z-index: 9997;
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

</style>
