import getPhotos from './apiService';

import galleryListTPL from '../templates/image-list.hbs';

const galleryList = document.querySelector('body');

const buildGalleryList = userData => {
  try {
    console.log(userData); /// must del
    getPhotos(userData).then(result =>
      galleryList.insertAdjacentHTML('beforeend', galleryListTPL(result.hits)),
    );
  } catch {
    err => console.log(err);
  }
};

export default buildGalleryList;
