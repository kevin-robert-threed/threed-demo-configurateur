const viewerComponent = {
  template: `  
        
  
                       

                      
                     
                            <iframe ref="frame" width="100%" height="500" 
                            :src="integration.url" 
                            frameborder="0" 
                            class="viewer-iframe"   
                            allowfullscreen></iframe>     
                            </div>
                            
                          


    

      
  `,
  props: ["integration"],

 
};
