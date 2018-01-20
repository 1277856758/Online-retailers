<template>
  <p class='nav'>
      <span class='imgs'><img :src="img" alt=""></span>
      <span>{{name}}</span>
  </p>
</template>

<script>
export default {
    props: {
        name: {},
        img: {}
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
img{
    width: 0.96rem;
    height: 0.96rem;
}
</style>
