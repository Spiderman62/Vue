import {createRouter,createWebHistory} from 'vue-router';
import TheHome from './components/pages/TheHome.vue'
import TheProduct from './components/pages/TheProduct.vue'
const router = createRouter({
	history:createWebHistory(),
	routes:[
		{path:'/',component:TheHome},
		{path:'/product',component:TheProduct},
	]
});
export default router;