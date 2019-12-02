<template>

  
        <div @click="itemClick" class="tab-bar-item">
            <slot v-if="!isActive" name="item-icon"></slot>
            <slot  v-else name="item-icon-active"></slot>
            <div :style="activeStyle">
                  <slot   name="item-text"></slot>
            </div>
           <!--//动态绑定class
              <div :class="{active:isActive}">
                  <slot   name="item-text"></slot>
            </div> -->
         
        </div>
      


</template>

<script>

export default {
  name: 'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
    data(){
        return{
          //  isActive:true,
          //  path:'/home' 
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1
        },
        activeStyle(){
          //三目条件判断：判断条件？符合条件，执行语句1：执行语句二
           return this.isActive?{color:this.activeColor}:{}
        }
    },
    methods:{
        itemClick(){
            console.log('itemClick')
            this.$router.replace(this.path)
        }
    }
  }
</script>

<style scoped>

 .tab-bar-item{
    flex: 1;
   text-align: center;

    font-size:14px;
   
 }
 .tab-bar-item img{
    margin-top:3px;
    width:24px;
    height:24px;
    vertical-align: middle;

 }
 .active{
    color:#fb627c;
   font-weight: bold;
 }
</style>
