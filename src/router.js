import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./components/homePage/Home.vue";
import AddPage from "./components/addPage/AddPage.vue";
import EditPage from "./components/editPage/EditPage.vue";
import ListVue from "./components/ListofAll/List.vue";
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage, alias: "/" },
    { path: "/add", component: AddPage },
  ],
});
