<template>
  <div class="setup">
      <header>
          设置
      </header>
      <section>
          <div class="list user">
              <span>
                  我的头像
              </span>
              <span>
                  <img src="http://www.lb717.com/static/mobile/images/default_avatar.png" alt="">
                  <small><i class="icon iconfont icon-angle-right"></i></small>
              </span>
          </div>
          <div class="list">
              <span>
                  用户名
              </span>
              <span>
                  <lable>
                      {{user_name}}
                  </lable>
                  <i class="icon iconfont icon-angle-right"></i>
              </span>
          </div>
          <p class='tLogin' @click='tLogin'>
              退出登录
          </p>
      </section>
  </div>
</template>

<script>
import { delCookie } from '@/Utils/utils'
export default {
    data () {
        return {
            user_name: localStorage.user_name
        }
    },
    methods: {
        tLogin () {
            alert(456)
            delCookie('token')
            localStorage.clear()
            sessionStorage.clear()
            this.$router.push({path: '/home/index'})
        }
    }
}
</script>

<style scoped lang='scss'>
.setup{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    background: #eee;
}
header{
    width:100%;
    height: 0.96rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:.34rem;
    background: #fff;
    border-bottom: .01rem solid #ccc;
}
section{
    flex:1;
}

.list{
    width:100%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .3rem;
    border-bottom:.01rem solid #ccc;
    background: #fff;
    img{
        width: 1.5rem;
        height: 1.5rem;
    }
    span{
        font-size: .36rem;
        font-weight: 600;
        small{
            position: relative;
            top: -.6rem;
            font-size: .32rem;
            font-weight: 400;
        }
        .icon{
            font-weight: 400;
            font-size: .38rem;
        }
        lable{
            font-weight: 400;
        }
    }
}
.user{
    height: 1.5rem;
}
.tLogin{
width: 5.53rem;
height: 1.08rem;
text-align: center;
line-height: 1.08rem;
margin-top: 1.7rem;
margin-left: .97rem;
background: #fc4141;
color: #fff;
font-size: .32rem;
border-radius: .5rem;
}
</style>
