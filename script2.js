const monitorizare = document.getElementById("monitorizare");
const imaginiStatice = document.getElementById("imaginiStatice");
const slideshow = document.getElementById("slideshow");
const slideImg = document.getElementById("slideImg");

const imagini = ["poza2.jpg", "poza3.jpg", "poza4.jpg" , "poza5.jpg" , "poza6.jpg"];
let index = 0;
let interval;


monitorizare.ondblclick = function () {
    imaginiStatice.classList.add("hidden");
    slideshow.classList.remove("hidden");

    interval = setInterval(() => {
        index = (index + 1) % imagini.length;
        slideImg.src = imagini[index];
    }, 3000);
};



let poz = 0;
const slideCar = document.querySelectorAll(".car-slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function updateSlides(step) {
    poz += step;
    if (poz < 0) poz = slideCar.length - 1;
    if (poz >= slideCar.length) poz = 0;

    slideCar.forEach((img, i) => {
        img.style.display = (i === poz) ? "block" : "none";
    });
}

next.onclick = () => updateSlides(1);
prev.onclick = () => updateSlides(-1);


updateSlides(0);