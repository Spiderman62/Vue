const getters = {
	finalValue(state) {
		return state.counter;
	},
	normalizedCounter(_, getters) {
		const defaultValue = getters.finalValue;
		return defaultValue < 0 ? 0 : defaultValue > 20 ? 20 : defaultValue;
	},
};
export default getters;