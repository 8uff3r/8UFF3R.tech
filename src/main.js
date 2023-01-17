import { createApp } from "vue";
import "./styles/main.css";
import App from "./App.vue";
import router from "./router";
import Particles from "vue3-particles";

const app = createApp(App);
app.use(router).use(Particles);
app.mount("#app");
