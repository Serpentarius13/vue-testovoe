import { createApp } from "vue";
import App from "./App.vue";
import "./../public/globals.css";
import router from "./../utils/router.js";

const app = createApp(App);

app.use(router);

app.mount("#app");
