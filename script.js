// Liste des citations et leurs auteurs
const banqueCitations = [
  {
    citation:
      "La vie, c’est comme une boîte de chocolats : on ne sait jamais sur quoi on va tomber.",
    auteur: "Forrest Gump",
  },
  {
    citation: "Le bonheur est parfois caché dans l’inconnu.",
    auteur: "Victor Hugo",
  },
  {
    citation: "Rien n’est permanent, sauf le changement.",
    auteur: "Héraclite",
  },
  {
    citation: "La simplicité est la sophistication suprême.",
    auteur: "Léonard de Vinci",
  },
  {
    citation:
      "Toutes nos rêves peuvent devenir réalité si nous avons le courage de les poursuivre.",
    auteur: "Walt Disney",
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
