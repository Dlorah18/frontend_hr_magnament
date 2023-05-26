<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
    <HeaderComponent :idRol="idRol"></HeaderComponent>

    <div class="container-secsion">
        <div class="container-fluid container-registro">
            <form v-on:submit.prevent="eventUser">
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
                        <input v-if="eventForm === '0'" type="text" maxlength="20" v-model="namesUser" class="form-control"
                            name="namesUser" required>
                        <input v-if="eventForm !== '0'" type="text" maxlength="20" v-model="namesUser" class="form-control"
                            name="namesUser" required>
                    </div>
                    <div class="col column-rg">
                        Apellidos
                    </div>
                    <div class="col">
                        <input type="text" v-if="eventForm === '0'" maxlength="20" v-model="lastnamesUser"
                            class="form-control" name="lastnamesUser" required>
                        <input type="text" v-if="eventForm !== '0'" maxlength="20" v-model="lastnamesUser"
                            class="form-control" name="lastnamesUser" required>
                    </div>
                </div>
                <div class="row container-head">
                    <div class="col">
                        <p class="font-head-reg">Datos Usuario</p>
                    </div>
                </div>
                <div class="row">

                </div>
                <div class="row justify-content-md-center " style="padding:15px;">
                    <div class="col column-rg">
                        Rol
                    </div>
                    <div class="col">
                        <select name="rolUser" v-model="rolUser" class="form-control" required>
                            <option value="0" selected>Seleccione el Rol</option>
                            <option value="1">Administrador</option>
                            <option value="2">Especialista de Seleccion</option>
                            <option value="3">Solicitante</option>
                            <option value="4">Evaluador</option>
                        </select>
                    </div>
                    <div class="col column-rg">
                        Email
                    </div>
                    <div class="col">
                        <input type="email" v-if="eventForm === '0'" v-model="emailUser" class="form-control"
                            name="emailUser" required>
                        <input type="email" v-if="eventForm !== '0'" v-model="emailUser" class="form-control"
                            name="emailUser" disabled>
                    </div>
                </div>
                <div v-if="eventForm === '0'" class="row" style="padding:15px;">
                    <div class="col-3 column-rg">
                        Contraseña
                    </div>
                    <div  class="col-3 column-rg">
                        <input type="password"  v-model="passUser" minlength="8"
                            class="form-control" name="passUser" required>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-auto">
                        <input class="btn button-sucess" type="submit" value="Guardar" />
                    </div>
                    <div class="col-md-auto">
                        <RouterLink to="/Usuario" class="btn button-cancel">
                            Cancelar
                        </RouterLink>
                    </div>
                </div>
            </form>
            <ModalComponent v-if="error !== null" :redirec="redirec" :img="urlImg" :msg="msg" @close="error = null">
            </ModalComponent>
        </div>
    </div>
</template>
<script>
import { previewUser, createUser,editUser } from "../../services/AdministradorServices";
import { userData } from "../../services/SesionServices";
import HeaderComponent from "../../components/HeaderComponent.vue";
import ModalComponent from "../../components/ModalComponent.vue";
export default {
    components: {
        HeaderComponent,
        ModalComponent
    },
    data() {
        return {
            eventForm: null,
            idRol: null,
            idUser: null,
            namesUser: null,
            lastnamesUser: null,
            rolUser: null,
            emailUser: null,
            passUser: null,
            error: null,
            msg: null,
            urlImg: null,
            redirec: null,
            data: null
        };
    },
    methods: {
        userData() {
            const reponse = userData(this.idUser).then((res) => {
                this.idRol = res.data[0].idRol;

            });
        },
        previewUser() {
            const reponse = previewUser(this.$route.params.Event).then((res) => {
                this.namesUser=res.data[0].namesUser
                this.lastnamesUser=res.data[0].lastnameUser
                this.emailUser=res.data[0].emailUser
                this.rolUser=res.data[0].nameRol
            });
        },
        eventUser() {
            if(this.eventForm!=='0'){
                this.editUser()
            }else{
                this.createdUser()
            }
        },
        createdUser() {
            const reponse = createUser(this.namesUser, this.lastnamesUser, this.passUser, this.rolUser, this.emailUser).then((res) => {
                this.error = false
                this.msg = "Usuario Creado con el numero " + res.data.idUser
                this.urlImg = "exitoso.svg"
                this.redirec = "/ListarUsuario/" + res.data.idUser

            }).catch(error => {
                
                this.error = true
                this.msg = "Correo ya se encuentra registrado otro usuario"
                this.urlImg = "error.svg"
                this.redirec = null
            })
        },
        editUser() {
            const reponse = editUser(this.namesUser, this.lastnamesUser,this.rolUser,this.$route.params.Event).then((res) => {
                this.error = false
                console.log("error")
                this.msg = "El Usuario con el numero " +res.data.idUser+" se ha actualizado"
                this.urlImg = "exitoso.svg"
                this.redirec = "/ListarUsuario/" + res.data.idUser

            }).catch(error => {
                console.log(error)
                this.error = true
                this.msg = "Correo ya se encuentra registrado otro usuario"
                this.urlImg = "error.svg"
                this.redirec = null
            })
        }
    },
    created() {
        if(this.$route.params.Event!=='0'){
            this.previewUser()
        }
        this.eventForm = this.$route.params.Event
        this.idUser = localStorage.getItem("idUser");
        this.userData();
    }, updated() {
        console.log(this.namesUser, ' ', this.lastnamesUser, this.passUser, this.rolUser, this.emailUser)
    }
};
</script>