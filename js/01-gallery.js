import { galleryItems } from './gallery-items.js';

 // Change code below this line
const galleryRef = document.querySelector('.gallery');

// ------------Создать галлерею------------
function previewGallery(galleryRef) {
    return galleryItems.map(galleryItem => {
        galleryRef.insertAdjacentHTML('beforeend', `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}" data-lightbox="img">
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
// console.log(previewGallery(galleryRef));

// ------------Повесить слушателя события ESCAPE----------
const lightboxOverlayRef = document.querySelector('#lightboxOverlay');

lightboxOverlayRef.addEventListener('keyup', onEscapeBtnClick);

// ------------Функция при нажатии на ESCAPE--------------
function onEscapeBtnClick(evt) {
    
    const image = evt.target;
    
    if (image.code !== 'Escape') {
        return;
    }

  lightboxOverlayRef.style.display = 'none';
    }

// console.log(galleryItems)
