<template>
  <div class='circle'>
      <div>
        社区
      </div>
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
.circle{
  display: flex;
  flex:1;
  background: #fff;
}
</style>
