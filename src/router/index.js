import { createRouter, createWebHistory } from 'vue-router'
import IniciarSesion from '../views/IniciarSesionView.vue'
import Dashboard from '../views/DashboardView.vue'
import ListarUsuarios from '../views/User/ListarUsuariosView.vue'
import ListarPersonal from '../views/Personal/ListarPersonalView.vue'
import ListarCandidato from '../views/Candidato/ListarCandidatoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'IniciarSesion',
      component: IniciarSesion
    },{
      path:'/Inicio/',
      name:'Inicio',
      component:Dashboard
    },
    {
      path:'/Usuario',
      name:'Usuario',
      component:ListarUsuarios
    },
    {
      path:'/Personal',
      name:'Personal',
      component:ListarPersonal
    },
    {
      path:'/Candidato',
      name:'Candidato',
      component:ListarCandidato
    }
  ]
})

export default router
