<template>
    <el-header>
        <el-dropdown>
            <div>
                {{username }}
                <i class="el-icon-caret-bottom"/>
            </div>
            <el-dropdown-menu slot="dropdown" class="user-dropdown">
                <router-link class="inlineBlock" to="/">
                    <el-dropdown-item>首页</el-dropdown-item>
                </router-link>
                <el-dropdown-item>个人设置</el-dropdown-item>
                <el-dropdown-item divided>
                    <span style="display:block;" @click="logout">退出登陆</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-header>
</template>

<script>
    // import showAside from "@/components/showAside.vue";//引入了一个侧边栏是否折叠的组件
    export default {
        // name:'header',
        components: {
            // showAside
        },
        data() {
            return {
                fullscreen: false,
                name: "linxin",
                message: 2,
                username: "zyh"
            };
        },
        computed: {
            isCollapse: {
                get: function () {
                    return this.$store.state.isCollapse;
                },
                set: function (newValue) {
                    // console.log(newValue);
                    this.$store.commit("IS_COLLAPSE", newValue);//提交到vuex
                }
            }
        },
        methods: {
            toggleClick() {
                this.isCollapse = !this.isCollapse;
            },
            // 用户名下拉菜单选择事件
            logout(command) {
                this.$router.push("/login");
            },
            // 全屏事件
            handleFullScreen() {
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            }
        }
    };
</script>

<style scoped>
    .el-header {
        background-color: red;
        color: #2c3e50;
        text-align: center;
        height: 600px;
    }
</style>