'use strict';

const url = 'https://api.kinocheck.de/movies';

fetch(url)
  .then(response, () => {
    console.log(response);
  })
  .then(data, () => {
    console.log(data);
  });
