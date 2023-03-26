import { createRouter, createWebHistory } from 'vue-router'
import IniciarSesion from '../views/IniciarSesionView.vue'
import Dashboard from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'IniciarSesion',
      component: IniciarSesion
    },{
      path:'/Inicio',
      name:'Inicio',
      component:Dashboard
    }
  ]
})

export default router
