import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: DashboardView,
            meta: {
                title: 'Welcome'
            }
        },
        {
            path: '/:app/',
            name: 'app_view',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/AppView.vue'),
            meta: {
                title: 'Model Objects'
            }
        },
        {
            path: '/:app/:model/',
            name: 'list_view',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/ListView.vue'),
        },
        {
            path: '/:app/:model/add',
            name: 'add_view',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/FormView.vue'),
            meta: {
                title: 'Add'
            }
        },
        {
            path: '/:app/:model/:id/change',
            name: 'change_view',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/FormView.vue'),
            meta: {
                title: 'Edit'
            }
        }
    ]
})

export default router
