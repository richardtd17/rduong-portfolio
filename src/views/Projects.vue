<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';


onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
});

interface Project {
    title: string;
    subtitle?: string;
    status: string;
    description: string[];
    iconImgSrc?: string;
    imgSrcs?: string[];
    links: { [key: string]: string };
}

const projects = ref<Project[]>([
    {
        title: 'activeherb.com Web Pages',
        subtitle: 'Full Stack Developer',
        status: 'Completed',
        description: [
            'Implemented reactive webpages for activeherb.com',
            'Technologies: Vue.js, Javascript, HTML, CSS, Mivascript'
        ],
        imgSrcs: [
            '/img/projects/activeherb-website/checkout-page.png',
            '/img/projects/activeherb-website/user-info.jpeg',
            '/img/projects/activeherb-website/modern-essentials-productlist.png',
            '/img/projects/activeherb-website/homepage.png',
            '/img/projects/activeherb-website/quality-assurance-example.png',
        ],
        iconImgSrc: '/img/experience/activeherb-logo.jpeg',
        links: {
            github: ''
        }
    },
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
]);

const isModalOpen = ref(false);
const selectedProjectImages = ref<string[]>([]);
const selectedImageIndex = ref(0);

const openModal = (images: string[], index: number) => {
    selectedProjectImages.value = images;
    selectedImageIndex.value = index;
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
    selectedProjectImages.value = [];
    selectedImageIndex.value = 0;
};

const prevImage = () => {
    if (selectedImageIndex.value > 0) {
        selectedImageIndex.value--;
    } else {
        selectedImageIndex.value = selectedProjectImages.value.length - 1;
    }
};

const nextImage = () => {
    if (selectedImageIndex.value < selectedProjectImages.value.length - 1) {
        selectedImageIndex.value++;
    } else {
        selectedImageIndex.value = 0;
    }
};

const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
        prevImage();
    } else if (event.key === 'ArrowRight') {
        nextImage();
    }
};

</script>

<template>
    <section id="projects-section">
        <div class="title-container fade-in-from-right">
            <h1>Projects</h1>
        </div>

        <div class="projects-container">
            <div v-for="(project, projectIndex) in projects" :key="projectIndex" class="item">
                <div class="project-content">
                    <div class="header">
                        <img v-if="project.iconImgSrc" class="icon" :src="project.iconImgSrc">
                        <div class="title-container">
                            <h2>{{ project.title }}</h2>
                            <i>{{ project.status }}</i>
                            <i>{{ project.subtitle }}</i>
                        </div>
                    </div>

                    <ul class="description">
                        <li v-for="(line, lineIndex) in project.description" :key="lineIndex">
                            {{ line }}
                        </li>
                    </ul>

                    <div v-if="project.imgSrcs && project.imgSrcs.length > 0" class="gallery-icon">
                        <i class="fa-solid fa-images" @click="openModal(project.imgSrcs, 0)"></i>
                    </div>

                    <div class="links">
                        <a v-if="project.links.github" :href="project.links.github" target="_blank">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
            <div class="modal">
                <span class="arrow left-arrow" @click="prevImage">&#10094;</span>
                
                <img :src="selectedProjectImages[selectedImageIndex]" alt="Project Image" />

                <span class="arrow right-arrow" @click="nextImage">&#10095;</span>
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
    cursor: pointer;
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
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.modal {
    position: relative;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal img {
    height: 100%;
    width: auto;
    object-fit: contain;
}

.gallery-icon {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 2rem;
}
.gallery-icon i {
    cursor: pointer;
}


.close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
}

.arrow {
    position: fixed; /* Position arrows relative to the viewport */
    top: 50%;
    transform: translateY(-50%);
    font-size: 3rem;
    color: white;
    cursor: pointer;
    user-select: none;
    z-index: 1001;
}

.left-arrow {
    left: 20px; /* Adjust the distance from the left side */
}

.right-arrow {
    right: 20px; /* Adjust the distance from the right side */
}



@media screen and (max-width: 540px) {
    .projects-container .item .project-content {
        padding: 1rem 1rem;
    }
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
