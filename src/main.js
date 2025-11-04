import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import '@fortawesome/fontawesome-free/css/all.css';

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
