const state = {
	isLoggin:false
}
const mutations = {
	login(state,payload){
		state.isLoggin = payload.value;
	},
	logout(state,payload){
		state.isLoggin = payload.value;
	}
}
const actions = {
	login(context){
		setTimeout(()=>{
			context.commit('login',{value:true});
		},1000)
	},
	logout(context){
		setTimeout(()=>{
			context.commit('login',{value:false});
		},1000)
	}
}
const getters = {
	isAuth(state){
		return state.isLoggin;
	}
}
export default {
	namespaced:true,
	state,
	mutations,
	actions,
	getters
}