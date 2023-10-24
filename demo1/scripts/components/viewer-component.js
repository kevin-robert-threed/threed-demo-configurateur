const viewerComponent = {
  template: `  
        <img
        :src="produit.src"
        :alt="produit.alt"
        class="viewer-image"      
        /> 
        <iframe ref="frame" width="100%" height="500" 
        :src="projet.url" 
        frameborder="0" 
        class="viewer-iframe"   
        allowfullscreen></iframe> 
  `,
  props: ["projet", "produit"],
   
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
