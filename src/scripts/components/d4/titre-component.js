const titreComponent = {
  template: `
  
 
  
<div v-if="projet" class="page-title-wrapper product">
  <h1 class="page-title">
    <span class="base" data-ui-id="page-title-wrapper">{{projet.produit}} </span>
    <br>
    <br>
    <span class="base" data-ui-id="page-title-wrapper"> {{options}}</span>
  </h1>
</div>
 

 `,
  props: ["projet"],

  computed: {
    options() {
      var a = this.projet.groupements
        .map((groupement) => groupement.groupes)

        .reduce(function (pre, cur) {
          return pre.concat(cur);
        })
        .filter((groupe) => groupe.isSelected)
        .map((groupe) => groupe.libelle)
        .join(" / ");

      return a;
    },
  },
};
