import { createRouter, createWebHistory } from 'vue-router'
import ListeEmployes from "../views/ListeEmployes.vue"
import SalairesView from '../views/SalairesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"listeEmployes",
      component:ListeEmployes
    },
    {
      path:"/salaires",
      name:"listeSalaires",
      component:SalairesView
    }
  ]
})

export default router
