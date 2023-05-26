<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="row">
    <div class="container-table container-fluid">
      <table>
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="registro in data">
            <td>{{ registro.nombres }}</td>
            <td>{{ registro.apellidos }}</td>
            <td>{{ registro.nomRol }}</td>
            <td v-bind:class="{
              'activate-state': registro.estado === 'Activo',
              'inactivate-state': registro.estado === 'Inactivo',
            }">
              {{ registro.estado }}
            </td>
            <td>
              <div class="row">
                <RouterLink :to="'/ListarUsuario/' + registro.id" class="hover-icon col-12 btn">
                    <img class="icon" src="../../../public/images/lupa.png">
                </RouterLink>

              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { listUsers } from "../../services/AdministradorServices";
export default {
  props: {
    rolFilter: Number,
    userFilter: String,
    stateFilter: String

  },
  data() {
    return {
      data: null,
    };
  },
  methods: {
    listUsers() {    
      const response = listUsers(this.rolFilter,this.userFilter,this.stateFilter).then((res) => {
        this.data = res.data;
      });
    },
  },
  created() {
    this.listUsers()
  },beforeUpdate(){
    this.listUsers()
    
  }
};
</script>
