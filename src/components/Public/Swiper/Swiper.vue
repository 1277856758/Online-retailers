<template>
<swiper ref="mySwiper" class='column'>
 <!-- slides -->
 <swiper-slide v-for='(item, idx) in data' :key='idx'><p>{{item}}</p></swiper-slide>
  <!-- <swiper-slide v-else v-for='(item, idx) in data' :key='idx'><p>{{254}}</p></swiper-slide> -->
 <!-- Optional controls -->
 <div class="swiper-pagination"  slot="pagination"></div>
 <!-- <div class="swiper-button-prev" slot="button-prev"></div>
 <div class="swiper-button-next" slot="button-next"></div>
 <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
</swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carrousel',
 data() {
   return {
     show: true
   }
 },
 components: {
 swiper,
 swiperSlide
},
 // you can find current swiper instance object like this, while the notNextTick property value must be true
 // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
 computed: {
   swiper() {
     return this.$refs.mySwiper.swiper
   }
 },
 props: {
   auto:{},
   directive:{},
   loop:{},
   data:{},
   slidesPerView: {},
   qwe: {}
 },
 mounted() {
   // you can use current swiper instance object to do something(swiper methods)
   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
   // console.log('this is current swiper instance object', this.swiper)
   // this.swiper.slideTo(3, 1000, false)
var mySwiper = new Swiper('.swiper-container',{
  direction: this.directive,
  loop: this.loop,
  autoplay: this.auto,
  slidesPerView : this.slidesPerView,
  centeredSlides : true,
})
 }
}
</script>
<style scoped>
.column{
  width: 100%;
  height: 100%;
}
</style>
