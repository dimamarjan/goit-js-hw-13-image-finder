import * as basicLightbox from 'basiclightbox';

import { getLargePhoto } from './apiService';

import imageCardTPL from '../templates/image-card.hbs';

export default function openImageCard() {
  const galleryItem = document.querySelectorAll('.gallery-item');
  galleryItem.forEach(element => {
    element.addEventListener('click', eve => {
      getLargePhoto(eve.target.id).then(response => {
        console.log(response.hits[0]);
        basicLightbox.create(imageCardTPL(response.hits[0])).show();
      });
    });
  });
}
