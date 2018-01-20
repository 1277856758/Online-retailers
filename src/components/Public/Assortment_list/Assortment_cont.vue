<template>
  <div class="cont">
      <div class="img">
          {{this.$store.state.count}}
      </div>
  </div>
</template>

<script>
export default {
    props: {
        cont: {}
    }
}
</script>

<style>
.cont{
    width:100%;
    height:100%;
    position: relative;
}
.img{
    width: 1.7rem;
    height: 2.5rem;
    background: #eee;
    margin: .01rem;
    border:.03rem solid #ccc;
}
</style>
