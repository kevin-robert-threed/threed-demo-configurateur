const url = baseUrl + "Configurateur/1c3e62d0-ac8f-4c2a-a2a0-22d7fca2b6a1";

const integration = {
  nom: "Tee-shirt",
  baseUrl: url,
  url: url + "?txt.Couleur=Threed-Gris",
  produit: "MAILLOT DE FOOTBALL VIRALTO JR AXTON    ",
  groupements: [
    {
      libelle: "Couleur",
      groupes: [
        {
          libelle: "bleu",
          options: [{ "txt.Couleur": "bleu" }],
          src: "https://portail.threed.fr/images/Textures/txt_Couleur_Threed-Bleu_40.png",
        },
        {
          libelle: "noir",
          options: [{ "txt.Couleur": "noir" }],
          src: "https://portail.threed.fr/images/Textures/txt_Couleur_noir_50.jpg",
        },
        {
          libelle: "Threed-Jaune",
          options: [{ "txt.Couleur": "Threed-Jaune" }],
          src: "https://portail.threed.fr/images/Textures/txt_Couleur_Threed-Jaune_40.png",
        },
        {
          libelle: "Threed-Bleu",
          options: [{ "txt.Couleur": "Threed-Bleu" }],
          src: "https://portail.threed.fr/images/Textures/txt_Couleur_Threed-Bleu_40.png",
        },
        {
          libelle: "Threed-Gris",
          options: [{ "txt.Couleur": "Threed-Gris" }],
          src: "https://portail.threed.fr/images/Textures/txt_Couleur_Threed-Gris_40.png",
          isSelected: true,
        },
      ],
    },
  ],
};
