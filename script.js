// Liste des citations et leurs auteurs
const banqueCitations = [
  {
    citation: "Tafadhali Khmadja",
    auteur: "khmjiste",
  },
  {
    citation: "On fait une réunions ?",
    auteur: "Kmja",
  },
  {
    citation: "Ta3rf ?",
    auteur: "Kmj-a",
  },
  {
    citation: "Deber rassek",
    auteur: "Kmja",
  },
  {
    citation: "I'm glad you ask Kmja",
    auteur: "Kmj",
  },
  {
    citation: "C'est des choses qu'elles arrivent",
    auteur: "Les Carcassonnais",
  },
  {
    citation: "Kmja, Toi, Moi, 17h ?",
    auteur: "Kmj",
  },
  {
    citation: "Fallait faire attention",
    auteur: "Kmjiste de droite",
  },
  {
    citation: "Tu m'en diras des petites nouvelles !",
    auteur: "Kmja aux fourneaux",
  },
  {
    citation: "C'est ça va...",
    auteur: "Les tunisiens",
  },
  {
    citation: "Cha 3meltou fihe",
    auteur: "Nadia El Mansour",
  },
  {
    citation: "Au contraire Kmj",
    auteur: "Kmja tête-dure",
  },
  {
    citation: "Tahbi je vais chasser ?",
    auteur: "Kmj Eats",
  },
  {
    citation: "This is fine",
    auteur: "Le poisson frit",
  },
  {
    citation: "No !",
    auteur: "Le poisson prof",
  },

  // Ajoute ici tes citations préférées
];

// Sélectionne le bouton et le conteneur de citation
const boutonAfficher = document.getElementById("bouton-afficher");
const conteneurCitation = document.getElementById("citation");
const conteneurAuteur = document.getElementById("auteur");

// Fonction pour afficher une citation aléatoire
function afficherCitationAleatoire() {
  const indexAleatoire = Math.floor(Math.random() * banqueCitations.length);
  const { citation, auteur } = banqueCitations[indexAleatoire];

  conteneurCitation.textContent = `"${citation}"`;
  conteneurAuteur.textContent = `— ${auteur}`;
}

// Écoute le clic sur le bouton
boutonAfficher.addEventListener("click", afficherCitationAleatoire);
