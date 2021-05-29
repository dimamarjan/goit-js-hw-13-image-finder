import * as basicLightbox from 'basiclightbox';

import { getLargePhoto } from './apiService';

import imageCardTPL from '../templates/image-card.hbs';

const bodySection = document.querySelector('body');

export default function openImageCard(targetDataId) {
  getLargePhoto(targetDataId).then(response => {
    basicLightbox.create(imageCardTPL(response.hits[0])).show();
    bodySection.classList.toggle('modal-open');
  });
}
