<template>
    <div class="main">
        <header>
            <span>
                <img src="src/common/images/homelo.gif" alt="" class='img1'>
            </span>
            <span class='spT'>
                <input type="text" placeholder="请输入想购买的商品" @focus="focu">
                <i class="icon iconfont icon-fangdajing"></i>
            </span>
            <span>
                <img src="src/common/images/shopings.png" alt="" class='img2'>
            </span>
        </header>
        <section ref='scroll' @scroll='scrollTop'>
           <div class="content" ref='content'>
               <div class="ban">
                   <banner :banner='bannerD'></banner>
               </div>
            <div class="nav">
                <naved class='nav_box'
                v-for='(item, idx) in navD'
                :key='idx'
                v-bind='item'>
                </naved>
                <div class="banner_column">
                    <div class='left'>
                        <span>动态</span>
                        <span>商城</span>
                    </div>
                    <div class='right'>
                        <swiper :auto='time' :directive='directive' :loop='istrue' :data='inser'></swiper>
                    </div>
                </div>
            </div>
            <div class="tit">
                <p class='tit_left'>
                    <img src="src/common/images/todayimg.png" alt="">
                    <span>
                        天天特惠
                    </span>
                    <small>
                        每天有惊喜
                    </small>
                </p>
                <p class='tit_right'>
                    更多 <i class="icon iconfont icon-angle-right"></i>
                </p>
            </div>
            <dl class="discounts">
                    <dt>
                        <img src="src/common/images/tit/home1.png" alt="">
                    </dt>
                    <dd>
                        <img src="src/common/images/tit/ruwei.png" alt="">
                        <img src="src/common/images/tit/gaodian.png" alt="">
                    </dd>
            </dl>
            <div class="contant">
                <list></list>
                <div class="contant_inser">
                    <img-text class='img_text' v-for="(item, idx) in listData" :key='idx' v-bind='item' :items='item'></img-text>
                    <div class="bot" v-if='hidens'>
                        我是有底线的...
                    </div>
                </div>
                
            </div>
           </div>
        </section>
         <footer class='home_footer'>
          <router-link
          v-for="(item, idx) in footsD"
          :key='idx' 
          :to='item.to'
          >
         <foots
         v-bind='item'
         :replace='item.replace'></foots>
          </router-link>      
      </footer>
    </div>
</template>

<script>
import foots from '@/components/Public/Foots/Foots'
import Banner from '@/components/Public/Banner/Banner'
import Swiper from '@/components/Public/Swiper/Swiper'
import Naved from '@/components/Public/Nav/Nav'
import List from '@/components/Public/List/List'
import ImgText from '@/components/Public/ImgText/ImgText'
import footsD from '@/api/footer.json'
import bannerD from '@/api/banner.json'
import navD from '@/api/nav.json'
export default {
    name:"index",
  components: {
      foots,
      Banner,
      Naved,
      List,
      ImgText,
      Swiper
  },
  data () {
      return {
          footsD: footsD,
          bannerD: bannerD,
          navD: navD,
          listData: [],
          istrue: true,
          channel_id: 2,
          time: 1500,
          loop: true,
          directive: 'vertical',
          inser:['7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期!',
          '7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！',
          '7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！'],
          hidens: false
      }
  },
    created () {
  },
  methods: {
      queryList (id) {
          this.$http.post('/mall/index/getGoodsChannel', {
              channel_id: id
          })
          .then(res => {
              this.listData = this.listData.concat(res.data.data.data)
              if(res.data.data.data.length > 0) {
                  this.istrue = true
              } else {
                  this.hidens = true
              }
          })
      },
      scrollTop (e) {
      const scroll = this.$refs.scroll.scrollTop
      const scrollH = this.$refs.scroll.clientHeight
      const contentH = this.$refs.content.clientHeight
    //   console.log(scroll, scrollH,scrollH+scroll)
      if (contentH - (scrollH+scroll) < 50) { 
        if (this.istrue) {
            this.istrue = false
            this.channel_id++;
             this.queryList(this.channel_id)
                             
        }   
      }
      },
      focu () {
        this.$router.push({path: 'search'})
      }
  }
}
</script>

<style scoped>
.content{
    overflow-x: hidden;
}
.main{
    display: flex;
    overflow: hidden;
    flex-direction: column;
}
.ban{
    height: 180px;
}
header{
    width: 100%;
    height: 1.02rem;
    display: flex;
    padding: 0 .2rem;
    background: #fff;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0;
    z-index: 66;
}
header .icon{
    font-size: .32rem;
}
header .img2{
 width: .7rem;
 height: .6rem;
}
.spT{
    flex: 1;
    height: .65rem;
    padding: 0 .4rem;
    position: relative;
}
.spT .icon{
    position: absolute;
    top: .14rem;
    left: .7rem;
}
.spT input{
    width: 100%;
    height: 100%;
    border:none;
    background: #eee;
    border-radius: .08rem;
    padding-left: .6rem;
    outline: none;
    font-size: .24rem;
}
header .img1{
 width: 1rem;
 height: .6rem;
}
.nav{
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    margin-top: .1rem;
    padding: .1rem 0;
}
.nav_box{
    width: 25%;
    margin: .1rem 0;
}
.banner_column{
    display: flex;
    width: 100%;
    padding: 0 .3rem;
}
.left{
    display: flex;
    flex-direction: column;
    font-size:.34rem;
    color:#ff7a17;
    font-weight:600;
    margin-right:.2rem;
}
.right{
    flex:1;
    height: 50px;
    border:1px solid #ccc;
    border-radius: .1rem;
    overflow: hidden;
}
.tit{
    display: flex;
    padding: 0 .2rem;
    margin: .1rem 0;
    height: 0.84rem;
    background: #fff;
    justify-content: space-between;
    align-items: center;
}
.tit_left{
    color:#ff7a17;
}
.tit_left img{
    width: 0.5rem;
    height: 0.5rem;
    position: relative;
    top: .1rem;
}
.tit_left span{
    font-size: .38rem;
    font-weight:600;
}
.tit_left small{
    font-size: .26rem;
}
.tit_right{
    font-size: .26rem;
}
.tit_right .icon{
    font-size: .5rem;
    position: relative;
    top:.05rem;
}
.discounts{
    display: flex;
    width: 100%;
    height: 4.02rem;
}
.discounts dt{
    flex:4;
    background: #eee;
}
.discounts dt img{
    width: 100%;
    height: 100%;
    border:2px solid #eee;
}
.discounts dd{
    flex:6;
    display: flex;
    flex-direction: column;
}
.discounts dd img{
    height: 50%;
    border:2px solid #eee;
}
.contant{
    width: 100%;
}
.contant_inser{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.img_text{
    width: 50%;
}
.bot{
    width: 100%;
    height: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .3rem;
}
</style>
