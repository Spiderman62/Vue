<template>
	<p>{{ normalizedCounter }}</p>
</template>
<script>
import { mapGetters} from 'vuex';
export default {
	computed: {
		// computedCounter() {
		// 	return this.$store.getters['counter/normalizedCounter'];
		// }
		...mapGetters('counter', ['normalizedCounter']),
	},
}
</script>