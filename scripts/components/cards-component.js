const cardsComponent = {
  template: `
   


 

  <div
  data-v-d6f3b7e5
  data-v-441e4bfa
  class="VPFeatures VPHomeFeatures"
>
  <div data-v-d6f3b7e5 class="container">
    <div data-v-d6f3b7e5 class="items">
    <threed-card-component
    v-for="card in cards" :key="card.href"  
    :card="card" 
   
  />      
 
     
       
      
    </div>
  </div>
</div>
   `,
  props: ["cards"],
};
