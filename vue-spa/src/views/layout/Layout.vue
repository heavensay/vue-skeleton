<template>
    <el-container>
        <Aside/>
        <el-container direction="vertical">
            <Header/>
            <Main/>
            <Footer/>
        </el-container>
    </el-container>
</template>

<script>
    import Aside from "./component/Aside.vue";
    import Header from "./component/Header.vue";
    import Main from "./component/Main.vue";
    import Footer from "./component/Footer.vue";
    import {mapState} from "vuex";

    export default {
        name: "Layout",
        components: {
            Footer,
            Aside,
            Header,
            Main
        },
        computed: {
            ...mapState(["isCollapse"])
        }
    };
</script>

<style scoped>
    html, body, #app, .el-container {
        height: 100%;
    }
</style>