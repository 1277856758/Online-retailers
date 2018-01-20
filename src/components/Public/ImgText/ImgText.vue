<template>
<div class="imgText" @click='message($router, items)'>
    <img v-lazy="'http://www.lb717.com/' + obj_data" class='home_img'>    
    <p class='ps'>{{goods_name}}</p>
    <div class="shop">
        <span  class='cls_red'>
            ￥<b>{{discount_price}}</b>
        </span>
        <span @click.stop="addCart">
            <img src="src/common/images/cont/homeland3.png" alt="" class='shoping'>
        </span>
    </div>
</div>
  
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getCookie } from '@/Utils/utils'
export default {
    props: {
        goods_name: {},
        obj_data: {},
        discount_price: {},
        items: {}
    },
    computed: {
        ...mapState(['list'])
    },
    data () {
        return {
            count: 1
        }
    },
    methods: {
        ...mapMutations(['sendShop']),
        message: ($router, item) => {
            const params = {
                store_name: item.store_name,
                store_logo: item.store_name,
                goods_bane: item.goods_name,
                obj_data: item.obj_data,
                price: item.discount_price,
                id: item.goods_id,
                count: 1,
                istrue: true
            }
            $router.push({path: '/home/goods', query: {obj: JSON.stringify(params)}})
        },
        addCart () {
             const params = {
                store_name: this.items.store_name,
                goods_bane: this.items.goods_name,
                obj_data: this.items.obj_data,
                price: this.items.discount_price,
                id: this.items.goods_id,
                count:1,
                istrue: true
               }
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
             this.sendShop(this)
             
        }
    },
    computed: {
        goods_good () {
            return this.$store.state.shopingData
        }
    },
    created () {
    }
}
</script>

<style scoped>
.cls_red{
    color:red;
    font-weight:800;
}
.shop{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:.32rem;
}
.imgText{
    width: 50%;
    border:.05rem solid #eee;
    background: #fff;
}
.home_img{
    width: 100%;
    height: 4.5rem;
}
.shoping{
    width: 0.5rem;
    height: 0.5rem;
}
.ps{
    width: 100%;
    height: .8rem;
    overflow: hidden;
}
</style>
