import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const galleryItemsMarkup = makeGalleryItemsMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryItemsMarkup);

const modal = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function makeGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item"
      href="${original}">
      <img class="gallery__image"
      src="${preview}"
      alt="${description}" />
      </a> `;
    })
    .join('');
}
