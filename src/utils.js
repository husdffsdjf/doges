function getBreedFromUrl(url) {
  return url.split(/((.*?breeds\/(.*?))(\/.*$))/)[3].split('-');
}

function getDataFromUrl(url) {
  const [ breed, subBreed] = getBreedFromUrl(url);
  return {
    breed: breed || null,
    subBreed: subBreed || null,
    url: url,
  }
}

export { getDataFromUrl };
