<script setup lang="ts">
import { ref } from 'vue'

const projects = ref([
    {
        title: 'Project MAI',
        subtitle: 'UCSD Return to Learn Research Team',
        description: [
            'Created a robust REST API to automate a previously manual and resource-intensive data pipeline which played a crucial role in delivering reliable COVID-19 exposure notifications to over 20000+ students. Automation helped save hours of time in daily stool sample batch analysis.',
            'Technologies: AWS Lambda, Python, Pandas, JavaScript, HTML'
        ],
        img: null
    },
    {
        title: 'Project 2',
        subtitle: 'Subtitle of project 2',
        description: ['This is what we did'],
        img: null
    },
    {
        title: 'Project 3',
        subtitle: 'Subtitle of project 3',
        description: ['This is what we did'],
        img: null
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
                    <h2>{{ project.title }}</h2>
                    <i>{{ project.subtitle }}</i>

                    <ul>
                        <li v-for="line in project.description">
                            {{ line }}
                        </li>
                    </ul>
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
.title-container {
    display: flex;
    align-items: center;
    margin-left: 2rem;
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
