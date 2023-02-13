import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./css/style.css";
import "./css/style.scss";
import "./js/home.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import VueSnip from "vue-snip";
/* lightbox */
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
library.add(fas, far, fab);
createApp(App)
  .use(store)
  // .use(VueViewer)
  .use(VueViewer)
  .use(VueSweetalert2)
  .use(VueSnip)
  .component("FontAwesome", FontAwesomeIcon)
  .use(router)
  .mount("#app");
