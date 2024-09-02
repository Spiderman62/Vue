<template>
	<button v-if="!isAuth" @click="login">Login</button>
	<button v-if="isAuth" @click="logout">Logout</button>
</template>
<script>
import {mapGetters,mapActions} from 'vuex';
export default {
	computed:{
		...mapGetters('userAuth',['isAuth'])
	},
	methods:{
		...mapActions('userAuth',['login','logout'])
	}
}
</script>