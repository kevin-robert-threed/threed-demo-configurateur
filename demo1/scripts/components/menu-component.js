const menuComponent = {
  template: `    
  <ul class="product-view">
    <threed-button-component
      v-for="p in produits" :key="p.href"  
      :isSelected="produit.href == p.href"
      :href="p.href"
      :alt="p.alt"
      :src="p.src"
      @on-click="onClick"
    />    
</ul>`,
  props: ["produits", "produit"],
  data: () => ({ item: "test" }),
  methods: {
    onClick(item) {
      this.$emit("onClick", item);
    },
  },
};
