import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductView from '../views/ProductView.vue';
import MovieDetails from '../views/MovieDetails.vue'; 
import SomeList from '../views/SomeList.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/product', name: 'Product', component: ProductView },
  { path: '/movie/:id', name: 'MovieDetails', component: MovieDetails },
  { path: '/some-list', name: 'SomeList', component: SomeList } 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
