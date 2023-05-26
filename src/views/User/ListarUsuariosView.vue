<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <HeaderComponent :idRol="idRol"></HeaderComponent>
  <div class="container-secsion container">
    <form v-on:submit.prevent="filterUser">
      <div class="row form-group">
        <div class="col-4">
          <label for="username" class="col-sm-2 col-form-label">Usuario</label>
          <input class="form-control form-control-sm col-sm-10" type="text" name="username" v-model="userFilter" />
        </div>
        <div class="col-4 form-group">
          <label for="stateUser" class="col-sm-2 col-form-label">Estado</label>
          <select class="form-control form-control-sm col-sm-10" name="stateUser" v-model="stateFilter">
            <option value="0" selected>Seleccione el Estado</option>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>
        <div class="col-4 form-group">
          <label for="rolUser" class="col-sm-2 col-form-label">Rol</label>
          <select class="form-control form-control-sm col-sm-10" v-model="rolFilter" name="rolUser">
            <option value="0" selected>Seleccione el Rol</option>
            <option value="1">Administrador</option>
            <option value="2">Solicitante</option>
            <option value="3">Lider Financiero</option>
            <option value="4">Especialista de Seleccion</option>
            <option value="4">Evaluador</option>
          </select>

        </div>
      </div>
      <div class="row d-flex justify-content-center" style="padding: 8px;">
          <RouterLink to="/FormulUsuario/15" class="hover-icon col-6 btn" style="width:10%;">
            <img class="icon-created" src="../../../public/images/agregar.png">
          </RouterLink>
      </div>
    </form>
    <TableComponent v-if="userFilter !== null || rolFilter !== null || stateFilter !== null" :rolFilter="rolFilter"
      :userFilter="userFilter" :stateFilter="stateFilter"></TableComponent>
  </div>
</template>
<script>
import { userData } from "../../services/SesionServices";
import TableComponent from "../../components/User/TableComponent.vue";
import HeaderComponent from "../../components/HeaderComponent.vue";

export default {
  components: {
    TableComponent,
    HeaderComponent,
  },
  data() {
    return {
      idRol: null,
      idUser: null,
      data: null,
      rolFilter: null,
      userFilter: null,
      stateFilter: null,
      redirec: null,
      busqueda: false
    };
  },
  methods: {
    userData() {
      const reponse = userData(this.idUser).then((res) => {
        this.idRol = res.data[0].idRol;
      });
    },

  },
  created() {

    this.idUser = localStorage.getItem("idUser");
    this.userData();

  },
  updated() {
    this.busqueda = true
  }
};
</script>
