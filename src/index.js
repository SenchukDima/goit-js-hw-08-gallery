import galleryItems from './gallery-items.js';


const galleryList = document.querySelector('ul.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const btn = document.querySelector('[data-action="close-lightbox"]')
  
const createImage = (item, parent) => {
    const { preview, original, description } = item;
    const img = document.createElement('img');
    
    img.classList.add('gallery__image');
    img.dataset.source = original;
    img.src = preview;
    img.alt = description;
    
    parent.appendChild(img);
  };

  const createLink = (item, parent) => {
    const { original } = item;
    const a = document.createElement('a');

    a.classList.add('gallery__link');
    a.href = original;

    
    createImage(item, a);
    
    parent.appendChild(a);
  };

  const createI = (parent) => {
    const i = document.createElement('i');
    parent.appendChild(i);
    };

  const createDiv = (parent) => {
    const div = document.createElement('div');
    div.classList.add('gallery__icon');
    parent.appendChild(div);

    createI(div);

    };
  
  const createItem = (item) => {
    const li = document.createElement('li');
    li.classList.add('gallery__item');
    
    createLink(item, li);

    createDiv(li);
    
    return li;
  };
  
  const renderListItems = (array) => {
    const items = array.map( (item) => createItem(item));

    galleryList.append(...items);
  };
  
  renderListItems(galleryItems);
  
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


