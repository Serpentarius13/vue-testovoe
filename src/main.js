import { createApp } from "vue";
import App from "./App.vue";
import "./../public/globals.css";
import "./../public/checkbox.scss";
import router from "./router";

const app = createApp(App).use(router);

app.use(router);

app.mount("#app");
