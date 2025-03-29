import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router'; // Импортируем роутер из файла (например, router/index.js)

const app = createApp(App);
app.use(createPinia()); // Подключаем Pinia
app.use(router);        // Подключаем роутер
app.mount('#app');      // Монтируем приложение
