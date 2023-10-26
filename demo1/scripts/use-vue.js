const App = {
  data() {
    return {
      projet: projet,
      produits: produits,
      produit: produits[0],
    };
  },
  methods: {
    onClick(item) {
      this.produit = this.produits.find((x) => x.href == item.href);
      configureIFrame(item, this.produit, this.$refs.viewer.frame);
    },
    getBack() {
      getBack();
    },
  },
};

// Create new Vue app
const app = Vue.createApp(App);

app.component("threed-viewer-component", viewerComponent);
app.component("threed-menu-component", menuComponent);
app.component("threed-button-component", buttonComponent);
app.mount("#app");
