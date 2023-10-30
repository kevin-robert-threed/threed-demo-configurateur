const url = baseUrl + "Configurateur/4df521cc-7157-49bc-9fe2-205b73d33e55";

const integration = {
  baseUrl: url,
  url: url + "?txt.Couleur=bleu",
  groupements: [
    {
      libelle: "Tissu",
      groupes: [
        {
          href: "tissu_tissu",
          src: "https://portail.threed.fr/images/Textures/txt_tissu_tissu_tresse_50.jpg",
        },
        {
          href: "tissu_tissugris",
          src: "https://portail.threed.fr/images/Textures/txt_tissu_tissugris_50.jpg",
        },

        {
          href: "tissu_tissujean",
          src: "https://portail.threed.fr/images/Textures/txt_tissu_tissujean_50.jpg",
        },
      ],
    },
    {
      libelle: "Bois",
      groupes: [
        {
          href: "bois_boisbleu",
          src: "https://portail.threed.fr/images/Textures/txt_bois_boisbleu_50.jpg",
        },
        {
          href: "bois_boischene",
          src: "https://portail.threed.fr/images/Textures/txt_bois_boischene_50.jpg",
        },
        {
          href: "bois_boisnoyer",
          src: "https://portail.threed.fr/images/Textures/txt_bois_boisnoyer_50.jpg",
        },
      ],
    },
  ],
};
