const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  const drinks = [
    { name: 'Bloody Mary', drunkness: 3 },
    { name: 'Martini', drunkness: 5 },
    { name: 'Scotch', drunkness: 10 },
  ];
  const tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

  res.render('views/index', {
    drinks,
    tagline,
  });
});

// routes.get('/about', (req, res) => {
//   res.render('pages/about');
// });

module.exports = routes;
