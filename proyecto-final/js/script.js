script.js
const image = document.querySelectorAll('.img');
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy');

images.forEach(image =>{
    image.addEventListener('click', ()=>{       
        addImage(image.getAttribute('src'),image.getAttribute('alt'))
    })
})

const addImage = (srcImage, altImage)=>{
    containerImage.classList.toggle('move');
    imageContainer.src = srcImage;
    copy.innerHTML =altImage;
}

containerImage.addEventListener('click', ()=>{
    containerImage.classList.toggle('move');
})    



// const carrusel = document.querySelector(".carrusel-items");

// let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
// let intervalo = null;
// let step = 1;
// const start = () => {
//   intervalo = setInterval(function () {
//     carrusel.scrollLeft = carrusel.scrollLeft + step;
//     if (carrusel.scrollLeft === maxScrollLeft) {
//       step = step * -1;
//     } else if (carrusel.scrollLeft === 0) {
//       step = step * -1;
//     }
//   }, 10);
// };

// const stop = () => {
//   clearInterval(intervalo);
// };

// carrusel.addEventListener("mouseover", () => {
//   stop();
// });

// carrusel.addEventListener("mouseout", () => {
//   start();
// });

// start();