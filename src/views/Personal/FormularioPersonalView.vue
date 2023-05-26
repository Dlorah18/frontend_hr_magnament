<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
    <HeaderComponent :idRol="idRol"></HeaderComponent>

    <div class="container-secsion">
        <div class="container-fluid container-registro">
            <form v-on:submit.prevent="createdUser">
                <div class="row justify-content-md-center container-head">
                    <div class="col">
                        <p class="font-head-reg">Datos Generales del Puesto</p>
                    </div>
                </div>
                <div class="row justify-content-md-center" style="padding:15px;">
                    <div class="col column-rg">
                        Rq Netsuite
                    </div>
                    <div class="col">
                        <input type="text" maxlength="20" v-model="namesUser" class="form-control" name="namesUser"
                            required>
                    </div>
                    <div class="col column-rg">
                        Tipo de búsqueda 
                    </div>
                    <div class="col">
                        <select name="rolUser" v-model="rolUser" class="form-control">
                            <option value="0" selected>Seleccione el Rol</option>
                            <option value="1">Activa</option>
                            <option value="2">Pasiva</option>
                        </select>
                    </div>
                </div>
                <div class="row justify-content-md-center" style="padding:15px;">
                    <div class="col column-rg">
                        Nombre del puesto 
                    </div>
                    <div class="col">
                        <input type="text" maxlength="20" v-model="namesUser" class="form-control" name="namesUser"
                            required>
                    </div>
                    <div class="col column-rg">
                        Dirección a la que reporta  
                    </div>
                    <div class="col">
                        <select name="rolUser" v-model="rolUser" class="form-control">
                            <option value="0" selected>Seleccione el Rol</option>
                            <option value="1">Activa</option>
                            <option value="2">Pasiva</option>
                        </select>
                    </div>
                </div>
                <div class="row justify-content-md-center" style="padding:15px;">
                    <div class="col column-rg">
                        Número de posiciones  
                    </div>
                    <div class="col">
                        <input type="text" maxlength="20" v-model="namesUser" class="form-control" name="namesUser"
                            required>
                    </div>
                    <div class="col column-rg">
                        Tipo de contrato  
                    </div>
                    <div class="col">
                        <select name="rolUser" v-model="rolUser" class="form-control">
                            <option value="0" selected>Seleccione el Rol</option>
                            <option value="1">Activa</option>
                            <option value="2">Pasiva</option>
                        </select>
                    </div>
                </div>
                <div class="row justify-content-md-center" style="padding:15px;">
                    <div class="col column-rg">
                        Tiempo del contrato 
                    </div>
                    <div class="col">
                        <input type="text" maxlength="20" v-model="namesUser" class="form-control" name="namesUser"
                            required>
                    </div>
                    <div class="col column-rg">
                        Proyecto a cargo  
                    </div>
                    <div class="col">
                        <select name="rolUser" v-model="rolUser" class="form-control">
                            <option value="0" selected>Seleccione el Rol</option>
                            <option value="1">Activa</option>
                            <option value="2">Pasiva</option>
                        </select>
                    </div>
                </div>
                
                <div class="row justify-content-md-center" style="padding:15px;">
                    <div class="col column-rg">
                        País 
                    </div>
                    <div class="col">
                        <input type="text" maxlength="20" v-model="namesUser" class="form-control" name="namesUser"
                            required>
                    </div>
                    <div class="col column-rg">
                        Motivo de apertura   
                    </div>
                    <div class="col">
                        <select name="rolUser" v-model="rolUser" class="form-control">
                            <option value="0" selected>Seleccione el Rol</option>
                            <option value="1">Activa</option>
                            <option value="2">Pasiva</option>
                        </select>
                    </div>
                </div>
                <div class="row" style="padding:15px;">
                    <div class="col column-rg col-3">
                        Nombre de talento a quien reemplaza  
                    </div>
                    <div class="col col-3">
                        <input type="text" maxlength="20" v-model="namesUser" class="form-control" name="namesUser"
                            required>
                    </div><div class="col column-rg col-3">
                        Salario presupuestado 
                    </div>
                    <div class="col col-3">
                        <input type="text" maxlength="20" v-model="namesUser" class="form-control" name="namesUser"
                            required>
                    </div>
                </div>
                <div class="row container-head">
                    <div class="col">
                        <p class="font-head-reg">Perfil Requerido</p>
                    </div>
                </div>
                <div class="row justify-content-md-center " style="padding:15px;">
                    <div class="col column-rg">
                        Perfil
                    </div>
                    <div class="col">
                        <select name="rolUser" v-model="rolUser" class="form-control">
                            <option value="0" selected>Seleccione el Rol</option>
                            <option value="1">Administrador</option>
                            <option value="2">Especialista de Seleccion</option>
                            <option value="3">Solicitante</option>
                            <option value="4">Evaluador</option>
                        </select>
                    </div>
                    <div class="col column-rg">
                        Especialidad requerida
                    </div>
                    <div class="col">
                        <input type="text" v-model="emailUser" class="form-control" name="emailUser" required>
                    </div>
                </div>
                <div class="row" style="padding:15px;">
                    <div class="col-3 column-rg">
                        Formacion requerida
                    </div>
                    <div class="col-3 column-rg">
                        <input type="password" v-model="passUser" minlength="8" class="form-control" name="passUser"
                            required>
                    </div>
                    <div class="col-3 column-rg">
                        Formacion deseable
                    </div>
                    <div class="col-3 column-rg">
                        <input type="password" v-model="passUser" minlength="8" class="form-control" name="passUser"
                            required>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-auto">
                        <input class="btn button-sucess" type="submit" value="Guardar" />
                    </div>
                    <div class="col-md-auto">
                        <RouterLink to="/Personal" class="btn button-cancel">
                            Cancelar
                        </RouterLink>
                    </div>
                </div>
            </form>
            <ModalComponent v-if="error!==null" :redirec="redirec" :img="urlImg" :msg="msg" @close="error = null"></ModalComponent>
        </div>
    </div>
</template>
<script>
import { createUser } from "../../services/AdministradorServices";
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
            idRol: null,
            idUser: null,
            namesUser: null,
            lastnamesUser: null,
            rolUser: null,
            emailUser: null,
            passUser: null,
            error:null,
            msg: null,
			urlImg: null,
            redirec:null
        };
    },
    methods: {
        userData() {
            const reponse = userData(this.idUser).then((res) => {
                this.idRol = res.data[0].idRol;
                
            });
        },
        createdUser() {
            const reponse = createUser(this.namesUser, this.lastnamesUser, this.passUser, this.rolUser, this.emailUser).then((res) => {
                this.error=false
                this.msg = "Usuario Creado con el numero "+res.data.idUser
                this.urlImg="exitoso.svg"
                this.redirec="/ListarUsuario/"+res.data.idUser

            }).catch(error => {
				this.error = true
				this.msg = "Correo ya se encuentra registrado otro usuario"
				this.urlImg = "error.svg"
                this.redirec=null
			})
        }
    },
    created() {
        this.idUser = localStorage.getItem("idUser");
        this.userData();
    }, updated() {
        console.log(this.namesUser, ' ', this.lastnamesUser, this.passUser, this.rolUser, this.emailUser)
    }
};
</script>