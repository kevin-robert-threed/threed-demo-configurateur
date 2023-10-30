const buttonComponent = {
  template: `
  <li
  class="product-variant__color list-inline-item"
>
  
<a @click.native="onClick" > 

 
 





  <div class="custom-control custom-checkbox" >
    <input
      type="radio"
      class="custom-control-input"
  
      aria-label="Coloris Plateau"
    />
    <label
      class="custom-control-label"
 
      :style="backgroundStyle"
    
    > </label>
  </div></a>
  
  
</li>
 
   `,
  props: ["href", "alt", "src", "parent", "isSelected"],

  computed: {
    backgroundStyle() {
      return {
        "background-image": `url(${this.src})`,

        height: "50px",
        width: "50px",
      };
    },
  },

  methods: {
    onClick() {
      const query = Object.assign({}, this.$route.query);
      query.t = new Date().getTime().toString();
      query[this.parent] = this.href;
      this.$router.push({ query }); //by route path
    },
  },
};
