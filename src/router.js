import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";

Vue.use(Router);

export const mainRoutes = [
	{
		path: "/",
		component: Home,
		name: "Home"
	}
];


const router = new Router({
	mode: "history",
	routes: [...mainRoutes]
});


export default router;