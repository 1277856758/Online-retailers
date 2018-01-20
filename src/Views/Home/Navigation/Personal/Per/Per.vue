
<template>
    <div class="personal-page">
        <header class="header">
            <span @click='setUp'><img src="http://www.lb717.com/static/mobile/images/myimg/my1.png" alt=""></span>
            <label>我的717商城</label>
            <span></span>
        </header>
        <main class="main">
            <div class="information">
                <img src="http://www.lb717.com/static/mobile/images/default_avatar.png" alt="">
                <p>{{tel}}</p>
            </div>
            <div class="paymentBox">
                <h3>
                    <label>
                        <img src="http://www.lb717.com/static/mobile/images/myimg/my9.png" alt="">
                        <span>我的商店</span>
                    </label>
                    <img src="http://www.lb717.com/static/mobile/images/myimg/my14.png" alt="">
                </h3>
                <ul>
                    <li>
                        <img src="http://www.lb717.com/static/mobile/images/myimg/my4.png" alt="">
                        <span>待付款</span>
                    </li>
                    <li>
                        <img src="http://www.lb717.com/static/mobile/images/myimg/my5.png" alt="">
                        <span>待发货</span>
                    </li>
                    <li>
                        <img src="http://www.lb717.com/static/mobile/images/myimg/my6.png" alt="">
                        <span>待收货</span>
                    </li>
                    <li>
                        <img src="http://www.lb717.com/static/mobile/images/myimg/my7.png" alt="">
                        <span>售后</span>
                    </li>
                    <li>
                        <img src="http://www.lb717.com/static/mobile/images/myimg/my8.png" alt="">
                        <span>我的订单 <img src="http://www.lb717.com/static/mobile/images/myimg/my15.png" alt=""></span>
                    </li>
                </ul>
            </div>
            <div class="manageBox">
                <ul>
                    <li>
                        <label>
                            <img src="http://www.lb717.com/static/mobile/images/myimg/myhome.png" alt="">
                            <span>我的社区</span>
                        </label>
                        <img src="http://www.lb717.com/static/mobile/images/myimg/my15.png" alt="">
                    </li>
                    <li>
                        <label>
                            <img src="http://www.lb717.com/static/mobile/images/myimg/my10.png" alt="">
                            <span>账户余额</span>
                        </label>
                        <img src="http://www.lb717.com/static/mobile/images/myimg/my15.png" alt="">
                    </li>
                    
                    <li>
                        <router-link to='/home/address'>
                        <label>                    
                                <img src="http://www.lb717.com/static/mobile/images/myimg/my12.png" alt="">
                                <span>地址管理</span>
                                           
                        </label>
                        <img src="http://www.lb717.com/static/mobile/images/myimg/my15.png" alt="">
                        </router-link>
                    </li>       
                </ul>
                <div class="shopTit">
                热门推荐
            </div>
            <div class="botCont">
            <img-text class='img_text' v-for="(item, idx) in botData" :key='idx' v-bind='item' :items='item'></img-text>
            </div>
            </div>
               
        </main>
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
export default {
    data () {
        return {
            botData:[],
            footsD: footsD
        }
    },
    components: {
        ImgText: resolve => { require(['@/components/Public/ImgText/ImgText'], resolve) },
        foots
    },
    computed: {
    },
    created () {
       this.$http.post('/mall/goods/recommendgoods', {
          })
      .then(res => {
         this.botData = res.data.data
      })     
    },
    methods: {
        setUp () {
            this.$router.push({path: 'setup'})
        }
    }
}
</script>
<style lang='scss' scoped>
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
@mixin flex ($j) {
    display: flex;
    justify-content: $j;
    align-items: center;
}
.personal-page{
    display: flex;
    flex: 1;
    flex-direction: column;
    position: fixed;
    top:0;
    .header{
        height: 1rem;
        background: #fff;
        @include flex(space-between);
        span{
            width: 20%;
            height: 1rem;
            @include flex(center);
        }
        img{
            width: .4rem;
            height: .4rem;
        }
        label{
            font-size: .42rem;
        }
    }
    .main{
        flex: 1;
        overflow-y: scroll;
        .information{
            background: #FC6941;
            color: #fff;
            text-align: center;
            padding: .2rem 0;
            font-size: .32rem;
            img{
                height: 1.3rem;
                width: 1.3rem;
            }
        }
        .paymentBox{
            margin-bottom: 10px;
            h3{
                height: 1.3rem;
                padding: 0 .2rem;
                background: #fff;
                @include flex(space-between);
                border-bottom: 1px solid #ccc;
                label{
                    height: 1.3rem;
                    color: #fc4141;
                    font-size: .42rem;
                    font-weight: normal;
                    @include flex(space-between);              
                    img{
                        width: .7rem;
                        height: .72rem;
                        margin-right: 5px;
                    }
                }
                img{
                    width: .16rem;
                    height: .34rem;
                }
            }
            ul{
                height: 1.5rem;
                background: #fff;
                display: flex;
                li{
                    flex: 1;
                    @include flex(center);
                    flex-direction: column;
                    img{
                        width: .45rem;
                        height: .45rem;
                        margin-bottom: 10px;
                    }
                    span{
                        font-size: .24rem;
                    }
                    &:last-child{
                        border-left: 1px solid #ccc;
                        span{
                            img{
                                width: .1rem;
                                height: .24rem;
                                margin-bottom: -2px;
                            }
                        }
                    }
                }
            }
        }
        .manageBox{
            ul{
                li{
                    height: 1rem;
                    background: #fff;
                    border-bottom: 1px solid #ccc;
                    padding: 0 .3rem;
                    @include flex(space-between);
                    a{
                        display: flex;
                        width:100%;
                        height: 100%;
                        justify-content: space-between;
                        align-items: center;
                        color:#333;
                    }
                    label{
                        height: 1rem;
                        @include flex(center);
                        img{
                            width: .4rem;
                            height: .36rem;
                            margin: 0 .05rem 0 .2rem;
                        }
                    }
                    img{
                        width: .12rem;
                        height: .24rem;
                    }
                }
            }
        }
    }
}
</style>


