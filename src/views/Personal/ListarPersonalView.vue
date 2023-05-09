<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <HeaderComponent :idRol="idRol"></HeaderComponent>
  
  <div class="container-secsion container">
    <div class="row">
      <div class="col">
        <label for="codPuesto">Codigo</label>
        <input class="text-input" type="text" name="codPuesto" />
      </div>

      <div class="col">
        <label for="nameSol">Solicitante</label>
        <input class="text-input" type="text" name="nameSol" />
      </div>

      <div class="col">
        <label for="selectArea">Area</label>
        <select class="select-input" type="date" name="selectArea">
          <option>Seleccione Area</option>
          <option>Activo</option>
          <option>Inactivo</option>
        </select>
      </div>

      <div class="col">
        <input class="button-cancel" type="button" value="Limpiar" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input class="button-sucess" type="button" value="Buscar" />
      </div>
    </div>
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
