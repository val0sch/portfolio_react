import hackaton from "../../assets/hackaton1.png";
import mixDrink from "../../assets/mix&drink.png";
import brasserie from "../../assets/brasserie.png";
import hackathon2 from "../../assets/hackathon2.png";
import giveday from "../../assets/giveday.png";
import TMS1 from "../../assets/TMS1.png";
import TMS2 from "../../assets/TMS2.png";
import TMS3 from "../../assets/TMS3.png";
import TMS4 from "../../assets/TMS4.png";
import TMS5 from "../../assets/TMS5.png";
import TMS6 from "../../assets/TMS6.png";
import TMS7 from "../../assets/TMS7.png";
import TMS8 from "../../assets/TMS8.png";
import GDE1 from "../../assets/GDE1.png";
import GDE2 from "../../assets/GDE2.png";
import GDE3 from "../../assets/GDE3.png";
import GDE4 from "../../assets/GDE4.png";
import GDE5 from "../../assets/GDE5.png";
import GDE6 from "../../assets/GDE6.png";
import GDE7 from "../../assets/GDE7.png";
import GDE8 from "../../assets/GDE8.png";
import GDE9 from "../../assets/GDE9.png";
import GDE10 from "../../assets/GDE10.png";
import GDE11 from "../../assets/GDE11.png";
import GDE13 from "../../assets/GDE13.png";
import GDE14 from "../../assets/GDE14.png";
import GDE15 from "../../assets/GDE15.png";
import GDE16 from "../../assets/GDE16.png";
import GDE17 from "../../assets/GDE17.png";
import GDE18 from "../../assets/GDE18.png";
import GDE19 from "../../assets/GDE19.png";
import wildrentchatdesktop from "../../assets/wildrentchatdesktop.png";
import wildrentmobilechat from "../../assets/wildrentmobilechat.png";
import wildrent1 from "../../assets/wildrent1.png";
import wildrent2 from "../../assets/wildrent2.png";
import wildrent3 from "../../assets/wildrent3.png";
import wildrent4 from "../../assets/wildrent4.png";
import wildrent5 from "../../assets/wildrent5.png";
import wildrent6 from "../../assets/wildrent6.png";
import playground from "../../assets/playground.png";

export const SliderData = [
  {
    imagesLandscape: [playground],
    title: "Playground",
    subtitle: "Projet perso",
    description: "Zone de mini projets",
    url: "https://playground-valerie.up.railway.app",
    repo: null,
  },
  {
    imagesLandscape: [
      GDE1,
      GDE3,
      GDE5,
      GDE9,
      GDE14,
      GDE15,
      GDE16,
      GDE18,
      GDE19,
    ],
    imagesPortrait: [GDE2, GDE4, GDE6, GDE7, GDE8, GDE10, GDE11, GDE13, GDE17],
    title: "Gestion des émotions",
    subtitle: "Entreprise Tricky",
    description:
      "Jeu multi-tablettes + 1 écran de TV inclu dans une formation prévention santé sur la gestion des émotions. Spécifications Techniques : Vite+React, Typescript, gestion d'un store avec Redux, interactions fluides et instantannée entre les appareils grace aux web socket, animations avec Framer Motion.",
    url: null,
    repo: null,
  },
  {
    imagesLandscape: [TMS1, TMS5, TMS8],
    imagesPortrait: [TMS2, TMS3, TMS4, TMS6, TMS7],
    title: "TMS",
    subtitle: "Troubles musculo-squelettiques - Entreprise Tricky",
    description:
      "Jeu multi-tablettes + 1 écran de TV inclu dans une formation prévention santé sur les troubles Musculo-squelettiques. Spécifications Techniques : Vite+React, Typescript, gestion d'un store avec Redux, interactions fluides et instantannée entre les appareils grace aux web socket, animations avec Framer Motion.",
    url: null,
    repo: null,
  },

  {
    imagesLandscape: [
      wildrent1,
      wildrent2,
      wildrent3,
      wildrent4,
      wildrent5,

      wildrentchatdesktop,
    ],
    imagesPortrait: [wildrentmobilechat, wildrent6],
    title: "WildRent",
    subtitle: "Wild Code School",
    description:
      "Projet de formation. Objectif MVP site de location de matériel sportif. Maquettage de l'application, création d'une application web et d'une application mobile. Conteneurisation avec Docker, mise en place d'un VPS, reverse-proxy et certificat TLS avec Caddy, intégration continue et déploiement continu avec Github Actions et webhooks, tests. Spécifications techniques: Vite+React, Typescript, Express, React Native, Docker, GraphQL, Suite Apollo.",
    url: null,
    repo: "https://github.com/val0sch/WildRent-desktop",
    repo2: "https://github.com/val0sch/WildRent-mobile",
  },
  {
    imagesLandscape: null,
    title: "Secret Cellar",
    subtitle: "Wild Code School",
    description:
      "Application web de gestion de cave personnelle. Spécifications techniques: PHP, Symfony, Bootstrap, Twig.",
    url: null,
    repo: "https://github.com/val0sch/secret_cellar_symfony",
  },
  {
    imagesLandscape: [giveday],
    title: "Giveday",
    subtitle: "Projet client - Wild Code School",
    description:
      "Prototypage d’une application web ayant pour but d’optimiser l’organisation d’évènements pour enfants. Atelier en ligne de création de carte d’anniversaire et accès à une cagnotte pour les invités. Création d'un blog géré côté administrateur.",
    url: "https://giveday.fr",
    repo: "https://github.com/WildCodeSchool/2022-03-JS-RemoteFR-Outsiders-P3-GiveDay/tree/dev",
  },
  {
    imagesLandscape: [hackathon2],
    title: "Hackathon Apside",
    subtitle: "Hackathon #2 - Wild Code School",
    description:
      "Proposition d'outils de partage de projets - Frontend et Backend",
    url: null,
    repo: "https://github.com/val0sch/Hackathon2-Apside/tree/dev",
  },
  {
    imagesLandscape: [mixDrink],
    title: "Mix and Drink",
    subtitle: "Projet 2 - Wild Code School",
    description:
      "API cocktailDB et librairie REACT - barre de recherche, bouton Random et lien vers les cocktails populaires",
    url: null,
    repo: "https://github.com/val0sch/MixAndDrink_Projet2",
  },
  {
    imagesLandscape: [hackaton],
    title: "Hackathon Ecologie",
    subtitle: "Hackathon #1 - Wild Code School",
    description:
      "Site sur le thème de l'économie circulaire - Consommer une API avec REACT",
    url: null,
    repo: "https://github.com/val0sch/hackaton1/tree/dev",
  },

  {
    imagesLandscape: [brasserie],
    title: "Brasserie Outsiders",
    subtitle: "Wild Code School",
    description:
      "Premier projet de formation. Site vitrine d'un restaurant fictif en HTML et CSS. J'ai réalisé la page \"Notre équipe\"",
    url: "https://outsiders-restaurant.netlify.app/",
    repo: "https://github.com/val0sch/projetOutsidersBrasserie",
  },
];
