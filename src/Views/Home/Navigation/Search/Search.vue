<template>
  <div class="search">
      <header>
           <span class='spT'>
                <input type="text" placeholder="请输入想购买的商品" v-model.trim="searchInput">
                <i class="icon iconfont icon-fangdajing"></i>
            </span>
            <span @click="search">搜索</span>
      </header>
      <section>
          <div class="record">
              <span>搜索记录</span>
              <span @click='clearRecoed'><i class="icon iconfont icon-lajitong"></i></span>
          </div>
          <p v-if="this.searchHistoryList.length==0" class='record_inserP'>暂无搜索记录...</p>
          <ul v-else class='record_inser'>
              <li class="search-item" v-for="(x,i) in searchHistoryList" :key="i">{{x}}</li>
          </ul>
          <div class="pulic_search">
              <h3 class="pulic_search_h3">大家都在搜</h3>
               <ul class='public_inser'>
              <li class="search-item" v-for="(x,i) in publicData" :key="i">{{x}}</li>
          </ul>
          </div>
      </section>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
    name:'search',
    data(){
        return {
            searchInput:'',
            searchHistoryList:[],
            publicData: ['粽子', '锅巴', '小吃', '北京烤鸭', '特产', '零食', '油', '面粉']
        }
    },
    created(){
        this.getHistory()
    },
    methods:{
        search(){
            if(this.searchInput=='') return;
            let ls = localStorage;
            let shistory = ls.getItem('searchHistory');
            
            if(!shistory){ // 当searchHistory 为空时 
                ls.setItem('searchHistory',JSON.stringify([this.searchInput]))
            }else{
                // 转换成数组 
                let newHistory = JSON.parse(shistory);
                // push unshift 返回值是长度 不能进行链式操作
                newHistory.unshift(this.searchInput);
                // lodash 是一个具有一致接口、模块化、高性能等特性的 JavaScript 工具库
                newHistory = _.uniq(newHistory)


                ls.setItem('searchHistory',JSON.stringify(newHistory))
            }
            this.getHistory()
            this.searchInput = ''
        },
        getHistory(){
            let ls = localStorage;
            if (!JSON.parse(ls.getItem('searchHistory'))){
                this.searchHistoryList = []
            } else {
                this.searchHistoryList = JSON.parse(ls.getItem('searchHistory'))
            }
            
        },
        clearRecoed () {
            let ls = localStorage;
            ls.clear();
            this.getHistory()
        }
    }
}
</script>

<style scoped>
.search{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background: #fff;
}
header{
    width: 100%;
    height: .96rem;
    display: flex;
    justify-content: space-between;
    padding: 0 .2rem;
    border-bottom:.01rem solid #ccc;
    align-items: center;
}
.record{
    width: 100%;
    height: .96rem;
    display: flex;
    justify-content: space-between;
    padding: 0 .3rem;
    align-items: center;
}
.record span{
    font-size: .32rem;
}
.record .icon{
    font-size: .38rem;
    color:#333;
}
.spT{
    flex: 1;
    height: .65rem;
    padding: 0 .4rem;
    position: relative;
}
.spT .icon{
    position: absolute;
    top: .14rem;
    left: .7rem;
}
.spT input{
    width: 100%;
    height: 100%;
    border:none;
    background: #eee;
    border-radius: .08rem;
    padding-left: .6rem;
    outline: none;
    font-size: .24rem;
}
.search-item{
    float: left;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: #555;
    margin: .2rem;
}
.record_inser{
    width: 100%;
    height: 180px;
}
.record_inserP{
    width: 100%;
    height: 180px;
    padding: 0 .3rem;
}
.pulic_search_h3{
    padding: 0 .3rem;
    font-size: .36rem;
    color:#666;
}
</style>
