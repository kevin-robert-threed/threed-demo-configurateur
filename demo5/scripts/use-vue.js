const App = {
  data() {
    return {
      integration: integration,
    };
  },
  methods: {
    onClick(item) {
      const frame = document.getElementById("threed-iframe");
      // const frame = this.$refs.viewer.frame
      debugger;
      configureIFrame(item, frame);
    },

    getBack() {
      getBack();
    },
  },
};

const app = Vue.createApp(App);

app.component("threed-menu-component", menuComponent);
app.component("threed-button-component", buttonComponent);
app.mount("#app");
