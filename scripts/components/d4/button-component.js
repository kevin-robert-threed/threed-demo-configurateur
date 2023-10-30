const buttonComponent = {
  template: `
   
  <li :class="isSelected ? 'selected' : ''">
    <a @click="onClick" ><img
        :alt="alt"
        width="50px"
        height="50px"
        loading="lazy"
        :src="src" />
    </a>
  </li> 
   `,
  props: ["href", "alt", "src", "isSelected"],

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
