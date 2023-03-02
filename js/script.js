console.log("Cześć tą stronę przygotował Kacper Lewko. Działam teraz na gitubie");

let przycisk = document.querySelector(".przycisk");

przycisk.addEventListener("click", () => {
    photo = document.querySelector(".photo")
    photo.remove();
});

