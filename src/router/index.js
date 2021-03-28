import Vue from 'vue';
import VueRouter from 'vue-router';

/* Layout */
import AboutMe from '../views/AboutMe';
import ContactInformation from "@/views/ContactInformation";
import MyProjects from "@/views/MyProjects";
import HomePage from "@/views/HomePage";


Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      name: 'HomePage',
      component: HomePage,
   },
   {
      path: '/about',
      name: 'AboutMe',
      component: AboutMe,
   },
   {
      path: '/contacts',
      name: 'ContactInformation',
      component: ContactInformation,
   },
   {
      path: '/projects',
      name: 'MyProjects',
      component: MyProjects,
   },
   // {
   //     path: '',
   //     component: Layout,
   //     redirect: 'dashboard',
   //     children: [
   //         {
   //             path: 'dashboard',
   //             component: () => import('@/views/dashboard/component'),
   //             name: 'Dashboard',
   //             meta: { title: 'dashboard', icon: 'dashboard', noCache: false },
   //         },
   //         {
   //             path: 'users',
   //             component: () => import('@/views/users/component'),
   //             name: 'users',
   //             meta: {
   //                 title: 'users',
   //                 icon: 'users',
   //                 noCache: false,
   //             },
   //         },
   //         {
   //             path: 'projects',
   //             component: () => import('@/views/projects/component'),
   //             name: 'projects',
   //             meta: { title: 'projects', icon: 'projects', noCache: false },
   //         },
   //         {
   //             path: 'widgets',
   //             component: () => import('@/views/widgets/component'),
   //             name: 'widgets',
   //             meta: { title: 'widgets', icon: 'widgets', noCache: false },
   //         },
   //         {
   //             path: 'orders',
   //             component: () => import('@/views/orders/component'),
   //             name: 'orders',
   //             meta: { title: 'orders', icon: 'orders', noCache: false },
   //         },
   //     ],
   // },
];

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes,
});
export default router;
