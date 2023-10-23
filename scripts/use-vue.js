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
      debugger;
      this.produit = this.produits.find((x) => x.href == item.href);

      const refEl = this.$refs.refEl;

      if (refEl && refEl.contentWindow) {
        const t = new Date().getTime().toString();
        console.log("send :" + this.produit.action + "&t=" + t);

        refEl.contentWindow.postMessage(
          {
            action: "configure",
            config: {
              defaultFonts: ["Humor Sans", "Helvetica", "Times New Roman"],
            },
            route: this.produit.action + "&t=" + t,
          },
          "*"
        );
      }
    },
  },
};

// Create new Vue app
const app = Vue.createApp(App);

app.component("menu-component", menuComponent);
app.component("button-component", buttonComponent);
app.mount("#app");
