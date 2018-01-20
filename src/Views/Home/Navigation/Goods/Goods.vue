<template>
  <div class='goods'>
      <header>
          <span>
               <i class="icon iconfont icon-xiangzuo" @click='brack'></i>
               <small>返回</small>
          </span>
          <span>
              <small>商品</small>
              <small>详情</small>
          </span>
          <span>
              <i class="icon iconfont icon-shouye"></i>
          </span>
      </header>
      <section>
          <div class="banner">
              <banner :banner='bannerD'></banner>
          </div>
          <div class="inser">
              <div class="tit">
                  {{params.goods_bane}}
              </div>
              <dl class="btwn">
                  <dt>
                      <p>￥<span>{{params.price}}</span></p>
                      <span>运费：￥0.00</span>
                  </dt>
                  <dd>
                      <button class='into'>进入店铺</button>
                  </dd>
              </dl>
              <div class="swiper">
                   <swiper :slidesPerView='4'></swiper>
              </div>
          </div>
      </section>
      <footer>
          <div class="left">
              <router-link v-for='(item, idx) in iconD' :key='idx' :to='item.to'>
                  <icon  v-bind='item' class='fot-icon'></icon>
              </router-link>
              
          </div>
          <div class="right">
              <button class='but shopcart' @click="addShop">加入购物车</button>
              <button class='but purchase'>立即购买</button>
          </div>
      </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Icon from '@/components/Public/Icon/Icon'
import Banner from '@/components/Public/Banner/Banner'
import Swiper from './Swiper'
export default {
    data () {
        return {
            iconD: [
                {
                    name: '客服',
                    icon: 'icon-kefu',
                    to: '/'
                },
                 {
                    name: '购物车',
                    icon: 'icon-gouwuche',
                    to: '/home/shoping'
                }
            ],
            params: null,
            url: this.$route.query.obj.obj_data,
            bannerD:[{},{},{}],
            botData: []
        }
    },
    components: {
        Icon,
        Banner,
        Swiper
    },
    created () {
        this.params = JSON.parse(this.$route.query.obj)
        this.url = this.params.obj_data
        this.$http.post('/mall/goods/recommendgoods', {
          })
        .then(res => {
            this.botData = res.data.data
        })   
    },
    computed: {
        data () {
            return this.botData
        }
    },
    methods: {
        ...mapMutations(['sendShop']),
        brack () {
            this.$router.go(-1)
        },
        addShop () {
             const params = JSON.parse(this.$route.query.obj)
             console.log(this.$route.query.obj)
               var flag = false
               var cont = null
               if (this.$store.state.list.length > 0) {
                   this.$store.state.list.forEach((item, i) => {
                        if (item.id == params.id) {
                            flag = true
                            cont = i;
                            return;
                        }
                   })
                   console.log(flag, cont)
                   if (flag) {
                       this.$store.state.list[cont].count++;
                   }else{
                       this.$store.state.list.push(params)
                   }
               } else {
                   this.$store.state.list.push(params)
               }
             sessionStorage.list = JSON.stringify(this.$store.state.list)
             this.$imessage('成功添加')
        }
    }
}
</script>

<style scoped>
.goods{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
}
header{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 0 .2rem;
    align-items: center;
    font-size: .32rem;
}
header span:nth-child(1) small{
    font-size: .32rem;
}
header span:nth-child(1) .icon{
    font-size:.4rem;
}
header span:nth-child(2) small{
 font-size: .42rem;
 color: #000;
}
header span:nth-child(3) .icon{
    font-size: .4rem;
    border-radius: 50%;
    padding: .1rem;
    color: #666;
    border:.01rem solid #ccc;
}
section{
    flex:1;
    overflow-y: scroll;
}
footer{
    width: 100%;
    height: 1.1rem;
    border-top:.01rem solid #ccc;
    display: flex;
    justify-content: space-between;
}
.left{
    display: flex;
    padding: 0 .3rem;
    
}
.left p{
margin: 0 .1rem;
}
.right{
    flex:1;
    display: flex;
    justify-content: flex-end;
}
.but{
    width: 2.6rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .36rem;
    border: none;
    outline: none;
    color:#fff;
    background: #fe8282;
}
.purchase{
   background:  #fb4142
}
.banner{
    width: 100%;
    height: 300px;
}
.banner .el-carousel .parset{
    width: 100%;
    height: 100%;
}
.tit{
    padding: 0 .3rem;
    font-size: .28rem;
}
.btwn{
    padding: 0 .3rem;
    font-size: .28rem;
    display: flex;
    justify-content: space-between;
    margin: .2rem 0;
}
.into{
    width: 2.2rem;
    height: .8rem;
    outline: none;
    background: cornflowerblue;
    border-radius: .1rem;
    color:#fff;
    border:none;
    font-size: .34rem;
}
</style>
