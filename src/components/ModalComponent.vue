
<template>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="modal-header">
              <slot name="header">
                <img :src="'/images/' + img"/>
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                {{ msg }}
              </slot>
            </div>

            <div class="form-btn">
                <button class="login100-form-btn" @click="$emit('close')">
                  <p>Cerrar</p>
                </button>

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