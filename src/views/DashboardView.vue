<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <Header :idRol="idRol"></Header>
    <div class="container-secsion container">
        <div class="containerCenterimg">
            <div>
                <img class="message" src="../assets/perfil-del-usuario.png">
            </div>
            <div>
                <p>Bienvenido</p>
                <p>{{ nameRol }} {{ Username }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { userData } from "../services/SesionServices"
import Header from '../components/HeaderComponent.vue'
export default {
    components: {
        Header
    },
    data() {
        return {
            idUser: null,
            Username: null,
            idRol: null,
            nameRol: null,
        }
    },
    methods: {
        userData() {
            const reponse = userData(this.idUser).then(res => {
                this.Username = res.data[0].nombres + " " + res.data[0].apellidos
                this.idRol = res.data[0].idRol
                this.nameRol = res.data[0].nomRol
            })
        }
    },
    created() {
        this.idUser = this.$route.query.idUser
        this.userData()
        localStorage.setItem("idUser", this.idUser);
    }
}
</script>
