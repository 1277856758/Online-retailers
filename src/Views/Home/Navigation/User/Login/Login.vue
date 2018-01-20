<template>
  <div class='login'>
      <header>
           <i class="icon iconfont icon-xiangzuo" @click='backward'></i>
           <span>会员登录</span>
           <span class="cls_red" @click='goRegister'>
               注册
           </span>
      </header>
      <section>
          <div class="from">
              <div class="user_phone">
                  <i class="icon iconfont icon-wode"></i>
                  <p>
                      <input type="text" placeholder="请输入您的账号" v-model='user_name'>
                  </p>
              </div>
              <div class="user_pwd">
                   <i class="icon iconfont icon-suo"></i>
                  <p>
                      <input type="password" placeholder="请输入您密码" v-model='user_pwd'>
                  </p>
              </div>
          </div>
           <div class="user_but">
                  <button @click='loginUser'>
                      立即登录
                  </button>
                  <span @click='goReset'>忘记密码?</span>
            </div>
      </section>
  </div>
</template>

<script>
import { setCookie } from '@/Utils/utils'
export default {
    data () {
        return {
            user_name: '',
            user_pwd: ''
        }
    },
    methods: {
        goRegister () {
            this.$router.push({path: 'register'})
        },
        goReset () {
            this.$router.push({path: 'reset'})
        },
         backward () {
            this.$router.go(-1)
        },
        loginUser () {
            let user = {
                name: this.user_name,
                pwd: this.user_pwd
            }
            this.$http.post('/login',{
                user: user
            })
            .then((res) => {
                if (res.data.code === '1') {
                    setCookie('token',res.data.token)
                    localStorage.user_name = res.data.user_name
                    this.$router.go(-1)
                    
                } else {
                   this.$imessage('失败')
                }
            })
        }
    }
}
</script>

<style scoped>
.login{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    background: #eee;
}
header{
    width:100%;
    height:.96rem;
    background: #fff;
    padding: 0 .4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
header .icon{
    font-size:.4rem;
}
header span{
    font-size:.32rem;
}
header .cls_red{
    font-size:.28rem;
    color:red;
}
section{
    flex:1;
}
.from{
    background: #fff;
    padding: 0 .4rem;
}
.user_phone,.user_pwd{
    display: flex;
    margin: .1rem 0;
    padding: .2rem 0;
}
.user_phone .icon,.user_pwd .icon{
    font-size: .6rem;
    margin-right: .09rem;
}
.user_phone p,.user_pwd p{
    height: 0.9rem;
    width: 100%;
    border-bottom: .02rem solid #eee;
}
.user_phone p input,.user_pwd p input{
    width:100%;
    height:100%;
    border:none;
    outline:none;
    background: transparent;
}
.user_but{
  margin-top: 1rem;
  position: absolute;
  left: 50%;
  margin-left: -2.8rem;
}
.user_but span{
    position: absolute;
    bottom:-.5rem;
    right:0;
    border-bottom: .01rem solid #666;
}
.user_but button{
    width: 5.57rem;
    height: 1.13rem;
    display: block;
    color: #fff;
    background: #fc4141;
    border-radius: 50px;
    font-size: .36rem;
    border:none;
    outline: none;
}
</style>
