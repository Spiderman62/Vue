<template>
  <base-container title="Vuex" v-if="isAuth">
    <TheCounterVue></TheCounterVue>
    <FavouriteCounter></FavouriteCounter>
    <button @click="asynchornousIncrease">Add dispatch</button>
    <ButtonCounter></ButtonCounter>
  </base-container>
  <base-container title="Authenciation">
    <UserAuth></UserAuth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounterVue from './components/TheCounter.vue';
import ButtonCounter from './components/ButtonCounter.vue';
import FavouriteCounter from './components/FavouriteCounter.vue';
import { mapActions, mapGetters } from 'vuex';
import UserAuth from './components/UserAuth.vue';
export default {
  components: {
    BaseContainer,
    TheCounterVue,
    ButtonCounter,
    FavouriteCounter,
    UserAuth
  },
  computed: {
    ...mapGetters('userAuth', ['isAuth'])
  },
  methods: {
    // increaseCounter(){
    //   this.$store.dispatch('counter/asynchornousIncrease');
    // }
    ...mapActions('counter', ['asynchornousIncrease'])
  }
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
</style>