<template>
<swiper ref="mySwiper" class='column swiperD'>
 <!-- slides -->
  <swiper-slide v-for='(item, idx) in botData' :key='idx' class='slid'>
     <div>
        <img v-lazy="'http://www.lb717.com/' + item.obj_data" class='home_img'>    
        <p class='ps'>{{item.goods_name}}</p>
        <div class="shop">
            <span  class='cls_red'>
                ￥<b>{{item.discount_price}}</b>
            </span>
            <span @click.stop="addCart">
                <img src="src/common/images/cont/homeland3.png" alt="" class='shoping'>
            </span>
        </div>
     </div>
  </swiper-slide>
 <!-- Optional controls -->
 <div class="swiper-pagination"  slot="pagination"></div>
 <!-- <div class="swiper-button-prev" slot="button-prev"></div>
 <div class="swiper-button-next" slot="button-next"></div>
 <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
</swiper>
</template>
<script>
import ImgText from '@/components/Public/ImgText/ImgText'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carrousel',
 data() {
   return {
     botData: []
   }
 },
 components: {
 swiper,
 swiperSlide,
 ImgText
},
 computed: {
   swiper() {
     return this.$refs.mySwiper.swiper
   }
 },
 props: {
   data:{},
   slidesPerView: {},
 },
 mounted() {
var mySwiper = new Swiper('.swiper-container',{
  slidesPerView : 3,
centeredSlides : true,
})
 },
 created () {
      this.params = JSON.parse(this.$route.query.obj)
        this.url = this.params.obj_data
        this.$http.post('/mall/goods/recommendgoods', {
          })
        .then(res => {
            this.botData = res.data.data
        })   
 }
}
</script>
<style scoped lang='scss'>
.shop{
    margin: 0 .2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:.32rem;
    img{
        width: 0.5rem;
        height: 0.5rem;
    }
}
.slid{
    width:30%!important;
    .ps{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .home_img{
        width:100%;
        height: 2rem;
    }
    
}
.column{
  width: 100%;
  height: 100%;
}
</style>
