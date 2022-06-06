import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name:'Index',
    component:() => import("../views/Index.vue"),
    children:[
      {
        path: '/',
        // name:"Display",
        component:() => import('../views/Display.vue')
      },{
        path: '/display',
        // name:"Display",
        component:() => import('../views/Display.vue')
      },
      {
        path:'/cart',
        component:() => import('../views/Cart.vue')
      },
      {
        path:'/msg',
        component:() => import('../views/Msg.vue')
      }
    ]
  },
  // {
  //   path:'/cart',
  //   component:() => import("../views/Cart.vue"),
  // },
  // {
  //   path:'/msg',
  //   component:() => import('../views/Msg.vue')
  // },
  {
    path:'/home',
    component:() => import('../views/Home.vue'),
    children:[
      {
        path:'/',
        component:() => import('../views/Login.vue')
      },
      {
        path:'/register',
        component:() => import('../views/Register.vue')
      },
      {
        path:'/login',
        component:() => import('../views/Index.vue')
      },
      {
        path:'/login2',
        component:() => import('../views/Login.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach(function(to,form,next) {
  if(to.path.toLocaleLowerCase().indexOf('/home')>=0||to.path==="/"||to.path==="/display"||to.path==="/login2"||to.path==="/register"){//如果从登录界面进来或者只看主界面的话，就正常
    next()
  }
  else{//如果不是从登录界面进来或者想查询详情和购物车，会判断是否登录，未登录会跳转到登录界面
    // alert(sessionStorage.name)
    if(sessionStorage.name!=null)
    next()
    else {
      alert("亲~请先登录哦");
      // next('/home')
    }
  }
})

export default router
