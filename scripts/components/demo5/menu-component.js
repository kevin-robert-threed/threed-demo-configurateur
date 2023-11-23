const menuComponent = {
  template: `


  
  <canvas id="textCanvas" ref="myCanvas" width="100%" height="100%"></canvas>
  <div v-for="groupement in groupements" :key="groupement.libelle">
 
   {{ groupement.libelle }}
   
 
   
   
    <threed-button-component class="m-10"
      v-for="groupe in groupement.groupes" :key="groupe.href"  
      :parent="groupement.libelle"
      :href="groupe.href"
      :alt="groupe.alt"
      :src="groupe.src" 
      :isSelected="groupe.isSelected" 
      @on-click="onClick(groupement, groupe)"
    /> 

       
       
   
    
</div>


<input v-model="gravaure" @keyup="onTest" />
 

<input v-model="colorValue" class="kuiColorPickerInput"
 :style="style" type="color" @change="onChange" />
 
 {{colorValue}}
 <br>

<button class="mx-2" outlined small color="primary" @click="onTest">Test</button>
<button class="mx-2" outlined small color="primary" @click="onDownload">Download</button>

 `,
  data() {
    return {
      colorValue: "#00ff00",
    };
  },

  computed: {
    backgroundStyle() {
      return {
        backgroundColor: this.colorValue,
      };
    },
  },

  props: ["groupements"],

  methods: {
    onChange(e) {
      this.colorValue = e.target.value;
      this.onTest();
    },
    onClick(groupement, groupe) {
      // debugger;
      groupement.groupes.forEach((g) => {
        g.isSelected = false;
      });
      groupe.isSelected = true;

      this.onTest();
    },
    onDownload() {
      console.warn("onDownload");
      console.warn(this.color);

      var a = this.groupements
        .map((groupement) => groupement.groupes)

        .reduce(function (pre, cur) {
          return pre.concat(cur);
        })
        .filter((groupe) => groupe.isSelected)
        .map((groupe) => groupe.src);

      var imageSrc =
        "http://localhost:5000/images/Textures/txt_Couleur_Threed-Bleu_XXX.png";
      if (a[0]) {
        imageSrc = a[0];
      }

      // debugger;

      const canvas = this.$refs.myCanvas;

      if (canvas) {
        const context = canvas.getContext("2d");
        if (context) {
          const txt = this.gravaure || "";

          // context.canvas.width = context.measureText(txt).width;
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.addEventListener("load", (d) => {
            // debugger;

            context.canvas.width = img.width;
            context.canvas.height = img.height;
            // ctx.drawImage(img,0,0);
            // ctx.font = '50px serif';
            // ctx.fillText('Hello world', 50, 90);

            const x = img.width / 4;
            const y = img.height / 4;

            context.drawImage(img, 0, 0);

            context.font = "bold 100px verdana, sans-serif";

            context.fillStyle = this.colorValue;

            context.fillText(txt, x, y);
            const src = context.canvas.toDataURL();

            const imageUrl = src;
            var a = document.createElement("a"); //Create <a>
            a.href = imageUrl;
            a.download = "Image.png"; //File name Here
            a.click(); //Downloaded file
          });
          img.src = imageSrc;
        }
      }
    },
    onTest() {
      console.warn("test");
      console.warn(this.color);

      var a = this.groupements
        .map((groupement) => groupement.groupes)

        .reduce(function (pre, cur) {
          return pre.concat(cur);
        })
        .filter((groupe) => groupe.isSelected)
        .map((groupe) => groupe.src);

      var imageSrc =
        "http://localhost:5000/images/Textures/txt_Couleur_Threed-Bleu_XXX.png";
      if (a[0]) {
        imageSrc = a[0];
      }

      // debugger;

      const canvas = this.$refs.myCanvas;

      if (canvas) {
        const context = canvas.getContext("2d");
        if (context) {
          const txt = this.gravaure || "";

          // context.canvas.width = context.measureText(txt).width;
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.addEventListener("load", (d) => {
            // debugger;

            context.canvas.width = img.width;
            context.canvas.height = img.height;
            // ctx.drawImage(img,0,0);
            // ctx.font = '50px serif';
            // ctx.fillText('Hello world', 50, 90);

            const x = img.width / 4;
            const y = img.height / 4;

            context.drawImage(img, 0, 0);

            context.font = "bold 100px verdana, sans-serif";

            context.fillStyle = this.colorValue;

            context.fillText(txt, x, y);
            const src = context.canvas.toDataURL();
            // console.log(src);

            // debugger;

            // const imageUrl = "https://portail.threed.fr/images/Textures/txt_Couleur_Threed-Bleu_40.png";
            // const imageUrl = test.data;
            const imageUrl = src;
            const uid = "a07b12d26ccd40569f83eaf4b6702ca7";
            // const uid = test.uid;
            const item = {
              options: [
                {
                  // imageUrl: imageUrl,
                  // uid: uid,
                  "txt.Couleur": imageUrl,
                },
              ],
            };
            this.$emit("onClick", item);
          });
          img.src = imageSrc;
        }
      }
    },
  },
};
