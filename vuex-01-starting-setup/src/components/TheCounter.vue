<template>
	<p>{{ computedCounter }}</p>
</template>
<script>
export default {
	computed: {
		computedCounter() {
			// return this.$store.state.counter * 2;
			return this.$store.getters['counter/normalizedCounter'];
		}
	},
}
</script>