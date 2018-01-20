<template>
  <div class='ads'>
     <div>
        <p>
          <span>{{name}}</span>
          <span>{{phone}}</span>
        </p>
        <p>
          <span>{{pro}}</span>
          <span>{{city}}</span>
          <span>{{dis}}</span>
          <span>{{msg}}</span>
        </p>
    </div>
    <div class="setUp">
        <p>      
            <i class="icon iconfont icon-danxuan-copy" v-if='kg' @click='kgC'></i>
            <i class="icon iconfont icon-danxuankuangxuanzhong" v-else @click='kgC'></i>
            <span>设置为默认地址</span>
        </p>
        <p>
            <span>
                <i class="icon iconfont icon-bianji"></i>
                <small @click='edit'>编辑</small>
            </span>
             <span>
                <i class="icon iconfont icon-shanchu"></i>
                <small @click='dele'>删除</small>
            </span>
        </p>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props: {
        name: {},
        phone: {},
        pro: {},
        city: {},
        dis: {},
        msg: {},
        index: {},
        items: {},
        kg: {}
    },
    computed: {
        ...mapState(['addressed'])
    },
    data () {
        return {
        }
    },
    methods: {
        kgC () {
            this.kg = !this.kg
            // this.addressed.forEach((item,i) => {
            //     if (i != this.index) {
            //         item.kg = true
            //     }
            // })
            // this.addressed = 456
            // sessionStorage.addressed = JSON.stringify(this.addressed)
        },
        dele () {
             this.$http_token.post('/deladress', {
                    index: this.index
                })
            .then((res) => {
            if (res.data == 'error') {
                this.$imessage('登录超时')
            } else {
                this.$imessage('删除成功')
                 this.$store.state.addressed = res.data
                 sessionStorage.addressed = JSON.stringify(res.data)
            }         
            })
        },
        edit () {
            var arr = this.index
            this.$router.push({path: '/home/address/edit', query: {opt: JSON.stringify(this.items), index: arr}})
        }
    }

}
</script>

<style scoped lang='scss'>
.setUp{
    display: flex;
    justify-content: space-between;
}
.ads{
    width:100%;
    padding: .15rem .4rem;
    margin: .2rem 0;
    border-bottom: .01rem solid #ccc;
    line-height: .5rem;
    font-size: 0.32rem;
}
</style>
