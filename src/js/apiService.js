const API_KEY = '21769290-e5df4cf4bec88d52ade7ba6e7';
const URL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=';

function getPhotos(userData) {
  try {
    const result = fetch(URL + encodeURIComponent(userData));
    return result;
  } catch (errorResponse) {
    console.log({ errorResponse });
  }
}

export default getPhotos;
