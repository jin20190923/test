<template>
  <div id="app">  
    <router-view/>
   <tab-bar>
     <tab-bar-item path="/home" activeColor="blue" >
        <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.png" alt="">
        
        <div slot="item-text">首页</div> 
     </tab-bar-item>
     <tab-bar-item path="/category" activeColor="#fb627c">
          <img slot="item-icon" src="./assets/img/tabbar/category.png" alt="">
          <img slot="item-icon-active" src="./assets/img/tabbar/category_active.png" alt="">
        <div slot="item-text">分类</div> 
     </tab-bar-item>
     <tab-bar-item  path="/cart" activeColor="#fb627c">
          <img slot="item-icon" src="./assets/img/tabbar/cart.png" alt="">
          <img slot="item-icon-active" src="./assets/img/tabbar/cart_active.png" alt="">
        <div slot="item-text">购物车</div> 
     </tab-bar-item>
     <tab-bar-item path="/profile" activeColor="#fb627c">
          <img slot="item-icon" src="./assets/img/tabbar/profile.png" alt="">
          <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.png" alt="">
        <div slot="item-text">我的</div> 
     </tab-bar-item>
   </tab-bar>
  </div>
</template>

<script>
// 把组件导入
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
/* 引用 样式*/
 @import "./assets/css/base.css";

</style>
