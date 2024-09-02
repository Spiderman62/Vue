<template>
	<button @click="increase">Add commit</button>
</template>
<script>
import {mapMutations} from 'vuex';
export default {
	methods: {
		// increaseNumber() {
		// 	this.$store.commit('counter/increase');
		// }
		...mapMutations('counter',['increase'])
	}
}
</script>