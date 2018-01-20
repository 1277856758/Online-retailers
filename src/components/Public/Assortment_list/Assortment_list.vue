<template>
<li @click='cls' class='lis'>
    <span></span>
{{name}}
</li>
</template>

<script>
export default {
    props: {
        name: {},
        index: {},
        show: {}
    },
    data () {
        return {
        }
    },
    methods: {
        cls (i) {            
            this.$load.show('.cont')
            this.$store.commit('self', this.index) 
            this.$store.state.count = this.name
            setTimeout(() => {
                this.$load.hide('.cont')
            }, 300)
        }
    },
    mounted () {
         this.$store.commit('self', 0) 
    }
}
</script>

<style scoped lang='scss'>
li{
    width:100%;
    height: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    span{
        display: inline-block;
        width: 0.1rem;
        height:100%;
        position: absolute;
        background: orangered;    
        left: -.1rem;
    }

}
.empty{
     background: #eee;
    span{
        left: -.1rem;
    }
}
.liCls{
    background: #fff;
    span{
        left: 0;
    }
}
</style>
