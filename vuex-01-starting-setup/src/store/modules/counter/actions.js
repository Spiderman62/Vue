const actions = {
	asynchornousIncrease(context) {
		setTimeout(() => {
			context.commit('increase');
		}, 2000);
	},
};
export default actions;