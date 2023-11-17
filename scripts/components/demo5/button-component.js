const buttonComponent = {
  template: `
  <a @click.native="onClick" > 
    <div      
      :style="backgroundStyle"    
    > </div>
  </div>{{isSelected}}</a>
  
  
 
 
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
      this.$emit("onClick");
    },
  },
};
