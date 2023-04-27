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
                            'inactivate-state': registro.estado === 'Inactivo'
                        }">
                            {{ registro.estado }}
                        </td>
                        <td>{{ registro.fechaCreacion }}</td>
                        <td>Accion</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <paginate v-model="currentPage" :page-count="pageCount" :margin-pages="2" :prev-text="'Anterior'"
                :next-text="'Siguiente'" :container-class="'pagination'" :page-class="'page-item'" :active-class="'active'"
                :disabled-class="'disabled'"></paginate>
        </div>
    </div>
</template>
<script>
import Paginate from 'vuejs-paginate'

export default {
    components:{
        Paginate
    },
    props: {
        data: Array
    },
    data() {
        return {
            itemsPerPage: 10,
            currentPage: 1
        }
    }, methods: {
        paginatedItems() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage
            const endIndex = startIndex + this.itemsPerPage
            return this.data.slice(startIndex, endIndex)
        },
        pageCount() {
            return Math.ceil(this.data.length / this.itemsPerPage)
        }
    },
    created() {
        console.log(this.data)
    },
    mounted() {

    }
}

</script>