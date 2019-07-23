<template>
  <p>总数为：{{totalNum}}</p>
</template>

<script>
export default {
  name: 'counter',
  props:['idx'],
  computed:{
    totalNum: function(){
      return this.$store.getters.getItemList.reduce((initVal, cur) => initVal + cur,0);
    }
  }
};


</script>

