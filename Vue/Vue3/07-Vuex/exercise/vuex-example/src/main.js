import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

// .use(store) 加入額外方法
createApp(App)
  .use(store)
  .mount("#app");
