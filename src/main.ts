import "./assets/bootstrap.min.css"
import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes"
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

const app =createApp(App);

app.use(routes);

app.mount("#app");
