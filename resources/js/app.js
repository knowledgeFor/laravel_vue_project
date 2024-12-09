import "./bootstrap";
import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./Pages/App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "toastr/build/toastr.min.css";
import { routes } from "./routes";

let app = createApp(App);

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

app.use(router);
app.mount("#app");
