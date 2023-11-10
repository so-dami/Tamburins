import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router.js';
import store from './store.js';
let app = createApp(App);

app.use(router, store).mount('#app');
