// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // Import the Home view

const routes = [
	{
		path: '/',
		name: 'HomeView',
		component: HomeView, // The Home view will be rendered for the '/' route
	},
	// You can add more routes for other views here
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export default router
