import galleryItems from './gallery-items.js';


const galleryList = document.querySelector('ul.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const btn = document.querySelector('[data-action="close-lightbox"]')
  
function buildGalleryItems(item) {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />

    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
</li>`
};

const buildGallery = function(parent, array) {
  const items = array.map( (item) => buildGalleryItems(item)).join('');
  parent.insertAdjacentHTML('beforeend', items)
};

buildGallery(galleryList, galleryItems);

  function onClickHandler(element) {
    element.preventDefault();
    
    if(element.target.nodeName === 'IMG') {
      lightbox.classList.add('is-open');
      lightbox.querySelector('.lightbox__image').src = element.target.dataset.source;
      lightbox.querySelector('.lightbox__image').alt = element.target.alt;
    }
  }
  
  function onCloseHandler(element) {
    if(element.target.nodeName === "I" || element.target.nodeName === "BUTTON") {
      lightbox.classList.remove('is-open');
      lightbox.querySelector('.lightbox__image').src = '';
      lightbox.querySelector('.lightbox__image').alt = '';
    }
  }
  
  galleryList.addEventListener('click', onClickHandler);
  btn.addEventListener('click', onCloseHandler);


