<!-- v-model 测试；传值、改值 -->
<template>
    <div>
        <ul>
            <li>{{'里面的值：'+ watchVal}}</li>
            <button @click="fn2">watch里面改变外面</button>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "childmodel",
        model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
            prop: 'watchVal',
            event: 'watchmodel'
        },

        props:{
            watchVal:String,
        },

        data(){
          return{
              ff:'',
          }
        },
        methods: {
            fn2 () {
                this.$emit('watchmodel', this.watchVal+3)
            }
        },
        watch:{
            watchVal(v1,v2){
                console.log("watchVal>>>>",v1,v2)
            },
        }
    }
</script>

<style scoped>

</style>