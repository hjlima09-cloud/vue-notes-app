import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./style.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Íconos sólidos
import {
  faPen,
  faTrash,
  faCheck,
  faCheckCircle,
  faSyncAlt,
  faLock,
  faBolt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

// Íconos de marcas (redes sociales)
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

// Añadir todos los íconos al registro global
library.add(
  faPen,
  faTrash,
  faCheck,
  faCheckCircle,
  faSyncAlt,
  faLock,
  faBolt,
  faClock,
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
);

// Crear y montar la app
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
