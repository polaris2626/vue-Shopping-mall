import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carts:[],
    login:''
  },
  getters:{
    total:function(state){
      var t=0
      state.carts.forEach(function(ele){
        t+=ele.price*ele.num
      })
      return t
    },
    count:function(state){
      var c=0
      state.carts.forEach(function(ele){
        c+=ele.num
      })
      return c
    },
  },
  mutations: {
    addCart:function(state,good){
      var ele = state.carts.find(function(ele){
        return ele.id===good.id;
      })
      if(ele) ele.num++
      else{
        state.carts.push({
          ...good,
          num:1
        })
      }
      localStorage.setItem("gwcs"+sessionStorage.getItem("name"),JSON.stringify(state.carts))//为每位用户增加专属标记，好让不同用户的购物车区分开来
    },
    addCart2:function(state,good){//good是一个对象，包含carts和num
      alert("已经成功添加到购物车啦~亲")
      var ele = state.carts.find(function(ele){
        return ele.id===good.carts.id;
      })
      if(ele) ele.num+=good.num;
      else{
        state.carts.push({
          ...good.carts,
          num:good.num,
        })
      }
      localStorage.setItem("gwcs"+sessionStorage.getItem("name"),JSON.stringify(state.carts))
    },
    remove:function(state,index){
      state.carts.splice(index,1)
      localStorage.setItem("gwcs"+sessionStorage.getItem("name"),JSON.stringify(state.carts))
    },
    remove2:function(state){
      state.carts=[]
      alert("支付成功啦！亲~")
      localStorage.setItem("gwcs"+sessionStorage.getItem("name"),JSON.stringify(state.carts))
    },
    change:function(state,payload){//payload是一个数组，这里包含carts和num
      var ele = state.carts.find(function(ele){
        return ele.id===payload.carts.id
      })
      if(ele.num==1 && payload.num==-1){
        ele.num=1
      }else{
        ele.num+=payload.num
      }
      localStorage.setItem("gwcs"+sessionStorage.getItem("name"),JSON.stringify(state.carts))//为每位用户增加专属标记，好让不同用户的购物车区分开来
    },
    // msg:function(state,good){
    //   var ele = state.msg.find(function(ele){
    //     return ele.id===good.id
    //   })
    //   if(ele) ele.num++
    //   else{
    //     state.msg.push({
    //       ...good,
    //       num:1
    //     })
    //   }
    // }
  },
  actions: {
  },
  modules: {
  }
})
