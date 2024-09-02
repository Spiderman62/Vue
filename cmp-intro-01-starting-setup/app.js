const app = Vue.createApp({
	data() {
	  return {
		friends: [
		  {
			id: 1,
			name: 'Lam Hoang',
			phone: '0708063423',
			email: 'aztenderio7146@gmail.com'
		  },
		  {
			id: 2,
			name: 'Thanh Binh',
			phone: '0707583757',
			email: 'thanhbinh@gmail.com'
		  }
		]
	  }
	}
  });
  
  app.component('friend-lists', {
	template: `
	  <ul>
		<li>
		  <h2>{{ friend.name }}</h2>
		  <button @click="toggleShow(friend)">{{ showDetails ? 'Hide' : 'Show' }} Details</button>
		  <ul v-if="showDetails">
			<li><strong>Phone:</strong> {{ friend.phone }}</li>
			<li><strong>Email:</strong> {{ friend.email }}</li>
		  </ul>
		</li>
	  </ul>
	`,
	data() {
	  return {
		showDetails: false,
		friend:{
			id: 1,
			name: 'Lam Hoang',
			phone: '0708063423',
			email: 'aztenderio7146@gmail.com'
		  },
	  }
	},
	methods: {
	  toggleShow() {
		this.showDetails = !this.showDetails;
	  }
	},
  });
  
  app.mount('#app');