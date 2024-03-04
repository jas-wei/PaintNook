import { createApp } from 'vue'; // Import createApp function from Vue
import App from './App.vue'; // Import the root component
import store from './store'; // Import Vuex store
import router from './router';

import { firebaseApp } from './firebase.js'

// Create a new Vue application instance using createApp
const app = createApp(App);

// Use the store in the Vue application instance
app.use(store);

app.use(router);

app.use(firebaseApp);

// Mount the Vue application instance to the DOM
app.mount('#app');
// createApp(App).use(router).mount('#app');
