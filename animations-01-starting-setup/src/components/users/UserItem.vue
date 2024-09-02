<template>
	<li @click="removeUser(id)">{{ name }}</li>
</template>
<script>
export default {
	props:['name','id'],
	inject:['removeUser'],
}
</script>
<style scoped>
li{
	padding: 12px 16px;
	border: 1px solid gray;
}
</style>