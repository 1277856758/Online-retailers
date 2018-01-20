<template>
  <dl>
      <dt>
        <i class="icon iconfont icon-danxuan-copy" v-if='istrue' @click.stop='hiden'></i>
       <i class="icon iconfont icon-danxuankuangxuanzhong" v-else @click.stop='hiden'></i>
      </dt>
      <dd>
          <p  class='imgs'><img :src="'http://www.lb717.com/' + obj_data" alt=""></p>
          <div class="inser">
              <p class='text'>{{goods_bane}}</p>
              <div>
                  <p>
                      <span>
                          x<small>1</small>
                      </span>
                      <span class='cls_pink'>
                          x<b>{{price}}</b>
                      </span>
                  </p>
                  <p>
                      <small class='reduce' @click='reduce'>-</small>
                      <input type="text" v-model='this.count'>
                      <small class='add' @click='add'>+</small>
                  </p>
              </div>
          </div>
      </dd>
  </dl>
</template>

<script>
export default {
    props: {
        goods_bane: {},
        price: {},
        obj_data: {},
        price: {},
        count: {},
        item: {},
        index: {},
        istrue: {},
        id: {}
    },
    data () {
        return {
        show: true,
        arr:[]
        }
    },
    methods: {
        hiden () {
            this.$store.state.list[this.index].istrue = !this.istrue
            var flag = false
            this.$store.state.list.forEach((item, i) => {
               if (item.istrue) {
                   flag = true
                   return
               }
            });
            if (!flag) {
                console.log(flag)
                this.$store.state.is = false
            } else {
                this.$store.state.is = true
            }
            sessionStorage.list = JSON.stringify(this.$store.state.list)
            this.$store.commit('toal')
        },
        reduce () { 
           this.$store.commit('goods_reduce',this.id)
           this.$store.commit('toal')
        },
        add () {
           this.$store.commit('goods_add',this.id)
           this.$store.commit('toal')
        }
    },
    computed: {
        // ishide () {
        //     return this.$store.state.istrue
        // }
    },
    watch: {

    }
}
</script>

<style scoped>
*{
    box-sizing: border-box;
}
dl{
     display: flex;
     width: 100%;
     background: #fff;
     padding: .3rem;
     height: 3rem;
     overflow: hidden;
     margin-bottom: .02rem;
}
dl dt{
    flex:1;
    display: flex;
    align-items: center;
    padding-right: 0 .1rem;
}
dl dd{
    flex:9;
    display: flex;
    padding: 0 .2rem;
    position: relative;
}
.imgs{
    width: 2rem;
    background: #fff;
    height: 100%;
    border:.01rem solid #eee;
    padding: .1rem;
    flex:4;
}
.imgs img{
    width:100%;
    height:100%;
}
.inser{
    padding: .3rem .2rem;
    width: 100%;
    flex:6;
}
.inser p{
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: .3rem;
}
.inser div{
    display: flex;
    justify-content: space-between;
    margin-top:.5rem;
}
.inser div p:nth-child(1){
    display: flex;
    flex-direction: column;
}
.inser div p:nth-child(2){
    position: absolute;
    right:-4rem;
    margin-top: .1rem;
    padding-right: 1rem;
}
.inser div p:nth-child(2) input{
    width: 1.1rem;
    text-align: center;
    height: 0.6rem;
}
.inser div p:nth-child(2) small{
    border:.01rem solid #ccc;
    display: inline-block;
    height: 0.6rem;
    width: .5rem;
    text-align: center;
    line-height: .6rem;
    font-size: .28rem;
}
.cls_pink{
font-size: .3rem;
margin-left: 2px;
color: #fc4141;
}
</style>
