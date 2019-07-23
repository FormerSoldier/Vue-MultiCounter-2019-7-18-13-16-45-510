<template>
  <div>
    <input type="number" v-model.number="counter_num"/>
    <counter v-for="item in list" 
            :key="item.id" 
            :item="item"></counter>
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
      //count: 0,
      //totalNum:0
    };
  },
  methods:{
    listChange: function(index,value){
      this.list[index] = value;     
     // this.totalNum = this.list.reduce((sum, cur) => sum + cur,0);
    },
    /*counterNumberChange: function(){
        this.$store.commit('setCountNumber',counter_num);
    }*/
  },
  watch:{
    counter_num: function(){
        this.list = this.list.slice(0,this.counter_num);
        this.list.length = this.counter_num;
        this.list = this.list.fill({number:0,id:getId()});
        console.log(this.list.length);
        //this.list = this.list.slice(0,parseInt(this.counter_num));
        //this.totalNum = this.list.reduce((sum, cur) => sum + cur,0);
        //this.list.fill(0,this.counter_num);
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
