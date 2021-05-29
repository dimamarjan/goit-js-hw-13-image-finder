import getPhotos from './get-photos';
import debounce from 'lodash.debounce';
import loadMoreImages from './load-more-images';
import alertMessage from './alert-message';
import getImageCard from './get-image-card';

import loadMoreImagesTPL from '../templates/load-more.hbs';

const inputField = document.querySelector('input.input-section');
const galleryList = document.querySelector('.gallery-section');
const loadSection = document.querySelector('.load-section');
const bodySection = document.querySelector('body');

const clearSections = () => {
  galleryList.innerHTML = '';
  loadSection.innerHTML = '';
};

inputField.addEventListener(
  'input',
  debounce(() => {
    const texFromInput = inputField.value;
    if (texFromInput.length === 0) {
      clearSections();
      return;
    }
    if (texFromInput.length > 0) {
      clearSections();
      getPhotos(texFromInput)
        .then(result => {
          if (result.promiseLength === 0) {
            alertMessage();
            return;
          }
          if (result.promiseLength === 12) {
            loadSection.insertAdjacentHTML('beforeend', loadMoreImagesTPL());
            loadMoreImages();
          }
        })
        .catch(err => console.log(err));
    }
  }, 1000),
);

bodySection.addEventListener('click', eve => {
  if (eve.path[2].className === 'gallery-item') {
    getImageCard(eve.target.id);
  }
  if (eve.target.classList.value === 'basicLightbox') {
    bodySection.classList.toggle('modal-open');
  }
});
