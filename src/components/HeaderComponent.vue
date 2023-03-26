<style scoped src="../assets/css/Header.css"></style>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <header>

        <nav>
            <div class="container">
                <div class="item-menu">
                    <a target="_blank">
                        <img src="../assets/logoHR_MAGNAMENT.png">
                    </a>
                </div>
                <div class="item-menu">
                    <ul>
                        <li><a href="#about">Gestiónar de Usuario</a></li>
                        <li><a href="#portfolio">Gestionar Personal</a></li>
                        <li><a href="#services">Gestionar Candidatos</a></li>
                        <li><a href="#gallery">Evaluar Candidatos</a></li>
                        <li><RouterLink to="/">Cerrar Sesion</RouterLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>