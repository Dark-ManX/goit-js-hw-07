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
console.log(previewGallery(galleryRef));
// ------------Повешать слушателя события ESCAPE----------
const originalImgRef = document.querySelector('img.lb-image');

galleryRef.addEventListener('keyup', onEscapeBtnClick);

function onEscapeBtnClick(evt) {
    
    const image = evt.target;
    
    if (image.code !== 'Escape') {
        return;
    }

    }

console.log(galleryItems)
