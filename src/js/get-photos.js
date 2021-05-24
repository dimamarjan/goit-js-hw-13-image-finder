import getPhotos from './apiService';

const foo = async () => {
  const promise = await getPhotos('red roses');
  const result = await promise.json();
  console.log(result);
};

foo();
