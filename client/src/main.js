import { createApp } from "vue";
import VueClipboard from "vue3-clipboard";
import App from "./App.vue";

createApp(App)
    .use(VueClipboard)
    .mount("#app");
