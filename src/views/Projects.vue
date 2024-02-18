<script setup lang="ts">
import { ref } from 'vue'

interface Project {
    title: string;
    subtitle?: string;
    status: string;
    description: string[];
    iconImgSrc?: string;
    imgSrcs?: string[];
    links: {[key: string]: string};
}

const projects = ref<Project[]>([
    {
        title: 'Cancelled Out App: Guilt-Free Plan Cancelling',
        subtitle: 'Lead Developer',
        status: 'In Development',
        description: [
            'Designed and implemented a unique feature allowing users to discreetly cancel plans, fostering a guilt-free social environment.',
            'Technologies: Swift, Node.js (Express.js), Firebase, PostgresQL'
        ],
        imgSrcs: [
            '/img/projects/cancelled-out/cancelled-out-1.png',
            '/img/projects/cancelled-out/cancelled-out-2.png'
        ],
        iconImgSrc: '/img/projects/cancelled-out/cancelled-out-logo-transparent.png',
        links: {
            github: ''
        }
    },

    {
        title: 'Project MAI',
        subtitle: 'Student Developer on UCSD Return to Learn Research Team',
        status: 'Completed (March 2021)',
        description: [
            'Created a robust REST API to automate a previously manual and resource-intensive data pipeline which played a crucial role in delivering reliable COVID-19 exposure notifications to over 20000+ students. Automation helped save hours of time in daily stool sample batch analysis.',
            'Technologies: AWS Lambda, Python, Pandas, JavaScript, HTML'
        ],
        imgSrcs: [],
        iconImgSrc: '/img/experience/triton-logo.png',
        links: {
            github: ''
        }
    },
    {
        title: 'Spotify Rock Classifier',
        subtitle: 'Student Developer',
        status: 'Completed (Spring 2020)',
        description: [
            'Trained a model to predict what era a Rock song came from using data from the Spotify API',
            'Mostly meant to be a fun way to explore the Spotify API, we ended up learning a lot about what contributes to each era of what was considered Rock music including factors such as danceability, instrumentalness, valence and duration',
            'Technologies: Scikit Learn, Pandas, Python'
        ],
        links: {
            github: 'https://github.com/ucsd-dsc-arts/dsc160-midterm-group17'
        }
    }
])
</script>

<template>
    <section id="projects-section">
        <div class="title-container fade-in-from-right">
            <h1>Projects</h1>
        </div>
        <div class="projects-container">
            <div v-for="project in projects" class="item">
                <div class="project-content">
                    <div class="header">
                        <img v-if="project.iconImgSrc" class="icon" :src="project.iconImgSrc">
                        <div class="title-container">
                            <h2>{{ project.title }}</h2>
                            <i>{{project.status}}</i>
                            <i>{{ project.subtitle }}</i>
                        </div>
                    </div>

                    <ul class="description">
                        <li v-for="line in project.description">
                            {{ line }}
                        </li>
                    </ul>

                    <div class="images">
                        <img v-for="imgSrc in project.imgSrcs" :src="imgSrc"/>
                    </div>

                    <div class="links">
                        <a v-if="project.links.github" :href="project.links.github" target="_blank">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

#projects-section {
    flex-basis: 45%;
    
    display: flex;

    flex-direction: column;
    gap: 2rem;

    height: 100%;
}
#projects-section > .title-container {
    display: flex;
    align-items: center;
}

.projects-container {
    width: 100%;
    display: flex;
    
    flex-direction: column;

    gap: 1rem;
}

.projects-container .item {
    display: flex;
    flex-direction: column;

    justify-content: center;
    gap: 1rem;
}

.projects-container .item .project-content {
    background: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    padding: 1rem 2rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.projects-container .item .project-content .header {
    display: flex;
    gap: 16px;

    align-items: center;
}

.projects-container .item .project-content .header img {
    width: 32px;
    height: auto;
}

.projects-container .item .project-content .title-container {
    display: flex;
    flex-direction: column;
}

.projects-container .item .project-content .title-container h2 {
    font-size: large;
}

.projects-container .item .project-content .title-container i {
    font-size: small;
}

.projects-container .item .project-content .description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.projects-container .item .project-content .images {
    margin-top: 20px;
    display: flex;
    gap: 1rem;
    justify-content: space-around;
}

.projects-container .item .project-content .images img {
    width: 25%;
    height: auto;
}

.projects-container .item .project-content .links {
    display: flex;
    gap: 1rem;

    justify-content: flex-end;
}

.projects-container .item .project-content .links a {
    font-size: 2rem;
}

.projects-container .item:nth-child(1) .project-content {
    animation: fadeInFromBottom 1.5s ease-in-out;
}

.projects-container .item:nth-child(2) .project-content {
    animation: fadeInFromBottom 2.25s ease-in-out;
}

.projects-container .item:nth-child(3) .project-content {
    animation: fadeInFromBottom 3s ease-in-out;
}

@keyframes fadeInFromBottom {
    0% {
        opacity: 0;
    }
    25% {
        opacity: 0;
        transform: translateY(100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
}
</style>
