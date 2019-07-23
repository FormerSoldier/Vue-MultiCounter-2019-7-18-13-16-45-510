<template>
  <div>
    <input type="number" v-model.number="counter_num"/>
    <counter v-for="(item,index) in list" 
            :key="index" 
            :idx = "index"
            @change="itemNumChange"></counter>
  </div>
  
  
</template>

<script>
import Counter from './Counter.vue';
let id = 0;
const getId = ()=>{
    return id++;
}

export default {
  data: function(){
    return {
        counter_num: 0,
        list:[]
    };
  },
  methods:{
    itemNumChange:function(index, count){
        this.$set(this.list,index,count);
        this.$store.commit('setItemList',this.list);
    }
  },
  watch:{
    counter_num: function(){
        this.list.length = this.counter_num;
        this.list = this.list.slice(0);
        this.$store.commit('setItemList',this.list);
    }
  },
  components:{
    counter:Counter
  }
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
