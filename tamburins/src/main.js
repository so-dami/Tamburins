import { createApp } from 'vue';
import App from './App.vue';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router.js';
import store from './store.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faCircleQuestion, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret, faLocationDot, faTrashCan, faCircleQuestion, faXmark);

createApp(App).use(router, store).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
