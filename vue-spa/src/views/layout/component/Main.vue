<template>
    <el-main>
<!--        <tags/>-->
<!--        <div class="contents">-->
            <transition>
                <router-view></router-view>
            </transition>
<!--        </div>-->
    </el-main>
</template>
<script>
    import Tags from './Tags.vue'

    export default {

        components: {
            // Tags
        },
        data() {
            return {
            };
        },
        computed: {
        },
        methods: {

        }
    }
</script>

<style scoped>
.el-main{
    background-color: antiquewhite;
    /*height: 200px;*/
}
</style>