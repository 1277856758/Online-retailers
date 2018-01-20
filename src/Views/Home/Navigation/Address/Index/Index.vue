<template>
<div class="address">
    <router-view></router-view>
     <header>
          <span @click='brack'>
               <i class="icon iconfont icon-xiangzuo"></i>
               <small>返回</small>
          </span>
          <span>
             收货地址
          </span>
          <span>
              <i class="icon iconfont icon-shouye"></i>
          </span>
      </header>
      <section>
          <div class="ads">
              <ads v-for='(item, i) in $store.state.addressed' :key='i' v-bind='item' :index='i' :items='item'></ads>
          </div>
          <p class="addes" @click='addesFrom'>
              <span>+</span>
              新增加地址
          </p>
      </section>
</div>
</template>

<script>
import ads from '@/components/Public/Ads/Ads'
export default {
    methods: {
        brack () {
            this.$router.go(-1)
        },
        addesFrom () {
            this.$router.push({path: '/home/address/from'})
        }
    },
    components: {
        ads
    },
    created () {
            this.$http_token.post('/adres')
            .then((res) => {
                 if (res.data == 'error') {
                    this.$imessage('登录超时')
                 } else {
                    this.$store.state.addressed = res.data
                    console.log(this.$store.state.addressed)
                    sessionStorage.addressed = JSON.stringify(res.data)
                 }    
            })    
        }
}
</script>

<style scoped lang='scss'>
.address{
    width:100%;
    height:100%;
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
    border-bottom: .01rem solid #ccc;
}
header span:nth-child(1) small{
    font-size: .32rem;
}
header span:nth-child(1) .icon{
    font-size:.4rem;
}
header span:nth-child(2){
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
.addes{
font-family: PingFangSC-Regular, sans-serif;
background: #fc4141;
width: 4.66rem;
height: 0.98rem;
text-align: center;
line-height: 1.01rem;
border-radius: 0.48rem;
margin-top: .8rem;
margin-left: 1.42rem;
color: #fff;
font-size: 0.32rem;
span{
    display: inline-block;
    transform: scale3d(2,2,2);
    position: relative;
    top: -.08rem;
    right: .03rem;
}
}
</style>
