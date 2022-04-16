import { createApp } from "vue";
import App from "./App.vue";

import router from './router'
const app = createApp(App)
app.use(router)

import "../src/assets/vendor/bootstrap5/css/bootstrap.min.css";
import "../src/assets/source/css/style.css";

app.mount("#app");
