const viewerComponent = {
  template: `  
        
 
 

  <div
                      class="fotorama-item fotorama fotorama1698300862026"
                      data-gallery-role="gallery"
                    >
                      <div
                        data-gallery-role="fotorama__focusable-start"
                        tabindex="-1"
                      ></div>

                      <div
                        class="fotorama__wrap fotorama__wrap--css3 fotorama__wrap--slide fotorama__wrap--no-controls"
                        style="min-width: 0px; max-width: 100%"
                      >
                        <div
                          class="fotorama__stage"
                          data-fotorama-stage="fotorama__stage"
                          style="height: 822px; width: 822px"
                        >
                       

                         

                          <div
                            class="fotorama__stage__shaft fotorama__grab"
                            tabindex="0"
                            data-gallery-role="stage-shaft"
                            style="
                              transition-duration: 0ms;
                              transform: translate3d(0px, 0px, 0px);
                              margin-left: 0px;
                              width: 822.328px;
                            "
                          >
                      
                            <div
                              class="fotorama__stage__frame fotorama_vertical_ratio fotorama__loaded fotorama__loaded--img fotorama__active magnify-wheel-loaded"
                              aria-hidden="false"
                              style="left: 0px"
                                    data-active="true"
                            >
                         
                            <iframe ref="frame" width="100%" height="500" 
                            :src="projet.url" 
                            frameborder="0" 
                            class="viewer-iframe"   
                            allowfullscreen></iframe>     
                            </div>
                            
                          </div>

                 

                
                        </div>
                        <div
                          class="fotorama__nav-wrap fotorama__nav-wrap--horizontal"
                          data-gallery-role="nav-wrap"
                        >
                          <div
                            class="fotorama__nav fotorama__nav--thumbs fotorama__shadows--right"
                            style="height: 64px; width: 250px"
                          >
                            <div
                              class="fotorama__thumb__arr fotorama__thumb__arr--left fotorama__arr--disabled"
                              role="button"
                              aria-label="Previous"
                              data-gallery-role="arrow"
                              tabindex="-1"
                              disabled="disabled"
                            >
                              <div class="fotorama__thumb--icon"></div>
                            </div>

                            <div
                              class="fotorama__nav__shaft fotorama__grab"
                              style="
                                transition-duration: 555ms;
                                transform: translate3d(0px, 0px, 0px);
                              "
                            >
                        

                              <div
                              v-for="option in options" :key="option" 
                                class="fotorama__nav__frame fotorama__nav__frame--thumb"
                                tabindex="0"
                                role="button"
                                data-gallery-role="nav-frame"
                                data-nav-type="thumb"
                                aria-label="CHAUSSURES DE FOOTBALL VIRALTO III 3D AIRMESH FG FLAMINGO"
                                style="width: 50px"
                                data-active="false"
                              >
                                <div
                                  class="fotorama__thumb fotorama_vertical_ratio fotorama__loaded fotorama__loaded--img"
                                >
                              
                                  <img
                                    :src="option"
                                    :alt="option"
                                    
                                  />
                                </div>
                              </div>
                    
                              
                              
                            
                   
                 
                    
               
                           
                              
                         
                              
                            </div>

                            <div
                              class="fotorama__thumb__arr fotorama__thumb__arr--right"
                              role="button"
                              aria-label="Next"
                              data-gallery-role="arrow"
                              tabindex="-1"
                            >
                              <div class="fotorama__thumb--icon"></div>
                            </div>
                          </div>
                        </div>

                        <span class="slide-qty"
                          ><span data-gallery-role="count"
                            ><strong>4</strong>/14</span
                          ></span
                        >
                      </div>

                  
                    </div>








    

      
  `,
  props: ["projet"],

  computed: {
    frame() {
      return this.$refs.frame;
    },

    options() {
      var a = this.projet.groupements
        .map((groupement) => groupement.groupes)

        .reduce(function (pre, cur) {
          return pre.concat(cur);
        })
        .filter((groupe) => groupe.isSelected)
        .map((groupe) => groupe.src);
      return a;
    },
  },
  methods: {
    onClick(item) {
      this.$emit("onClick", item);
    },
  },
};
