// Données des programmes avec galeries d'images
const programDetails = {
  familles: {
    category: "Programme Social",
    title: "Assistance aux Familles Vulnérables",
    subtitle: "Accompagnement, vivres et soutien d'urgence pour les ménages en situation précaire.",
    gallery: [
      { img: "famille-distribution-1.jpg", caption: "Distribution de vivres aux familles à Lomé" },
      { img: "famille-visite-2.jpg", caption: "Visites à domicile et assistance sociale" },
      { img: "famille-soins-3.jpg", caption: "Prise en charge d'urgence médicale" }
    ],
    realizations: `
      <p>Afin de lutter contre la précarité extrême, <strong>SolidHand International</strong> intervient directement auprès des ménages démunis :</p>
      <ul>
        <li><strong>Distributions de vivres :</strong> Remises régulières de denrées alimentaires de première nécessité.</li>
        <li><strong>Prise en charge médicale :</strong> Aide financière pour les soins de santé d'urgence.</li>
      </ul>
    `,
    waMsg: "Bonjour,%20je%20souhaite%20faire%20une%20demande%20d'aide%20familiale%20auprès%20de%20SolidHand."
  },

  orphelins: {
    category: "Soutien Ciblé",
    title: "Soutien aux Orphelins & Veuves",
    subtitle: "Redonner l'espoir et offrir un avenir digne aux personnes sans soutien familial.",
    gallery: [
      { img: "orphelins-kits-1.jpg", caption: "Remise de fournitures scolaires aux orphelins" },
      { img: "veuves-commerce-2.jpg", caption: "Accompagnement de veuves vers le commerce local" },
      { img: "fete-enfants-3.jpg", caption: "Distribution de cadeaux lors des fêtes solidaires" }
    ],
    realizations: `
      <p>Les orphelins et les veuves constituent l'un des piliers prioritaires de notre action :</p>
      <ul>
        <li><strong>Bourses et scolarisation :</strong> Prise en charge des écolages et fournitures.</li>
        <li><strong>Autonomisation :</strong> Soutien aux micro-projets commerciaux pour les veuves.</li>
      </ul>
    `,
    waMsg: "Bonjour,%20je%20souhaite%20soumettre%20un%20dossier%20de%20demande%20d'aide%20(Orphelins/Veuves)."
  },

  education: {
    category: "Savoir & Avenir",
    title: "Éducation & Solidarité",
    subtitle: "Garantir un accès à l'éducation de qualité pour tous les enfants.",
    gallery: [
      { img: "rentree-sacs-1.jpg", caption: "Campagne Rentrée Solidaire - Distribution de sacs" },
      { img: "ecole-don-2.jpg", caption: "Don de matériel didactique aux écoles partenaires" }
    ],
    realizations: `
      <p>L'éducation est la clé pour briser le cycle de la pauvreté :</p>
      <ul>
        <li><strong>Projet Rentrée Solidaire :</strong> Kits scolaires complets (cahiers, sacs, stylos).</li>
        <li><strong>Lutte contre le décrochage :</strong> Sensibilisation au maintien des enfants à l'école.</li>
      </ul>
    `,
    waMsg: "Bonjour,%20je%20souhaite%20demander%20une%20aide%20scolaire%20pour%20mes%20enfants."
  }
};

// Fonction pour ouvrir la modale et générer dynamiquement la galerie
function openProgram(programKey) {
  const data = programDetails[programKey];
  if (!data) return;

  // Injection des informations texte
  document.getElementById('modalCategory').textContent = data.category;
  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalSubtitle').textContent = data.subtitle;
  document.getElementById('modalRealizations').innerHTML = data.realizations;

  // Génération dynamique de la galerie
  const galleryContainer = document.getElementById('modalGallery');
  galleryContainer.innerHTML = ''; // Réinitialise la galerie précédente

  data.gallery.forEach(item => {
    const photoCard = document.createElement('div');
    photoCard.classList.add('gallery-item');

    photoCard.innerHTML = `
      <img src="${item.img}" alt="${item.caption}">
      <p class="caption">${item.caption}</p>
    `;

    galleryContainer.appendChild(photoCard);
  });

  // Numéro WhatsApp du client SolidHand International
  const phone = "14016625655";
  document.getElementById('modalWaBtn').href = `https://wa.me/${phone}?text=${data.waMsg}`;

  // Afficher la fenêtre modale
  document.getElementById('programModal').style.display = 'flex';
}

// Fonction pour fermer la modale
function closeModal() {
  document.getElementById('programModal').style.display = 'none';
}

// Fermer la modale si l'utilisateur clique en dehors de la fenêtre
window.onclick = function(event) {
  const modal = document.getElementById('programModal');
  if (event.target === modal) {
    closeModal();
  }
};