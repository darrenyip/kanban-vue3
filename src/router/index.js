import { createRouter, createWebHistory } from "vue-router";
import KanbanMain from "../components/kanban/KanbanMain.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: KanbanMain,
    },
    {
      path: "/kanban/:id",
      name: "kanban",
      component: KanbanMain,
    },
  ],
});

export default router;
