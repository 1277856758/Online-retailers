<template>
  <div class="list">
      <p class='list_left'>
          <small class='line'></small>
          <span>
              <img src="" alt="">
              <b>家乡的味道</b>
          </span>
          <small class='line'></small>
      </p>
      <p class='list_right'>
           更多 <i class="icon iconfont icon-angle-right"></i>
      </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.list{
width: 100%;
height: 1rem;
background: #fff;
padding: 0 .3rem;
font-size:.26rem;
display: flex;
margin: .1rem 0;
justify-content: space-between;
align-items: center;
}
.list_left{
    flex:1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.list_left span{
    margin: .3rem;
    font-size:.32rem;
    color: #ff7a17;
}
.line{
    width: 1rem;
    height: 0.02rem;
    background: #ff7a17
}
.list_right{
    font-size:.26rem;
}
.list_right .icon{
    font-size: .46rem;
    position: relative;
    top:.06rem;
}
</style>
