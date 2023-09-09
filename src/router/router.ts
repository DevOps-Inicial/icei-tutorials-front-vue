import { createWebHistory, createRouter  } from "vue-router";

// definicion de una constante para el manejo de las rutas, similar a Angular
const routes = [
    { path: "/",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("../components/tutorial/ListTutorial.vue")
    },
    { path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("../components/tutorial/EditTutorial.vue")
    },
    { path: "/add",
      name: "add",
      component: () => import("../components/tutorial/AddTutorial.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;