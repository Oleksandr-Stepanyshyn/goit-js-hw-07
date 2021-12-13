import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryList: document.querySelector(".gallery"),
};

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

function onItemGalleryClick(e) {
    e.preventDefault();
    if (e.target.nodeName != "IMG") {
        return
    }

    document.addEventListener('keydown', onKeyboardPush);

    function onKeyboardPush(e) {
    if (e.code === "Escape") {
        modal.close();
        document.removeEventListener('keydown', onKeyboardPush);
    }
    };
    
    const modal = basicLightbox.create(`<img src="${e.target.dataset.source}">`);
    modal.show();
}

refs.galleryList.addEventListener('click', onItemGalleryClick);


