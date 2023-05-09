<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <HeaderComponent :idRol="idRol"></HeaderComponent>
  <div class="container-secsion container">
    <div class="row form-group">
      <div class="col-4">
      <div class="row">
        <label for="username" class="col-sm-2 col-form-label">Usuario</label>
        <input class="form-control form-control-sm col-sm-10" type="text" name="username" />
      </div>
      </div>
      <div class="col-4 form-group">
      <div class="row">
        <label for="stateUser" class="col-sm-2 col-form-label">Estado</label>
        <select class="form-control form-control-sm col-sm-10" type="date" name="stateUser">
          <option>Seleccione el Estado</option>
          <option>Activo</option>
          <option>Inactivo</option>
        </select>
      </div>
      </div>
      <div class="col-4 form-group ">
      <div class="row">
        <label for="rolUser" class="col-sm-2 col-form-label">Rol</label>
        <select class="form-control form-control-sm col-sm-10" type="date" name="rolUser">
          <option>Seleccione el Rol</option>
          <option>Administrador</option>
          <option>Especialista de Seleccion</option>
          <option>Solicitante</option>
          <option>Evaluador</option>
        </select>
      </div>
        
      </div>

      <div class="row d-flex justify-content-center">
        <div class="col-6">
          <input class="btn button-sucess" type="button" value="Buscar" />
        </div>
        <div class="col-6">
          <input class="btn button-cancel" type="button" value="Limpiar" />
        </div>
      </div>
    </div>
   
      <TableComponent ></TableComponent>
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
    };
  },
  methods: {
    userData() {
      const reponse = userData(this.idUser).then((res) => {
        this.idRol = res.data[0].idRol;
      });
    }
    
  },
  created() {
    
    this.idUser = localStorage.getItem("idUser");
    this.userData();
    
  }
};
</script>
