const useLocalhost =
  window.location.href.includes("localhost") ||
  window.location.href.includes("127.0.0.1");

const baseUrl = useLocalhost
  ? "http://localhost:8082/"
  : "https://app.threed.fr/";
console.debug("base url : " + baseUrl);


const projet1 = baseUrl + "Configurateur/1c3e62d0-ac8f-4c2a-a2a0-22d7fca2b6a1";
const projet2 = baseUrl + "Configurateur/010a2aad-c83a-42ed-accb-22d84471d14a";

const projets = [
  {
    nom: "Tee-shirt",
    baseUrl: projet1,
    url: projet1 + "?txt.Couleur=bleu",
    actions: [
      {
        nom: "Couleur",
        choix: [
          {
            libelle: "bleu",
            action: "?txt.Couleur=bleu",
          },
          {
            libelle: "gris",
            action: "?txt.Couleur=gris",
          },
          {
            libelle: "Threed-Jaune",
            action: "?txt.Couleur=Threed-Jaune",
          },
        ],
      },
    ],
  },
  {
    nom: "Shoes",
    baseUrl: projet2,
    url: projet2 + "?txt.Chaussure=Blanc",
    groupes: [
      {
        nom: "Couleur",
        items: [
          {
            libelle: "Chaussure - Blanc",
            action: "?txt.Chaussure=Blanc",
          },
          {
            libelle: "Chaussure - Rouge",
            action: "?txt.Chaussure=Rouge",
          },
          {
            libelle: "Chaussure - Vert",
            action: "?txt.Chaussure=Vert",
          },
        ],
      },

      {
        nom: "Semelle",
        items: [
          {
            libelle: "Semelle - Blanc",
            action: "?txt.Semelle=Blanc",
          },
          {
            libelle: "Semelle - Rouge",
            action: "?txt.Semelle=Rouge",
          },
          {
            libelle: "Semelle - Vert",
            action: "?txt.Semelle=Vert",
          },
        ],
      },

      {
        nom: "Lacet",
        items: [
          {
            libelle: "Lacet - Blanc",
            action: "?txt.Lacet=Blanc",
          },
          {
            libelle: "Lacet - Rouge",
            action: "?txt.Lacet=Rouge",
          },
          {
            libelle: "Lacet - Vert",
            action: "?txt.Lacet=Vert",
          },
        ],
      },
    ],
  },
];

const projet = projets[0];

const produits = [
  {
    href: "./maillot-viralto-500-jr-noir-id-8643442.html",

    alt: "MAILLOT DE FOOTBALL MANCHES COURTES VIRALTO CLUB JR NOIR (noir)",

    src: "./static/k$5625b4e4bfb186d84e4be381924fe1f7",
    libelle: "noir",
    action: "?txt.Couleur=noir",
  },

  {
    href: "./maillot-de-football-viralto-jr-axton-rose-noir-id-8740039.html",

    alt: "MAILLOT DE FOOTBALL VIRALTO JR AXTON ROSE &amp; NOIR (bleu)",

    src: "./static/k$51c19ff52fd5bf0847b412e869c1a3d6",

    libelle: "bleu",
    action: "?txt.Couleur=bleu",
  },

 
  {
    libelle: "Threed-Jaune",
    action: "?txt.Couleur=Threed-Jaune",

    href: "./maillot-viralto-500-jr-jaune-id-8643438.html",

    alt: "MAILLOT DE FOOTBALL MANCHES COURTES VIRALTO CLUB JR JAUNE (Threed-Jaune)",

    src: "./static/k$da947f1fa2c9ebc9d203106213e64af5",
  },
  {
    libelle: "Threed-Bleu",
    action: "?txt.Couleur=Threed-Bleu",
    href: "./maillot-viralto-500-jr-marine-id-8643436.html",

    alt: "MAILLOT DE FOOTBALL MANCHES COURTES VIRALTO CLUB JR MARINE (Threed-Bleu)",

    src: "./static/k$e66783ee196313eb07da6f6ba2b60ff8",
  },
  {
    libelle: "Threed-Gris",
    action: "?txt.Couleur=Threed-Gris",

    href: "./maillot-viralto-500-jr-blanc-id-8643440.html",

    alt: "MAILLOT DE FOOTBALL MANCHES COURTES VIRALTO CLUB JR BLANC (Threed-Gris)",

    src: "./static/k$c5ae348654d7121aaf14982ed61bcfcd",

   
  },

      // {
      //   href: "./maillot-viralto-520-jr-violet-id-8643435.html",

      //   alt: "MAILLOT DE FOOTBALL MANCHES COURTES VIRALTO CLUB JR VIOLET",

      //   src: "./static/k$c29a8f9e7e1dd61793694beebe8d2149",
      // },

 
  //   {
  //     href: "./maillot-de-football-viralto-jr-letters-bleu-id-8740040.html",

  //     alt: "MAILLOT DE FOOTBALL VIRALTO JR LETTERS BLEU",

  //     src: "./static/k$2846b060f3cbd450c43ff9b33985b760",
  //   },
  //   {
  //     href: "./maillot-viralto-500-jr-rouge-id-8643441.html",

  //     alt: "MAILLOT DE FOOTBALL MANCHES COURTES VIRALTO CLUB JR ROUGE",

  //     src: "./static/k$10d98ca38a368951a4b3cf92149d2a45(1)",
  //   },
  //   {
  //     href: "./maillot-de-football-viralto-jr-axton-rouge-orange-bleu-id-8740042.html",

  //     alt: "MAILLOT DE FOOTBALL VIRALTO JR AXTON ROUGE ORANGE &amp; BLEU",

  //     src: "./static/k$ecc4af7081dcc3499911f7679f7fb3f4",
  //   },
  //   {
  //     href: "./maillot-viralto-500-jr-vert-id-8643439.html",

  //     alt: "MAILLOT DE FOOTBALL MANCHES COURTES VIRALTO CLUB JR VERT",

  //     src: "./static/k$7b2da96c6c064627230a6fba7096f2fe",
  //   },
  //   {
  //     href: "./maillot-de-football-viralto-jr-axton-bleu-turquoise-id-8740043.html",

  //     alt: "MAILLOT DE FOOTBALL VIRALTO JR AXTON BLEU &amp; TURQUOISE",

  //     src: "./static/k$1eab0f1c094774f23b76ba27d8b45d7e",
  //   },
  //   {
  //     href: "./maillot-de-football-manches-courtes-viralto-solo-mc-gris-fonce-raye-jaune-id-8666453.html",

  //     alt: "MAILLOT DE FOOTBALL MANCHES COURTES VIRALTO  SOLO MC GRIS FONCE RAYE JAUNE",

  //     src: "./static/k$6d55fa0320c292d2ec2752e0c1a8cd2d",
  //   },
  //   {
  //     href: "./maillot-viralto-500-jr-orange-id-8643437.html",

  //     alt: "MAILLOT DE FOOTBALL MANCHES COURTES VIRALTO CLUB JR ORANGE",

  //     src: "./static/k$9cf394029544c789b331a3cc613f47fa",
  //   },
 
  //   {
  //     href: "./maillot-viralto-500-jr-marine-id-8643436.html",

  //     alt: "MAILLOT DE FOOTBALL MANCHES COURTES VIRALTO CLUB JR MARINE",

  //     src: "./static/k$e66783ee196313eb07da6f6ba2b60ff8",
  //   },
 
];
