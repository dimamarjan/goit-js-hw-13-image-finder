import buildGallery from './get-photos';
import loadMoreImagesTPL from '../templates/load-more.hbs';
import debounce from 'lodash.debounce';
import loadMoreImages from './load-more-images';
import alertMessage from './alert-message';
import openImageCard from './get-image-card';

const inputField = document.querySelector('input.input-section');
const galleryList = document.querySelector('.gallery-section');
const loadSection = document.querySelector('.load-section');

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
      buildGallery(texFromInput)
        .then(result => {
          if (result.promiseLength === 0) {
            alertMessage();
            return;
          }
          if (result.promiseLength === 12) {
            loadSection.insertAdjacentHTML('beforeend', loadMoreImagesTPL());
            openImageCard();
            loadMoreImages();
          }
        })
        .catch(err => console.log(err));
    }
  }, 1000),
);
