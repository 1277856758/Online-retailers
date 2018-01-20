<template>
  <el-carousel indicator-position="outside" :autoplay='show' class='parset'>
    <el-carousel-item v-for="(item, idx) in banner" :key="idx">
      <img :src="item.url" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data () {
      return {
          show: true
      }
  },
  props: {
      banner: {}
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
  }
  .el-carousel, .el-carousel__container{
    height: 100%;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.parset{
    position: relative;
}
.parset .el-carousel__container{
  width: 100%!important
}
img{
    width: 100%;
    height: 100%;
}

</style>