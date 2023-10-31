const App = {
  data() {
    return {
      cards: cards,
    };
  },
  methods: {},
};
// Create new Vue app
const app = Vue.createApp(App);

app.component("threed-card-component", cardComponent);
app.component("threed-cards-component", cardsComponent);
app.mount("#app");
