const menuComponent = {
  template: `
  <div class="fieldset" tabindex="0" v-for="groupement in groupements" :key="groupement.libelle">
    <div class="field configurable required">
      <label class="label"><span></span> <span> {{ groupement.libelle }}</span></label>
    </div>
    <ul class="product-view">
    <threed-button-component
      v-for="groupe in groupement.groupes" :key="groupe.href"  
      :isSelected="groupe.isSelected" 
      :href="groupe.href"
      :alt="groupe.alt"
      :src="groupe.src"
      @on-click="onClick(groupement, groupe)"
    />      
  </ul>
  </div>
 `,
  props: ["groupements"],

  methods: {
    onClick(groupement, groupe) {
      groupement.groupes.forEach((g) => {
        g.isSelected = false;
      });
      groupe.isSelected = true;
      this.$emit("onClick", groupe);
    },
  },
};
