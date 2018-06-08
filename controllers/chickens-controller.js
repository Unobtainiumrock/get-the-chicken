
const express = require('express');
const chicken = require('../models/chicken');

// Set up router
const router = express.Router();

//  Routes
router.get('/', async (req, res) => {
  let allChickens;

  try {
    allChickens = await chicken.selectAll();
    res.status(200).send(allChickens.json);
  } catch (err) {
    console.error(err);
    res.status(404).end();
  }

});
