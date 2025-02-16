document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("load-image-btn");
    let img = document.getElementById("myImage");

    button.addEventListener("click", function() {
        let confirmation = confirm("Voulez-vous charger l'image ?");
        if (confirmation) {
            img.src = "corbak.png";  // Chemin de l'image
            img.style.display = "block"; // Afficher l'image
            button.style.display = "none"; // Cacher le bouton
        }
    });
});
