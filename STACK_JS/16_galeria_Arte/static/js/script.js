const galleryImg = document.getElementById("gallery-img");
const galleryCaption = document.getElementById("gallery-caption");

const originalImageSrc = "static/images/campo-de-trigo-con-cipreses.png";
const hoverImageSrc = "static/images/noche-estrellada-sobre-el-ródano.png";

const originalCaption = "Campo de trigo con cipreses, Vincent van Gogh (1889)";
const hoverCaption = "Noche estrellada sobre el Rodano, Vincent van Gogh (1888)";

galleryImg.addEventListener("mouseover", () => {
  galleryImg.src = hoverImageSrc;
  galleryCaption.textContent = hoverCaption;
});

galleryImg.addEventListener("mouseout", () => {
  galleryImg.src = originalImageSrc;
  galleryCaption.textContent = originalCaption;
});