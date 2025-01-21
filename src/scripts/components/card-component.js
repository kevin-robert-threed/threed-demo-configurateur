const cardComponent = {
  template: `
  <div data-v-d6f3b7e5 class="item grid-3">
  <a
    data-v-e8895942
    data-v-d6f3b7e5
    class="VPLink link no-icon VPFeature"
    :href="card.href"
  >
    <article data-v-e8895942 class="box">
      <!--v-if-->
      <h2 data-v-e8895942 class="title">{{card.titre}}</h2>
      <p data-v-e8895942 class="details">{{card.description}}</p>
      <!--v-if-->
    </article></a
  >
</div>
   
   `,
  props: ["card"],

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
