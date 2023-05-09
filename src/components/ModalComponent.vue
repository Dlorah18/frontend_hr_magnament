
<template>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="modal-header row">
                <img :src="'/images/' + img"/>
            </div>

            <div class="modal-body row">
              <div name="body" class="col-lg-12">
                {{ msg }}
              </div>
              <div class="col-lg-12">
                <input class="btn btn-secondary btn-sm" @click="$emit('close')" type="text" value="Cerrar">
            </div>
            </div>

            
          </div>
        </div>
      </div>
    </transition>
</template>
<script>
export default{
  props:{
    img:String,
    msg:String
  }
}
</script>