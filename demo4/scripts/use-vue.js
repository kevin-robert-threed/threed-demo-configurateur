const App = {
  data() {
    return {
      integration: integration,
    };
  },
  methods: {
    getBack() {
      debugger;
      getBack();
    },
  },
};
const Home = { template: "<div>Home</div>" };

const routes = [
  {
    path: "/demo4",
    name: "user",
    component: Home,
  },
  // {
  //   name: "select1",
  //   path: "/select1",
  //   component: Home,
  // },
  // {
  //   name: "select2",
  //   path: "/select2",
  //   component: Home,
  // },
  { path: "/", component: Home },
  // { path: "/about", component: Home },
];

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes: routes,
});

const app = Vue.createApp(App);
app.use(router);

app.component("threed-viewer-component", viewerComponent);
app.component("threed-menu-component", menuComponent);
app.component("threed-button-component", buttonComponent);
app.mount("#app");
