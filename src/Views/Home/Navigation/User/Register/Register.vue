<template>
  <div class='login'>
      <header>
           <i class="icon iconfont icon-xiangzuo" @click='backward'></i>
           <span>注册会员</span>
           <span class="cls_red" @click='goLogin'>
               登录
           </span>
      </header>
      <section>
          <div class="from">
              <div class="user_phone">
                  <i class="icon iconfont icon-wode"></i>
                  <p>
                      <input type="text" placeholder="请输入您的账号" v-model.trim='user_name'>
                  </p>
              </div>
               <div class="user_yz">
                   <i class="icon iconfont icon-051"></i>
                  <p>
                      <input type="password" placeholder="请输入验证码" v-model.trim='user_yzm'>
                  </p>
                  <button class='yzm'>
                          获取验证码
                  </button>
              </div>
              <div class="user_pwd">
                   <i class="icon iconfont icon-suo"></i>
                  <p>
                      <input type="password" placeholder="请输入您密码" v-model.trim='user_pwd'>
                  </p>
              </div>
          </div>
           <div class="user_but">
                  <button @click='registerUser'>
                      确定
                  </button>
            </div>
      </section>
  </div>
</template>

<script>
export default {
    data () {
        return {
            user_name: '',
            user_pwd: '',
            user_yam: ''
        }
    },
    methods: {
        goLogin () {
            this.$router.push({path: 'login'})
        },
         backward () {
            this.$router.go(-1)
        },
        registerUser () {
            let user = {
                name: this.user_name,
                pwd: this.user_pwd
            }
            this.$http.post('/register',{
                user: user
            })
            .then((res) => {
                if (res.data.code == 1) {
                    this.$imessage('成功注册')
                    this.$router.go(-1)
                } else {
                    this.$imessage('祖册失败')
                }
                
                console.log(res.data)
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
.user_yz{
    display: flex;
}
.user_yz p{
    height: 0.9rem;
    width: 60%;
    border-bottom: .02rem solid #eee;
    margin-left: .1rem;
}
.user_yz .icon{
    font-size: .6rem;
}
.user_yz p input{
     width:100%;
    height:100%;
    border:none;
    outline:none;
    background: transparent;
}
.yzm{
    padding: .2rem;
    border-radius: 19px;
    border: 1px solid #fea9a9;
    color: #fc4141;
    font-size: .3rem;
    background: #fff;
    outline: none;
}
</style>
