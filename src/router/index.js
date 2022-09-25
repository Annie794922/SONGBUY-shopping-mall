import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductDetailsView from '../views/ProductDetailsView.vue'
import CartView from '../views/CartView.vue'
import OrderCompletedView from '../views/OrderCompletedView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
  },
  {
    path: '/product-details/:id',
    name: 'ProductDetails',
    component: ProductDetailsView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/order-completed',
    name: 'OrderCompleted',
    component: OrderCompletedView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // 跳轉路由之後所在位置回到頁面頂端
  scrollBehavior(to,from,saveTop){
    if (saveTop) {
      return saveTop;
    } else {
      return {
        top:0,
        left:0
      }
    }
  },
})

export default router
