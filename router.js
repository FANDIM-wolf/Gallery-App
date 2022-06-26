import {createRouter , createWebHashHistory} from 'vue-router';
import PostView from './components/PostView.vue';
import Main from './Main.vue'
const routes = [
    {   
        path:'/',
        component: Main
    },

    {   
        path:'/view_post/',
        component: PostView
    }
    
]

const router = createRouter({
    routes,
    history:createWebHashHistory(process.env.BASE_URL)
})

export default router;
