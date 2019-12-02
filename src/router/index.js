import Vue from 'vue'
import VueRouter from 'vue-router'
//路由懒加载
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category =() => import('../views/category/Category')
const Profile =() => import('../views/profile/Profile')


//1.安装插件
Vue.use(VueRouter)
//2.创建路由对象
 const routes= [
  {
    path: '',
    redirect:'/home',

  },
  {
    path: '/home',
    //在这里我又犯了一个错误把component:Home错写成 component:‘Home’，导致页面显示不出来
    component:Home

  },
  {
    path: '/category',
    component: Category

  },
  {
    path: '/cart',
    component: Cart

  },
  {
    path: '/profile',
    component: Profile

  },
]


const router= new VueRouter({

  routes,
  mode:'history'
})
//3.导出路由
export default router