const API_KEY = '21769290-e5df4cf4bec88d52ade7ba6e7';

export default async function getPhotos(userData, pageNumber = 1) {
  const result = await fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${encodeURIComponent(
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
