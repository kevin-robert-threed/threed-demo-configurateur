const menuComponent = {
  template: `
  <div v-for="groupement in groupements" :key="groupement.libelle">
 
   {{ groupement.libelle }}
   
 
   
   
    <threed-button-component class="m-10"
      v-for="groupe in groupement.groupes" :key="groupe.href"  
      :parent="groupement.libelle"
      :href="groupe.href"
      :alt="groupe.alt"
      :src="groupe.src" 
      @on-click="onClick(groupement, groupe)"
    /> 

       
       
   
    
</div>
 `,
  props: ["groupements"],

  methods: {
    onClick(groupement, groupe) {
      debugger;
      groupement.groupes.forEach((g) => {
        g.isSelected = false;
      });
      groupe.isSelected = true;
      this.$emit("onClick", groupe);
    },
  },
};
