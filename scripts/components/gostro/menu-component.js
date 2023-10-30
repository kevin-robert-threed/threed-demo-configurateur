const menuComponent = {
  template: `
  <div class="product-variants-item row" v-for="groupement in groupements" :key="groupement.libelle">
  <div class="col-3">
    <label class="product-variants-item-label">{{ groupement.libelle }}</label>
  </div>
   
  <div class="col-9">
    <ul
      id="group_96"
      class="list-inline product-variant"
    >
   
    <threed-button-component
      v-for="groupe in groupement.groupes" :key="groupe.href"  
      :parent="groupement.libelle"
      :href="groupe.href"
      :alt="groupe.alt"
      :src="groupe.src" 
    /> 

       
       
    </ul>
  </div>
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
