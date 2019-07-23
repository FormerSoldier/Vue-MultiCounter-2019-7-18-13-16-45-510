<template>
  <div>
    <p>{{counter}}</p>
    <button @click="add">点我+</button>
    <button @click="sub">点我-</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  props:['idx'],
  data: function(){
    return {
      counter: 0
    };
  },
  methods:{
      add: function(){
          this.counter++;
          this.$emit('change',this.idx,this.counter);
      },
      sub: function(){
          this.counter--;
          this.$emit('change',this.idx,this.counter);
      }
  }
};
</script>

