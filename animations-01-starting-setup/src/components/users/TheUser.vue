<template>
	<AddUser @addData="addData"></AddUser>
	<UserList @removeUsers="removeUser"></UserList>
</template>
<script>
import UserList from './UserList.vue';
import AddUser from './AddUser.vue';
export default {
	components: {
		UserList,
		AddUser
	},
	data() {
		return {
			users: ['Lam Hoang', 'Yen', 'Binh', 'Hoang Long', 'Thu Thao']
		}
	},
	provide() {
		return {
			users: this.users,
			removeUser: this.removeUser
		}
	},
	methods: {
		addData(value) {
			this.users.unshift(value);
		},
		removeUser(id) {
			const idx = this.users.findIndex(idx => idx === id);
			this.users.splice(idx, 1);
		}
	}
}
</script>