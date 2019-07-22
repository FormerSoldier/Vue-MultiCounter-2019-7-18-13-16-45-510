<template>
  <p>总数为：{{totalNum}}</p>
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

