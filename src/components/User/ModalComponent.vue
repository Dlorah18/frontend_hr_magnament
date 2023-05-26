<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header row">
            <img :src="'/images/' + img" />
          </div>

          <div class="modal-body row">
            <div name="body" class="col-lg-12">
              {{ msg }}
            </div>
            <div  class="col-lg-6">
              <input style="position: absolute;" v-if="redirec===null" class="btn button-cancel btn-sm" @click="$emit('close')" type="text" value="Cerrar">
                <input style="position: absolute;" class="btn button-sucess btn-sm" @click="$emit('close')" type="text" value="OK">       
              
            </div>
            
          </div>


        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    msg: String,
    redirec: String
  }
}
</script>