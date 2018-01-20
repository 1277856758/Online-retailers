<template>
  <p @click='clsClick'>
      <img :src="url" alt="" :class='cls' v-if='show'>
      <img :src="replace" alt="" :class='cls' v-else>
      <span v-if='name'>{{ name }}</span>
  </p>
</template>

<script>
export default {
    props: {
        url: {
            type: String
        },
        name: {
            type: String
        },
        cls: {
            type: String
        },
        replace: {
            type: String
        }
    },
    data () {
        return {
            show: true
        }
    },
    methods: {
    }
}
</script>

<style scope>
span{
    font-size: .24rem;
}
</style>
