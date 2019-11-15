const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  const items = {
    a: [
      'item a0',
      'item a1',
      'item a2',
      'item a3',
      'item a4',
      'item a5',
      'item a6',
      'item a7',
      'item a8',
    ],
    b: [
      'item b0',
      'item b1',
      'item b2',
      'item b3',
      'item b4',
      'item b5',
      'item b6',
      'item b7',
      'item b8',
    ],
  };

  res.render('views/index', {
    items,
  });
});

routes.get('/home', (req, res) => {
  res.render('views/home');
});

module.exports = routes;
