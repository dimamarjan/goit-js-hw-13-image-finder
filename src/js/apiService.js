const API_KEY = '21769290-e5df4cf4bec88d52ade7ba6e7';
const URL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=';

async function getPhotos(userData) {
  const result = await fetch(URL + encodeURIComponent(userData));
  const dataResponse = await result.json();
  return dataResponse;
}

export default getPhotos;
