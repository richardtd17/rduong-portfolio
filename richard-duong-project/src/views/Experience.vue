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
</script>

<template>
    <section id="experience-section">
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
    </section>
</template>

<style scoped>

.experiences-content .description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#experience-section {
    flex-basis: 55%;

    display: flex;
    flex-direction: column;
}

.title-container {
    width: 100%;
}
.experiences-container {
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-content: center;
}
.experiences-container .item {
    overflow: auto;

    position: absolute;

    width: 25%;
    height: 65%;

    padding-block: 1rem;

    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

    cursor: pointer;
}

.experiences-container .item:hover {
    border: 1px solid var(--light);
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
    background-color: var(--light);

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

@keyframes smooth-bounce {
    0% {
        opacity: 100%;
    }

    10%, 90% {
        opacity: 95%;
        transform: translateY(-5px);
    }

    20%, 80% {
        opacity: 92.5%;
        transform: translateY(-10px);
    }

    30%, 60% {
        opacity: 91%;
        transform: translateY(-13px);
    }

    40%, 50% {
        opacity: 90%;
        transform: translateY(-15px);
    }
}

</style>
