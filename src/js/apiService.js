const API_KEY = '21769290-e5df4cf4bec88d52ade7ba6e7';
const BASE_URL = 'https://pixabay.com/api/';

export async function getPhotos(userData, pageNumber = 1) {
  const result = await fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${encodeURIComponent(
      userData,
    )}&page=${pageNumber}&per_page=12&key=${API_KEY}`,
  );
  const dataResponse = await result.json();
  const arrResponse = new Object();

  arrResponse.promiseData = dataResponse;
  arrResponse.promiseUrl = result.url;
  arrResponse.promiseLength = dataResponse.hits.length;

  return arrResponse;
}

export async function getLargePhoto(imageId) {
  const resultID = await fetch(`${BASE_URL}?id=${imageId}&key=${API_KEY}`);
  const imageResponse = await resultID.json();
  return imageResponse;
}
