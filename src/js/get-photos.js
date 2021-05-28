import { getPhotos } from './apiService';

import galleryListTPL from '../templates/image-list.hbs';

const galleryList = document.querySelector('.gallery-section');

export default function buildGalleryList(userData, pageNumber) {
  try {
    return getPhotos(userData, pageNumber).then(result => {
      galleryList.insertAdjacentHTML('beforeend', galleryListTPL(result.promiseData.hits));
      setTimeout(
        () =>
          galleryList.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
          }),
        0,
      );

      return result;
    });
  } catch {
    err => console.log(err);
  }
}
