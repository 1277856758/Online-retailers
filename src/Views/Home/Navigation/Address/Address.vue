<template>
<div class="address-index">
    <router-view></router-view>
</div>
</template>

<script>
export default {
    methods: {
        addesFrom () {
            this.$router.push({path: '/home/address/addressFrom'})
        }
    }
}
</script>

<style scoped lang='scss'>
.address-index{
    width:100%;
    height:100%;
}
</style>
