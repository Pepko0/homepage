console.log("Cześć tą stronę przygotował Kacper Lewko");

let przycisk = document.querySelector(".przycisk");

przycisk.addEventListener("click", () => {
    photo = document.querySelector(".photo")
    photo.remove();
});

