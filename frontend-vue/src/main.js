import { createApp } from 'vue';
// import Vue from 'vue'
import App from '../src/App.vue'
import router from './routes';

createApp(App).use(router).mount("#app")
// Vue.use(Router)

// const app = Vue.createApp({
//   router,
// })
// app.use(router)
// app.mount('#app')

