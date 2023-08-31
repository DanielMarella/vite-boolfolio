import { createRouter, createWebHistory } from "vue-router";

//importo componenti
import HomePage from './pages/HomePage.vue'
import Projects from './pages/Projects.vue'




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage,
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects,
        }
    ]
})

export {router};