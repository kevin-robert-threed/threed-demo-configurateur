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

const app = Vue.createApp(App);

app.component("threed-menu-component", menuComponent);
app.component("threed-button-component", buttonComponent);
app.mount("#app");
