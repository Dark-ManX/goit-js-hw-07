import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

// ------------Создать галлерею------------

function createGalleryCard(galleryRef) {
    return galleryItems.map(galleryItem => {
        galleryRef.insertAdjacentHTML('beforeend', `<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
</a>`);
    });
}
console.log(createGalleryCard(galleryRef));

// -----Повесить слушателя coбытия клика по картинке-----------

galleryRef.addEventListener('click', onGalleryImgClick);

//---------------Oбработчик события------------------- 

function onGalleryImgClick(evt) {
    evt.preventDefault();

    const { dataset } = evt.target;

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    
    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox');
};

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
