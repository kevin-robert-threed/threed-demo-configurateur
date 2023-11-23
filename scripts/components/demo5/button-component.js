const buttonComponent = {
  template: `
  <a @click.native="onClick" > 
    <div :style="backgroundStyle"  :class="isSelected ? 'selected' : ''"     > </div>
  </div> 
  </a>
  
  
 
 
   `,
  props: ["href", "alt", "src", "parent", "isSelected"],

  computed: {
    backgroundStyle() {
      return {
        "background-image": `url(${this.src})`,

        "background-position": "center",
        height: "100px",
        width: "100px",
      };
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
