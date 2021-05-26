import getPhotos from './apiService';

import galleryListTPL from '../templates/image-list.hbs';

const galleryList = document.querySelector('body');

console.log(getPhotos('red rose'));

const foo = async () => {
  try {
    await getPhotos('red rose').then(result =>
      galleryList.insertAdjacentHTML('beforeend', galleryListTPL(result.hits)),
    );
  } catch {
    err => console.log(err);
  }
};

foo();
