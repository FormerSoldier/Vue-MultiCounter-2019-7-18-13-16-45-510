import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)
export const store = new Vuex.Store({
  state:{
    countNumber:0,
    total:0,
    list:[]
  },
  getters:{
    getCountNumber:function(state){
      return state.countNumber;
    }
  },
  computed:{
    
  },
  mutations: {
    incrementCool(state,allListItem){
      state.list.list = allListItem;
    },
    setCountNumber(state, countNumber){
      state.countNumber = countNumber;
    }
  }
});

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
store.commit("incrementCool");
console.log(store.state.cool);
