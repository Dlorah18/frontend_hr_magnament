import { createRouter, createWebHistory } from 'vue-router'
import IniciarSesion from '../views/IniciarSesionView.vue'
import Dashboard from '../views/DashboardView.vue'
import ListarUsuarios from '../views/User/ListarUsuariosView.vue'
import ListarPersonal from '../views/Personal/ListarPersonalView.vue'
import ListarCandidato from '../views/Candidato/ListarCandidatoView.vue'
import QueryUsuario from '../views/User/QueryUsuario.vue'
import FormularioUsuarioView from '../views/User/FormularioUsuarioView.vue'
import FormularioPersonalView from '../views/Personal/FormularioPersonalView.vue'

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
    },
    {
      path:'/ListarUsuario/:idUser',
      name:'ListarUsuario',
      component:QueryUsuario
    },
    {
      path:'/FormulUsuario/:Event',
      name:'CrearUsuario',
      component:FormularioUsuarioView
    },
    {
      path:'/CrearPersonal',
      name:'CrearPersonal',
      component:FormularioPersonalView
    }
  ]
})

export default router
