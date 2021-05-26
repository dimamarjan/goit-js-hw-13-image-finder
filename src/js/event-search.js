import buildeGallery from './get-photos';
import debounce from 'lodash.debounce';

const inputField = document.querySelector('input.input-section');

inputField.addEventListener(
  'input',
  debounce(event => {
    const texFromInput = inputField.value;
    if (texFromInput.length > 0) {
      buildeGallery(texFromInput);
    }
  }, 1000),
);

// buildeGallery('yelow');
