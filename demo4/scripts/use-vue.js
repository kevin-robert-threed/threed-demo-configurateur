const App = {
  data() {
    return {
      integration: integration,
    };
  },
  methods: {
    getBack() {
     
      getBack();
    },
  },
};
const Home = { template: "<span>Home</span>" }; 

const routes = [
  {
    path: "/demo4",
    component: Home,
  },
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
