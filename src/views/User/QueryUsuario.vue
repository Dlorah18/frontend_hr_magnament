<template>
    <HeaderComponent :idRol="idRol"></HeaderComponent>
    <div class="container-secsion">
        <div class="container-fluid container-registro" v-for="registro in data">
            <div class="row justify-content-end" style="padding:8px">
                <div v-if="idRol === 1" class="justify-content-start col-md">
                    <RouterLink to="/Usuario" class="btn button-cancel">
                        Regresar
                    </RouterLink>
                </div>
                <div v-if="idRol === 1" class="col-md-auto">
                    <input class="btn button-sucess" type="button" value="Editar">
                </div>
                <div v-if="idRol === 1" class="col-md-auto">
                    <input @click="activeUser" v-if="registro.stateUser === 'Activo'" class="btn button-sucess" type="button"
                        value="Inactivar">
                    <input @click="activeUser" v-if="registro.stateUser === 'Inactivo'" class="btn button-sucess"
                        type="button" value="Activar">
                </div>
                <div class="col-md-auto">
                    <input class="btn button-sucess" type="button" value="Cambiar Contraseña">
                </div>
            </div>
            <div class="row justify-content-md-center container-head">
                <div class="col">
                    <p class="font-head-reg">Datos Personales</p>
                </div>
            </div>
            <div class="row justify-content-md-center" style="padding:15px;">
                <div class="col column-rg">
                    Nombres
                </div>
                <div class="col">
                    {{ registro.namesUser }}
                </div>
                <div class="col column-rg">
                    Apellidos
                </div>
                <div class="col">
                    {{ registro.lastnameUser }}
                </div>
            </div>
            <div class="row container-head">
                <div class="col">
                    <p class="font-head-reg">Datos Usuario</p>
                </div>
            </div>
            <div class="row">

            </div>
            <div class="row justify-content-md-center" style="padding:15px;">
                <div class="col column-rg">
                    Usuario
                </div>
                <div class="col">
                    {{ registro.idUser }}
                </div>
                <div class="col column-rg">
                    Rol
                </div>
                <div class="col">
                    {{ registro.nameRol }}
                </div>
            </div>
            <div class="row justify-content-md-center" style="padding:15px;">
                <div class="col column-rg">
                    Email
                </div>
                <div class="col">
                    {{ registro.emailUser }}
                </div>
                <div class="col column-rg">
                    Fecha Creacion
                </div>
                <div class="col">
                    {{ registro.datCrea }}
                </div>

            </div>
            <div class="row justify-content-md-center" style="padding:15px;">
                <div class="col column-rg">
                    Fecha Modificacion
                </div>
                <div class="col">
                    {{ registro.idUser }}
                </div>
                <div class="col column-rg">
                    Estado
                </div>
                <div class="col">
                    {{ registro.stateUser }}
                </div>
            </div>
            <div class="row" style="padding:15px;">
                <div class="col column-rg">
                    Razon del Bloqueo
                </div>
                <div class="col">
                    {{ registro.rBlo }}
                </div>
                <div class="col column-rg">
                    Fecha de Bloqueo
                </div>
                <div class="col">
                    {{ registro.datBLo }}
                </div>
            </div>
        </div>
    </div>
    <ModalComponent v-if="error !== null" :redirec="redirec" :img="urlImg" :msg="msg" @close="error = null"></ModalComponent>
</template>
<script>
import { userData } from "../../services/SesionServices";
import HeaderComponent from "../../components/HeaderComponent.vue";
import { previewUser, activeUser } from "../../services/AdministradorServices"
import ModalComponent from "../../components/ModalComponent.vue";


export default {
    components: {
        HeaderComponent,
        ModalComponent,
    },
    data() {
        return {
            idRol: null,
            idUser: null,
            data: null,
            error: null,
            msg: null,
            urlImg: null,
            redirec: null
        };
    },
    methods: {
        previewUser() {
            const reponse = previewUser(this.$route.params.idUser).then((res) => {
                this.data = res.data;
            });
        },
        userData() {
            const reponse = userData(this.idUser).then((res) => {
                this.idRol = res.data[0].idRol;
            });
        },
        activeUser() {
            console.log(this.data[0].stateUser)

            const reponse = activeUser(this.data[0].idUser, 'Fue bloqueado por un administrador', this.data[0].stateUser).then((res) => {
                this.error = false
                this.msg = "El usuario fue " + res.data.estadoActual
                this.urlImg = "exitoso.svg"
                this.redirec = "/ListarUsuario/" + this.data[0].idUser
                setTimeout(() => {
                    window.location.reload();
                }, 10000);
            });
        }
    },
    created() {
        this.idUser = localStorage.getItem("idUser");
        this.previewUser();
        this.userData();
    },
};
</script>