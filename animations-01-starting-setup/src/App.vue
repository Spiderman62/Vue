<template>
  <router-view v-slot="slotProps">
    <transition name="fade" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <!-- <div class="container">
    <the-user></the-user>
  </div>
  <div class="container">
    <div class="block" :class="{animate:isActive}"></div>
    <button v-on:click="activeAnimated">Animate</button>
  </div>
  <div class="container">
    <transition name="para">
      <p v-if="isPharagraph">This is a pharagraph...</p>
    </transition>
    <button @click="togglePharagraph">Click</button>
  </div>
  <div class="container">
    <transition name="fade" mode="out-in">
      <button @click="toggleUsers" v-if="!isUser">Show users</button>
      <button @click="toggleUsers" v-else>Hide users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
</template>

<script>
export default {
  data() {
    return { 
      dialogIsVisible: false,
      isActive:false,
      isPharagraph:false,
      isUser:false,
    };
  },
  methods: {
    toggleUsers(){
      this.isUser = !this.isUser;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    activeAnimated(){
      this.isActive = true;
    },
    togglePharagraph(){
      this.isPharagraph = !this.isPharagraph;
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: .3s ease-in-out; */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
  transition: all .3s ease-in-out;
}
.animate{
  /* transform: translateX(-150px); */
  animation: slide-left 1s ease-in-out forwards;
}
@keyframes slide-left {
  0%{
    transform: scale(1) translateX(-10px);
  }
  50%{
    transform: scale(1.2) translateX(-80px);
  }
  100%{
    transform: scale(1) translateX(-150px);
  }
}
.para-enter-from{
  /* transform: translateY(-30px);
  opacity: 0; */
}
.para-enter-active{
  /* transition: all .3s ease-in-out; */
  animation: slide-left .3s ease-in-out;
}
.para-enter-to{
  /* transform: translateY(0px);
  opacity: 1; */
}
.para-leave-from{
  /* transform: translateY(0px);
  opacity: 1; */
}
.para-leave-active{
  /* transition: all .3s ease-in-out; */
  animation:slide-left .3s ease-in-out;
}
.para-leave-to{
  /* transform: translateY(30px);
  opacity: 0; */
}
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .3s ease-in-out;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
  transition: opacity .3s ease-in-out;
}
.fade-leave-to{
  opacity: 0;
}
a{
  text-decoration: none;
  font-size: 22px;
  color: rgba(50, 159, 50, 0.612);
}
a:hover{
  text-decoration: underline;
}
</style>