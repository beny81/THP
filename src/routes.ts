import { createRouter, createWebHistory } from "vue-router";


const routes =[
  { path: "/", component: () => import("./pages/Home.vue") },
  { path: "/profil", component: () => import("./pages/MyProfil.vue") },
  { path: '/:pathMatch(.*)*', component: () => import("./pages/404.vue") },

];




  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;
 