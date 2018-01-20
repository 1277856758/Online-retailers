<template>
  <div class='category'>
       <header>
            <span class='spT'>
                <input type="text" placeholder="请输入想购买的商品" @focus="focu">
                <i class="icon iconfont icon-fangdajing"></i>
            </span>
        </header>
        <section>
         <div class="content">
           <div class="left-list">
             <assortment v-for="(item, idx) in list" :key='idx' v-bind='item' :index='idx' @clsEvent='toggle'>
             </assortment>

           </div>
           <div class="right-tab">
              <conts :cont='this.$store.state.cont'></conts>
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
import footsD from '@/api/footer.json'
import Assortment from '@/components/Public/Assortment_list/Assortment_list'
import conts from '@/components/Public/Assortment_list/Assortment_cont'
export default {
  data () {
    return {
      show:false,
      cont: null,
      list: [
        {
          name: '家乡味道',
          show: false
        },
        {
          name: '进口食品',
           show: false
        },
        {
          name: '牛奶乳品',
           show: false
        },
        {
          name: '休闲零食',
           show: false
        },
        {
          name: '生鲜果蔬',
           show: false
        },
         {
          name: '米面油量',
           show: false
        },
        {
          name: '调料调味',
           show: false
        },
         {
          name: '酒水饮料',
           show: false
        }
      ],
      footsD:footsD
    }
  },
  components: {
    Assortment,
    conts,
    foots
  },
  methods: {
    toggle () {
      alert(e)
      this.cont = e
     //this.show = false
    }
  }
}
</script>

<style scoped lang='scss'>
.category{
  display: flex;
  width:100%;
  height:100%;
  background: #fff;
  flex-direction:column;
  position: fixed;
  top:0;
}
header{
  width:100%;
  height: 0.96rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 .4rem;
  border-bottom: .01rem solid #ccc;
  span{
    width:100%;
    height: 0.7rem;
  }
}
.spT .icon{
    position: absolute;
    top: .24rem;
    left: .7rem;
}
.spT input{
    width: 100%;
    height: 100%;
    border:none;
    background: #eee;
    border-radius: .25rem;
    padding-left: .6rem;
    outline: none;
    font-size: .24rem;
}
section{
  flex:1;
  width:100%;
  height:100%;
}
.content{
  width:100%;
  height:100%;
  display: flex;
}
.left-list{
  flex:3;
  background: #eee;
}
.right-tab{
  flex:7
}
</style>
