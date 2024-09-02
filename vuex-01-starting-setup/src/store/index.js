import { createStore } from 'vuex';
import counter from './modules/counter/index.js';
import userAuth from './modules/userAuth.js';
const store = createStore({
	modules:{
		counter,
		userAuth
	},
	
});
export default store;