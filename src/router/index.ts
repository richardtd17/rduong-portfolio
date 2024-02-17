import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../views/AboutMe.vue'
import ContactMe from '../views/ContactMe.vue'
import Projects from '../views/Projects.vue'
import Experience from '../views/Experience.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AboutMe
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/experience',
            name: 'experience',
            component: Experience
        },
        {
            path: '/contact-me',
            name: 'contact-me',
            component: ContactMe
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router
