<template>
  <div id="app">
    <counter-group></counter-group>
    <counter-sum></counter-sum>
  </div>
  
  
</template>

<script>
import CounterGroup from './components/CounterGroup.vue'
import CounterSum from './components/CounterSum.vue'

export default {
  name: 'app',
  data: function(){
    return {
      // count: 0,
      // list:[],
      // totalNum:0,
    };
  },
  // methods:{
  //   listChange: function(index,value){
  //     this.list[index] = value;     
  //     this.totalNum = this.list.reduce((sum, cur) => sum + cur,0);
  //   },
  //   counterNumberChange: function(){
  //     console.log('counter_num is changed： '+this.counter_num);
  //     this.$store.commit('setCountNumber',this.counter_num);
  //   }
  // },
  // computed:{
  //   counter_num: function(){
  //     return this.$store.getters.getCountNumber;
  //     //return this.$sotre.commit('getCountNumber');
  //       //this.list = this.list.slice(0,parseInt(this.counter_num));
  //       //this.totalNum = this.list.reduce((sum, cur) => sum + cur,0);
  //       //this.list.fill(0,this.counter_num);
  //   }
  // },
  components:{
    counterGroup:CounterGroup,
    counterSum: CounterSum
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
