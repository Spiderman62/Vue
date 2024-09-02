<template>
	<transition-group tag="ul" name="group-user">
		<UserItem v-for="user in users" :key="user" :id="user" :name="user"></UserItem>
	</transition-group>
	
</template>
<script>
import UserItem from './UserItem.vue';
export default {
	components: {
		UserItem
	},
	inject: ['users'],
}
</script>
<style scoped>
ul {
	list-style: none;
	padding: 0;
}
.group-user-enter-from{
	opacity: 0;
	transform: translateX(-30px);
}
.group-user-enter-active{
	transition: all .3s ease-in-out;
}
.group-user-enter-to{
	opacity: 1;
	transform: translateX(0px);
}
.group-user-leave-from{
	opacity: 1;
	transform: translateX(0px);
}
.group-user-leave-active{
	transition: all .3s ease-in-out;
	position: absolute;
}
.group-user-leave-to{
	opacity: 0;
	transform: translateX(30px);
}
.group-user-move{
	transition: all .3s ease-in-out;
}
.group-user-leave{
	transition: all .3s ease-in-out;
}
</style>