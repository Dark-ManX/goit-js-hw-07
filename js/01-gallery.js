import { galleryItems } from './gallery-items.js';

 // Change code below this line

const galleryRef = document.querySelector('.gallery');

// ------------Создать галлерею------------

function createGallery(galleryRef) {
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
console.log(createGallery(galleryRef));

// -----Повесить слушателя coбытия клика по картинке-----------

galleryRef.addEventListener('click', onGalleryImgClick);

//---------------Oбработчик события------------------- 

function onGalleryImgClick(evt) {
  evt.preventDefault();

  const { dataset } = evt.target;

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${dataset.source}">
  `)

  instance.show();
}

// ------------Повесить слушателя события ESCAPE----------
 
document.addEventListener('keyup', onEscapePress);

// ------------Функция при нажатии на ESCAPE--------------

function onEscapePress(evt) {
    
  const basicLightboxRef = document.querySelector('div.basicLightbox');
  
  if (evt.code === 'Escape' && basicLightboxRef) {
    return basicLightboxRef.remove();
  }
  return null;
}

console.log(galleryItems);



