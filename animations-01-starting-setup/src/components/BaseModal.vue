<template>
  <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <transition name="modal">
    <dialog open v-if="open">
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  emits: ['close'],
  props:['open']
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  /* animation: modal .3s ease-in-out forwards; */
}
@keyframes modal {
    from{
      transform: scale(.9) translateY(-70px);
      opacity: 0;
    }
    to{
      transform: scale(1) translateY(0px);
      opacity: 1;
    }
}
.modal-enter-active{
  animation: modal .3s ease-out;
}
.modal-leave-active{
  animation: modal .3s ease-out reverse;
}
</style>