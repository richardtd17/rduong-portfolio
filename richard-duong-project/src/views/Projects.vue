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
            <div v-for="project in projects" class="grid-item">
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
    display: flex;

    height: 100%;
}
.title-container {
    display: flex;
    align-items: center;
    margin-left: 2rem;
}

.projects-container {
    margin-inline: 2rem;

    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    column-gap: 4rem;
}

.projects-container .grid-item {
    display: flex;
    flex-direction: column;

    justify-content: center;
    gap: 1rem;
}

.projects-container .grid-item .project-content {
    height: max-content;

    background: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    padding: 1rem 2rem;
}

.projects-container .grid-item .project-content:hover h2,
.projects-container .grid-item .project-content:hover li {
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

.projects-container .grid-item:nth-child(1) .project-content {
    animation: fadeInFromBottom 1.75s ease-in-out;
}

.projects-container .grid-item:nth-child(2) .project-content {
    animation: fadeInFromBottom 2.45s ease-in-out;
}

.projects-container .grid-item:nth-child(3) .project-content {
    animation: fadeInFromBottom 3.15s ease-in-out;
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
