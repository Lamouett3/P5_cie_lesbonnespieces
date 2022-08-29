// Récupération des pièces depuis le fichier JSON //
    const reponse = await fetch("pieces-autos.json");
    const pieces = await reponse.json();

// Création des éléments ett remplissage du texte ou de la source de l'image //
    const ampoule = pieces [0];

    const imageElement = document.createElement("img");
    imageElement.src = ampoule.image;

    const nomElement = document.createElement("h2");
    nomElement.innertext = ampoule.nom;

    const prixElement = document.createElement("p");
    prixElement.innertext = "Prix : " + ampoule.prix + "€";

    const categorieElement = document.createElement("p");
    categorieElement.innerText = ampoule.categorie;

    // Récupérartion de l'élément du DOM qui acceuillera les fiches //
    const sectionFichies = document.querySelector(".fiches");

    // Ajout des éléments créés dans le DOM //
    sectionFichies.appendChild(imageElement);
    sectionFichies.appendChild(nomElement);
    sectionFichies.appendChild(prixElement);
    sectionFichies.appendChild(categorieElement);
    