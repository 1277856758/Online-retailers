<template>
  <p class='nav'>
      <i class="icon iconfont" :class='icon'></i>
      <span>{{name}}</span>
  </p>
</template>

<script>
export default {
    props: {
        name: {},
        icon: {}
    }
}
</script>

<style scoped>
.nav{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
}
.nav span{
    font-size: .26rem;
}
.icon{
   font-size: .44rem;
}
</style>
