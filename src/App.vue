<template>
  <div id="app">
    <input type="text" v-model.number="counter_num"/>
    <counter v-for="counter in counter_num" 
            :idx = "counter" 
            @change="listChange"></counter>
    <p>总数为：{{totalNum}}</p>
  </div>
  
  
</template>

<script>
import counter from './components/Counter'
export default {
  name: 'app',
  data: function(){
    return {
      count: 0,
      counter_num: 0,
      list:[],
      totalNum:0
    };
  },
  methods:{
    listChange: function(index,value){
      this.list[index] = value;     
      this.totalNum = this.list.reduce((sum, cur) => sum + cur,0);
    }
  },
  watch:{
    counter_num: function(){
        this.list.length = parseInt(this.counter_num);
        this.totalNum = this.list.reduce((sum, cur) => sum + cur,0);
        //this.list.fill(0,this.counter_num);
    }
  },
  components:{
    counter:counter
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
