<template>
    <div>
        <div class="container-table">
            <v-table>

            </v-table>
            <table>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Fecha Creacion</th>
                    </tr>
                </thead>
                <tbody v-for="registro in datos">
                    <tr v-for="elemento in registro">
                        <td>{{ elemento.Codigo }}</td>
                        <td>{{ elemento.Nombres }}</td>
                        <td>{{ elemento.Apellidos }}</td>
                        <td>{{ elemento.Rol }}</td>
                        <td>{{ elemento.Estado }}</td>
                        <td>{{ elemento.FechaCreacion }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            
        </div>
    </div>
</template>
<script>
import Paginate from 'vue-paginate'
export default {
    components: {
        Paginate
    },
    data() {
        return {
            datos: null,
            currentPage: 1,  // El número de la página actual
            registrosPagina: 10,
        }
    }, mounted() {
        this.datos = {
            datos: [
                {
                    'Codigo': "1",
                    'Nombres': "2",
                    'Apellidos': "3",
                    'Rol': "4",
                    'Estado': "5",
                    'FechaCreacion': "6"
                },
                {
                    'Codigo': "1",
                    'Nombres': "2",
                    'Apellidos': "3",
                    'Rol': "4",
                    'Estado': "5",
                    'FechaCreacion': "6"
                },
                {
                    'Codigo': "1",
                    'Nombres': "2",
                    'Apellidos': "3",
                    'Rol': "4",
                    'Estado': "5",
                    'FechaCreacion': "6"
                },
                {
                    'Codigo': "1",
                    'Nombres': "2",
                    'Apellidos': "3",
                    'Rol': "4",
                    'Estado': "5",
                    'FechaCreacion': "6"
                }
            ]
        }
    }
}

</script>