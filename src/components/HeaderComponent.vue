<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <header>
        <nav>
            <div class="container">
                <div class="item-menu">
                    <a target="_blank">
                        <img src="../assets/logoHR_MAGNAMENT.png">
                    </a>
                </div>
                <div class="nav">
                    <ul>
                        <li>
                            <a>Usuario</a>
                            <ul>
                                <li v-if="idRol ==1">
                                    <RouterLink to="/Usuario">
                                        Gestionar Usuarios
                                    </RouterLink>
                                </li>
                                <li><a>Actualizar Datos</a></li>
                            </ul>
                        </li>
                        <li v-if="idRol!=1">
                            <RouterLink to="/Personal">Personal</RouterLink>
                        </li>
                        <li v-if="idRol!=1 && idRol!=4">
                            <RouterLink to="/Candidato">Candidatos</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Cerrar Sesion</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    props: {
        idRol: Number,
    }
}
</script>