import { createRouter, createWebHistory } from 'vue-router'
import type {RouteLocationRaw,RouteLocationNormalized} from 'vue-router'
import HomeView from '../views/home/vue/HomeView.vue'
 
const scrollBehavior = (to:RouteLocationRaw, from:RouteLocationNormalized, savedPosition:any)=>{
  // savedPosition 会在你使用浏览器前进或后退按钮时候生效
 // 这个跟你使用 router.go() 或 router.back() 效果一致
 // 这也是为什么我在 tab 栏结构中放入了一个 点击回退 的按钮
 if (savedPosition) {
      return savedPosition
    } else {
      // 如果不是通过上述行为切换组件，就会让页面回到顶部
      return {
        behavior: 'smooth',
        top:0,
        left:0
      }
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component:HomeView
    },
    {
      path: '/categorize',
      name: 'categorize',
      component: () => import('../views/category/vue/CategorizeView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/cart/vue/CartView.vue')
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: () => import('../views/user/vue/UserCenterView.vue')
    },
    {
      path: '/goods/:goodsType/:title',
      name: 'goods',
      component: () => import('../views/goods/vue/GoodsView.vue')
    },
    {
      path: '/goodsInfo',
      name: 'goodsInfo',
      component: () => import('../views/goods/vue/GoodsInfoView.vue')
    }
  ],
  scrollBehavior
 
})

export default router
