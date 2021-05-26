import buildeGallery from './get-photos';
import debounce from 'lodash.debounce';

const inputField = document.querySelector('input.input-section');

inputField.addEventListener(
  'input',
  debounce(() => {
    const texFromInput = inputField.value;
    console.log(texFromInput.length);
    if (texFromInput.length === 0) {
      document.querySelector('.gallery-section').remove();
    }

    if (texFromInput.length > 0) {
      if (document.querySelector('.gallery-section')) {
        console.log('true');
      }

      buildeGallery(texFromInput);
    }
  }, 1000),
);

// buildeGallery('yelow');
