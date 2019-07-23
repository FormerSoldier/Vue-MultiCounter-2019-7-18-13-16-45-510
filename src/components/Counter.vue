<template>
  <div>
    <p>{{item.number}}</p>
    <button @click="add">点我+</button>
    <button @click="sub">点我-</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  props:['item'],
  data: function(){
    return {
      
    };
  },
  methods:{
      add: function(){
          this.item.number++;
          //this.$emit('change',this.idx-1,this.count);
      },
      sub: function(){
          this.item.number--;
          //this.$emit('change',this.idx-1,this.count);
      }
  }
};
</script>

