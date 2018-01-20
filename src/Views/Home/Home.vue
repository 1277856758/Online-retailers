<template>
  <div class='home'>  
    <div class="mainBox">
      <keep-alive include="index">
        <transition name='fade'>
        <router-view></router-view>
        </transition>
      </keep-alive>
    </div>  
     
  </div>
</template>

<script>
import foots from '@/components/Public/Foots/Foots'
import footsD from '@/api/footer.json'
export default {
  components: {
    foots
  },
  data () {
    return {
      footsD: footsD
    }
  }
}
</script>

<style scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home_footer{
  border:.01rem solid #ccc;
}
.fade-enter-active {
  animation: fade-in .5s ease-in;
}
.fade-leave-active {
  animation: fade-leave .5s ease-in;
}
@keyframes fade-leave {
  0% {
    transform: translateX(0%)
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(100%);
  }
}
@keyframes fade-in {
  0% {
    transform: translateX(-100%)
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
