const App = {
  data() {
    return {
      projet: projet,
    };
  },
  methods: {
    onClick(item) {
      configureIFrame(item, this.$refs.viewer.frame);
    },
    getBack() {
      getBack();
    },
  },
};

// Create new Vue app
const app = Vue.createApp(App);

app.component("threed-titre-component", titreComponent);
app.component("threed-viewer-component", viewerComponent);
app.component("threed-menu-component", menuComponent);
app.component("threed-button-component", buttonComponent);
app.mount("#app");
