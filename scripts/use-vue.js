const { onMounted, onUpdated, onUnmounted, ref, reactive, getCurrentInstance } =
  Vue;

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
      console.debug(item);
      // debugger;
      this.produit = this.produits.find((x) => x.href == item.href);

      const refEl = this.$refs.refEl;

      if (refEl && refEl.contentWindow) {
        const json = JSON.stringify({
          action: "configure",
          options: this.produit.options,
        });
        const params = JSON.parse(json);
        console.log("send : " + json);

        refEl.contentWindow.postMessage(params, "*");
      }
    },
  },
};

// Create new Vue app
const app = Vue.createApp(App);

app.component("threed-menu-component", menuComponent);
app.component("threed-button-component", buttonComponent);
app.mount("#app");
