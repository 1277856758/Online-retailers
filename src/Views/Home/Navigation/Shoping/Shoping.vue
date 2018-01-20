<template>
  <div class='shopping'>
     <header>
       <span></span>
       <span>购物车</span>
       <span class='small' @click='shows'>{{name}}</span>
     </header>
     <section>
       <div class="cont">
         <shop-goods v-for='(items, idx) in $store.state.list' :key='idx' v-bind='items' v-on:asb='fun' :index='idx'></shop-goods>
         <div class="shopTit">
           热门推荐
         </div>
         <div class="botCont">
           <img-text class='img_text' v-for="(item, idx) in botData" :key='idx' v-bind='item' :items='item'></img-text>
         </div>   
       </div>
     </section>
     <footer>
       <span>
         <i class="icon iconfont icon-danxuan-copy" v-if='$store.state.is' @click='hidens'></i>
         <i class="icon iconfont icon-danxuankuangxuanzhong" v-else @click='hidens'></i>
         <small>全选</small>
       </span>
       <span v-if='show'>
         <b class='font-h6'>合计：</b><small class='cls_pink font-h6'>￥</small><b class='cls_pink'>{{$store.state.toal}}</b>
         <button class='total' @click='total'>合计</button>
       </span>
       <span class='total' v-else @click='del'> 
          删除
       </span>
     </footer>
     <div class='home_footer'>
          <router-link
          v-for="(item, idx) in footsD"
          :key='idx' 
          :to='item.to'
          >
         <foots
         v-bind='item'
         :replace='item.replace'></foots>
          </router-link>      
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import shopGoods from '@/components/Public/Shoping_goods/Shoping_goods'
import ImgText from '@/components/Public/ImgText/ImgText'
import foots from '@/components/Public/Foots/Foots'
import footsD from '@/api/footer.json'
export default {
  components: {
    shopGoods,
    ImgText,
    foots
  },
  data () {
    return {
      show: true,
      name: '编辑',
      istrue: true,
      goodsList: this.$store.state.list,
      botData: [],
      footsD: footsD
    }
  },
  methods: {
    ...mapMutations(['del']),
    hidens () {
      this.$store.state.is = !this.$store.state.is
      this.$store.state.list.forEach((items, i) => {
          items.istrue = this.$store.state.is
      });
      sessionStorage.list = JSON.stringify(this.$store.state.list)
      this.$store.commit('toal')
    },
    fun (e) {
      var flag = false
      this.istrue = false
    },
    shows () {
      this.show = !this.show
      if (this.show) {
        this.name ='编辑'
      } else {
        this.name ='完成'
        this.$store.commit('toal')
      }
    },
    total () {      
    }
  },
  created () {
     this.$http_token.post('/ShippingMessage').then(res=>{
              if (res.data.code == 1001) {
                  this.$imessage('未登录')
                  localStorage.goodsList = []
                  // this.$router.push({path: '/home/user/login'})
              } else if (res.data.code == 1) {
                  this.$imessage('登录成功')
                  if (!sessionStorage.list) {
                    this.$store.state.list = res.data
                    sessionStorage.list = JSON.stringify(res.data)
              }
          } 
      })
      this.$http.post('/mall/goods/recommendgoods', {
          })
      .then(res => {
         this.botData = res.data.data
      })     
      var flag = false
      if (this.$store.state.list.length < 1) {
        flag = true
      }
      this.$store.state.list.forEach((item, i) => {
          if (item.istrue) {
              flag = true
              return
          }
      });
      if (!flag) {
          this.$store.state.is = false
      } else {
          this.$store.state.is = true
      }
      this.$store.commit('toal')
  },
  watch: {
  }
}
</script>

<style scoped>
.botCont{
  width:100%;
  display: flex;
  flex-wrap: wrap;
}
.shopTit{
  width:100%;
  height: .96rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin: .3rem 0;
  font-size: .32rem;
}
.shopping{
  display: flex;
  flex:1;
  background: #fff;
  flex-direction: column;
  position: fixed;
  top:0;
}
header{
  width:100%;
  height: 0.96rem;
  display:flex;
  justify-content: space-between;
  padding: 0 .3rem;
  border-bottom:.01rem solid #ccc;
  align-items: center;
  font-weight: 600;
}
header span{
  font-size:.34rem;
}
header .small{
  font-size:.28rem;
}
footer{
  width:100%;
  height: 0.96rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-top:.01rem solid #ccc;
  position: fixed;
  bottom:1.06rem;
  background: #fff;
}
footer span:nth-child(1){
  padding-left:.3rem;
}
footer span:nth-child(1) small{
  font-size: .32rem;
  padding: 0 .2rem;
}
.cls_pink{
font-size: .35rem;
color: #fc4141;
display: inline-block;
font-weight: bold;
}
.font-h6{
  font-size: .28rem;
}
.total{
background: #fc4141;
height:100%;
text-align: center;
line-height: .96rem;
color: #ffffff;
font-size: 0.32rem;
margin-left: 0.26rem;
width: 2.5rem;
border:none;
}
section{
  background: #eee;
  overflow-y: scroll;
}
.shop_goods{
  margin-bottom: .2rem;
}
</style>
