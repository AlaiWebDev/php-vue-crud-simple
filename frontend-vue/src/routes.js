import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
      path: "/",
      name: "Users",
      component: () => import("./components/Users"),
    },
    {
      path: "/users",
      name: "Users",
      component: () => import("./components/Users"),
    },
    {
      path: "/user/:id",
      name: "User",
      component: () => import("./components/User"),
    },
  ];

  const router = createRouter({
      history: createWebHistory(),
      routes,
  })

// const router = new Router({
//     mode: 'history',
//     routes: [
//         {
//             path: "/",
//             name: "Users",
//             component: () => import("./components/Users"),
//         },
//         {
//             path: "/users",
//             name: "Users",
//             component: () => import("./components/Users"),
//         },
//         {
//             path: "/user/:id",
//             name: "User",
//             component: () => import("./components/User"),
//         },
//     ]
// });

export default router;