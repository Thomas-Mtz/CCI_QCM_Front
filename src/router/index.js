import { createRouter, createWebHistory } from "vue-router";

// Auth
import Login from "@/views/auth/Login.vue";
import authGuard from "@/_helpers/auth-guard.js";

// Public
import {
  Home,
  Qcm,
  Contact,
  Profil,
  Inscription,
  NotFound,
  PublicLayout,
} from "../views/public";

// Admin
import {
  AdminLayout,
  Dashboard,
  UserIndex,
  UserEdit,
  UserAdd,
  QCMAdd,
  QCMEdit,
  QCMIndex,
  IndexCDF,
} from "../views/admin";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "public",
      component: PublicLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/qcm",
          name: "qcm",
          component: Qcm,
        },
        {
          path: "/contact",
          name: "contact",
          component: Contact,
        },
        {
          path: "/profil",
          name: "profil",
          component: Profil,
        },
        {
          path: "/inscription",
          name: "inscription",
          component: Inscription,
        },
      ],
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminLayout,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: Dashboard,
        },
        {
          path: "/users/index",
          name: "UserIndex",
          component: UserIndex,
        },
        {
          path: "/users/edit/:id(\\d+)",
          name: "UserEdit",
          component: UserEdit,
          props: true,
        },
        {
          path: "/users/add/",
          name: "UserAdd",
          component: UserAdd,
        },
        {
          path: "/qcm/index",
          name: "QcmIndex",
          component: QCMIndex,
        },
        {
          path: "/qcm/edit/:id",
          name: "QcmEdit",
          component: QCMEdit,
        },
        {
          path: "/qcm/add/",
          name: "QcmAdd",
          component: QCMAdd,
        },
        {
          path: "/cdf/index",
          name: "IndexCDF",
          component: IndexCDF,
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
});

// Verrouillage d ela partie admin avec token
// router.beforeEach((to, from, next) => {
//   if (to.matched[0].name == "admin") {
//     authGuard(to, from, next);
//   }
//   next();
// });

export default router;
