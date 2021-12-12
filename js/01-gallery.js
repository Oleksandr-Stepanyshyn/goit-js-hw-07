import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const refs = {
    galleryList: document.querySelector(".gallery")
};
console.log(refs.galleryList);

const galleryMarkup = createGalleryMarkup(galleryItems);
refs.galleryList.innerHTML = galleryMarkup;

function createGalleryMarkup(gallery) {
    return gallery.map(({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`
}).join("");
};

console.log(galleryMarkup);