const mutations = {
	increase(state) {
		state.counter += 1;
	},
	increment(state, payload = 1) {
		state.counter += payload;
	},
};
export default mutations;