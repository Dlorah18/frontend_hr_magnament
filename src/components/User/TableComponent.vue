<template>
  <div class="row">
    <div class="container-table">
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Fecha Creacion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="registro in data">
            <td>{{ registro.id }}</td>
            <td>{{ registro.nombres }}</td>
            <td>{{ registro.apellidos }}</td>
            <td>{{ registro.nomRol }}</td>
            <td v-bind:class="{
              'activate-state': registro.estado === 'Activo',
              'inactivate-state': registro.estado === 'Inactivo',
            }">
              {{ registro.estado }}
            </td>
            <td>{{ registro.fechaCreacion }}</td>
            <td>
              <div class="row">
                <div class="col-6">
                  <img  class="icon" src="../../../public/images/lupa.png">
                </div>
                <div class="col-6">
                  <img class="icon" src="../../../public/images/editar.png">
                </div>
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
  data() {
    return {
      data: null
    };
  },
  methods: {
    listUsers() {
      const response = listUsers().then((res) => {
        this.data = res.data;
      });
    },
  },
  created() {
    this.listUsers()
  }
};
</script>
