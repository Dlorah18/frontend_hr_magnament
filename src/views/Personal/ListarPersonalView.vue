<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <HeaderComponent :idRol="idRol"></HeaderComponent>

  <div class="container-secsion container">
    <form v-on:submit.prevent="filterUser">
      <div class="row form-group">
        <div class="col-4">
          <label for="codPuesto" class="col-sm-2 col-form-label">Codigo</label>
          <input class="form-control form-control-sm col-sm-10" type="text" name="codPuesto" />
        </div>

        <div class="col-4">
          <label for="nameSol" class="col-sm-2 col-form-label">Solicitante</label>
          <input class="form-control form-control-sm col-sm-10" type="text" name="nameSol" />
        </div>

        <div class="col-4">
          <label for="selectArea" class="col-sm-2 col-form-label">Area</label>
          <select class="form-control form-control-sm col-sm-10" type="date" name="selectArea">
            <option>Seleccione Area</option>
            <option>Activo</option>
            <option>Inactivo</option>
          </select>
        </div>

      </div>
      <div class="row d-flex justify-content-center" style="padding: 8px;">
        <RouterLink to="/CrearPersonal" class="hover-icon col-6 btn" style="width:10%;">
          <img class="icon-created" src="../../../public/images/agregar.png">
        </RouterLink>
      </div>
    </form>
    <div class="row">
      <TableComponent></TableComponent>
    </div>
  </div>
</template>
<script>
import { userData } from "../../services/SesionServices";
import TableComponent from "../../components/Personal/TableComponent.vue";
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
};
</script>
