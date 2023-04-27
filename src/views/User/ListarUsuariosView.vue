<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <HeaderComponent :idRol="idRol"></HeaderComponent>
    <div class="container-secsion">
        <form class="filterQuery">
            <span>
                <label for="username">Usuario</label>
                <input class="text-input" type="text" name="username">
            </span>
            <span>
                <label for="stateUser">Estado</label>
                <select class="select-input" type="date" name="stateUser">
                    <option>Seleccione el Estado</option>
                    <option>Activo</option>
                    <option>Inactivo</option>
                </select>
            </span>
            <span>
                <label for="rolUser">Rol</label>
                <select class="select-input" type="date" name="rolUser">
                    <option>Seleccione el Rol</option>
                    <option>Administrador</option>
                    <option>Especialista de Seleccion</option>
                    <option>Solicitante</option>
                    <option>Evaluador</option>
                </select>
            </span>

            <div>
                <span>
                    <input class="button-sucess" type="button" value="Buscar">
                </span>
                <span>
                    <input class="button-cancel" type="button" value="Limpiar">
                </span>
            </div>
        </form>
        <TableComponent :data="data"></TableComponent>
    </div>
</template>
<script>
import { userData } from "../../services/SesionServices";
import { listUsers } from "../../services/AdministradorServices";
import TableComponent from '../../components/User/TableComponent.vue';
import HeaderComponent from '../../components/HeaderComponent.vue';

export default {
    components: {
        TableComponent,
        HeaderComponent
    }, data() {
        return {
            idRol: null,
            idUser: null,
            data: null
        }
    },
    methods: {
        userData() {
            const reponse = userData(this.idUser).then(res => {
                this.idRol = res.data[0].idRol
            })
        }
        , listUsers() {
            const response = listUsers().then(res => {
                this.data = res.data
            })
        }

    },
    created() {
        this.idUser = localStorage.getItem("idUser")
        this.userData()
        this.listUsers()
    }

}
</script>