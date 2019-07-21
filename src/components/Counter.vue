<template>
  <div>
    <p>{{count}}</p>
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
      count: 0
    };
  },
  methods:{
      add: function(){
          this.count++;
          this.$emit('change',this.idx-1,this.count);
      },
      sub: function(){
          this.count--;
          this.$emit('change',this.idx-1,this.count);
      }
  }
};


</script>

