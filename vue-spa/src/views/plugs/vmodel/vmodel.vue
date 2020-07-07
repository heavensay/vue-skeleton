<template>
    <div>
        <childmodel class="abc" v-model="test" ></childmodel>  // 组件中使用v-model
        {{'外面的值：' + test}} // 这儿试验test与内部msg值为双向绑定关系
        <button @click="fn">
            外面改变里面
        </button>

        <div>
            普通input双向绑定 v-model写法:
            <input v-model="inputValue"></input>
        </div>

        <div>
            普通input双向绑定普通写法:
            <input :value="commonValue" @input="handlerInput"></input>
        </div>


        <div>
            watch 监听父组件值变化
            <input v-model="watchValue"></input>

            <watchmodel v-model="watchValue"></watchmodel>
        </div>

        <div>
            <label>普通input v-model inputValue值：{{inputValue}}</label>
            <label>普通input v-model commonValue值：{{commonValue}}</label>
        </div>
    </div>
</template>

<script>
    import childmodel from './childmodel.vue'
    import watchmodel from './watchmodel.vue'
    export default {
        data () {
            return {
                test: '',
                inputValue:'inputValue',
                commonValue:'commonValue',
                watchValue:'watchValue',
            }
        },
        methods: {
            fn () {
                this.test += 1
            },
            handlerInput(e){
                console.log("handlerInput>>>",e)
                this.commonValue = e.target.value
            }
        },
        components:{
            childmodel,
            watchmodel,
        }
    }
</script>

<style scoped>

</style>