<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const experiences = ref({
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
        img: null
    },
    homecoin: {
        title: 'homecoin.com',
        subtitle: 'Junior Software Developer',
        description: [],
        img: null
    },
    itsServiceDesk: {
        title: 'ITS Service Desk',
        subtitle: 'IT Service Desk Technician',
        description: ['This is what we did'],
        img: null
    }
});

const cardCurrentlyShown = ref('activeherb');
const experienceCards = ref({});
const cardIsOverflown = computed(() => {
    let element = experienceCards.value[cardCurrentlyShown.value];

    return (element?.scrollHeight > element?.clientHeight || element?.scrollWidth > element?.clientWidth);
});

onMounted(() => {
    changeCard(cardCurrentlyShown.value);
});

function changeCard(key:String) {
    cardCurrentlyShown.value = key;
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
        <div class="header">
            <h2 class="title">Experience</h2>
        </div>
        <div class="body">
            <h3>Work Experience</h3>
            <div class="experiences-container fade-in">
                <div v-for="(item, key) in experiences" class="item" :ref="(el:HTMLElement) => {experienceCards[key] = el}" @click="changeCard(key)">
                    <div class="experiences-content">
                        <div class="title-container">
                            <h2>{{ item.title }}</h2>
                            <i>{{ item.subtitle }}</i>
                        </div>

                        <ul class="description">
                            <li v-for="line in item.description">
                                {{ line }}
                            </li>
                        </ul>
                    </div>
                    <div class="scroll-icon-container" v-if="cardIsOverflown" @click="scrollDown(key)">
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

#experience-section .header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#experience-section .body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

#experience-section .body .experiences-container {

    height: 65vh;
    min-height: 500px;

    display: flex;
    align-items: center;
    justify-content: center;
}

#experience-section .body .experiences-container .item {
    overflow: auto;

    position: absolute;

    width: 25%;
    height: 50%;

    padding-block: 1rem;

    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

    cursor: pointer;
}

.experiences-container .item:hover {
    border: 1px solid var(--ten);
}

.experiences-container .item:nth-child(1) {
    z-index: 9999;
}

.experiences-container .item:nth-child(2) {
    z-index: 9998;
    animation: spread1 1s forwards;
}

.experiences-container .item:nth-child(3) {
    z-index: 9997;
    animation: spread2 1s forwards;
}

@keyframes spread1 {
    0% {
        transform: 0;
    }
    100% {
        transform: translateX(5%) rotate(5deg) translateY(-5%);
    }
}

@keyframes spread2 {
    0% {
        transform: 0;
    }
    100% {
        transform: translateX(10%) rotate(10deg) translateY(-10%);
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
}

.experiences-container .item .experiences-content .description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}


.scroll-icon-container {
    width: 100%;
    position: sticky;

    bottom: 0;

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
