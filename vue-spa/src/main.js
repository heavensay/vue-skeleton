import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router/router'
import store from './store/store'
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
