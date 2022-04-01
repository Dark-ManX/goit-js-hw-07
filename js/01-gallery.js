import { galleryItems } from './gallery-items.js';

 // Change code below this line
const galleryRef = document.querySelector('.gallery');

// ------------Создать галлерею------------
function previewGallery(galleryRef) {
    return galleryItems.map(galleryItem => {
        galleryRef.insertAdjacentHTML('beforeend', `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`);
    });
}
console.log(previewGallery(galleryRef));
// ------------Повешать слушателя событий----------
galleryRef.addEventListener('click', onGalleryImgClick);

// ------------Открытие модалки по клику--------------- 
function onGalleryImgClick(evt) {
    
    const image = evt.target;
    
    if (image.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${image.href}">
`)

instance.show()
    }

console.log(galleryItems)
