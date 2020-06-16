import Vue from "vue";
import VueRouter from "vue-router";
import Default from "../views/Default.vue";
// import Goods from "../views/goods.vue"

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "default",
		component: Default,
		redirect: "/index",
		children: [
			{
				path: "s/:good",
				name: "goods",
				component: () => import("../views/goods.vue"),
			},
			{
				path: "index",
				name: "index",
				component: () => import("../views/Index.vue"),
			},
			{
				path: "changeCity",
				name: "changeCity",
				component: () => import("../views/ChangeCity.vue"),
			},
			{
				path: "product/:name",
				name: "productRecommend",
				component: () => import("../views/productRecommend.vue"),
			},
		],
	},
	{
		path: "/register",
		name: "register",
		component: () => import("../views/register.vue"),
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/login.vue"),
		
	},
];

const router = new VueRouter({
//   mode: "history",
  base: process.env.BASE_URL,
	routes,
	scrollBehavior(to,from,savedPosition) { 
		if (savedPosition) {
			return savedPosition;
		} else { 
			if (to.hash) {
				return { selector: to.hash };
			} else { 
				return { x: 0, y: 0 };
			}
		}
	}
});
// router.beforeEach((to,from,next)=>{
// 	console.log(to, from);
// 	next();
// })

export default router;
