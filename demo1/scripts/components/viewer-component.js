const viewerComponent = {
  template: `  
        <img
        :src="produit.src"
        :alt="produit.alt"
        class="test"      
        /> 
        <iframe ref="frame" width="100%" height="500" 
        :src="projet.url" 
        frameborder="0" 
        allowfullscreen></iframe>
  `,
  props: ["projet", "produit"],
  data: () => ({ item: "test" }),
  computed: {
    frame() {
      return this.$refs.frame;
    },
  },

  methods: {
    onClick(item) {
      this.$emit("onClick", item);
    },
  },
};
