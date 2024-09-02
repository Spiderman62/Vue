<template>
	<form @submit.prevent="$emit('addData',enteredUser)">
		<input type="text" v-model.trim="enteredUser">
		<button>Add user</button>
	</form>
</template>
<script>
export default {
	data(){
		return{
			enteredUser:''
		}
	},
	emits:['addData']
}
</script>
<style scoped>
form {
	display: flex;
	align-items: center;
	column-gap: 10px;
}

input {
	height: 40px;
	border: 1px solid black;
	border-radius: 4px;
	padding: 0 15px 0 5px;
	font-size: 16px;
	outline: none;
}
</style>