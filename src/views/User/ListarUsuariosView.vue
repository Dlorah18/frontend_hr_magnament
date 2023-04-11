<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from '../../components/HeaderComponent.vue';
</script>
<template>
    <HeaderComponent></HeaderComponent>
    <div  class="container-secsion">
        <div>
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
            <tbody>
                <tr>
                    <td>Codigo</td>
                    <td>Nombres</td>
                    <td>Apellidos</td>
                    <td>Rol</td>
                    <td>Estado</td>
                    <td>Fecha Creacion</td>
                </tr>
            </tbody>
        </table>
        </div>
        
    </div>
</template>
<script>
</script>