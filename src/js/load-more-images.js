import buildGallery from './get-photos';

let countPagination = 1;

export default function loadMoreImages() {
  const loadContainer = document.querySelector('.load-container');
  loadContainer.addEventListener('click', () => {
    const inputSection = document.querySelector('.input-section');
    countPagination += 1;
    buildGallery(inputSection.value, countPagination);
  });
}