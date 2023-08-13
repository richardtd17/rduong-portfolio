<script setup lang="ts">
import { ref } from 'vue'

const experiences = ref([
    {
        title: 'Activeherb Technology Inc',
        subtitle: 'Full Stack Software Developer',
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
    {
        title: 'homecoin.com',
        subtitle: 'Subtitle of project 2',
        description: ['This is what we did'],
        img: null
    },
    {
        title: 'ITS Service Desk',
        subtitle: 'Subtitle of project 3',
        description: ['This is what we did'],
        img: null
    }
])
</script>

<template>
    <section id="experience-section">
        <div class="experiences-container fade-in">
            <div v-for="experience in experiences" class="item">
                <div class="experiences-content">
                    <h2>{{ experience.title }}</h2>
                    <i>{{ experience.subtitle }}</i>

                    <ul class="description">
                        <li v-for="line in experience.description">
                            {{ line }}
                        </li>
                    </ul>
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

    width: 32%;
    height: 60vh;

    padding: 2rem;

    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}

.experiences-container:hover .item {
    border: 1px solid black;
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
</style>
