import Vue from 'vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    countNumber:0,
    list:[]
  },
  getters:{
    getCountNumber:function(state){
      return state.countNumber;
    },
    getItemList: function(state){
      return state.list;
    }
  },
  mutations: {
    incrementCool(state,allListItem){
      state.list = allListItem;
    },
    setCountNumber(state, countNumber){
      state.countNumber = countNumber;
    },
    setItemList: function(state,list){
      state.list = list;
   }
  }
});

export default store;
