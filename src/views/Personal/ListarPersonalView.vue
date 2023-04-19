<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <HeaderComponent :idRol="idRol"></HeaderComponent>
    <div class="container-secsion">
        <div class="filterQuery">
            <span>
                <label for="codPuesto">Codigo</label>
                <input class="text-input" type="text" name="codPuesto">
            </span>
            <span>
                <label for="nameSol">Solicitante</label>
                <input class="text-input" type="text" name="nameSol">
            </span>
            <span>
                <label for="selectArea">Area</label>
                <select class="select-input" type="date" name="selectArea">
                    <option>Seleccione Area</option>
                    <option>Activo</option>
                    <option>Inactivo</option>
                </select>
            </span>
            <div style="margin-top: 10px;">
                <span>
                    <input class="button-sucess" type="button" value="Buscar">
                </span>
                <span>
                    <input class="button-cancel" type="button" value="Limpiar">
                </span>
            </div>
        </div>
        <TableComponent></TableComponent>
    </div>
</template>
<script>
import { userData } from "../../services/SesionServices";
import TableComponent from '../../components/Personal/TableComponent.vue';
import HeaderComponent from '../../components/HeaderComponent.vue';
export default {
    components: {
        TableComponent,
        HeaderComponent
    }, data() {
        return {
            idRol:null,
            idUser:null
        }
    }, methods: {
        userData() {
            const reponse = userData(this.idUser).then(res => {
                this.idRol = res.data.idRol
            })
        }

    },mounted() {
        this.idUser = localStorage.getItem("idUser")
        this.userData()
    }
}
</script>