const express = require('express');
const router = express.Router();
const newslettersModel = require('../models/newslattersModel');

router.get('/', async (req, res) => {
  try {
    const newslatters = await newslettersModel.find({}).sort({ _id: 'desc' });
    res.send(newslatters)
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
});

router.get('/:id', async (req, res) => {
  const idNewslatters = req.params.id;
  try {
    const newslatters = await newslettersModel.findById(idNewslatters)
    res.send(newslatters);
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
});

router.post('/', async (req, res) => {
  const newNewslatters = req.body;
  const newslatters = new newslettersModel({
    email: newNewslatters.email
  });
  try {
    const currentNewslatters = await newslatters.save();
    res.send(currentNewslatters);
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
});

router.put('/:id', async (req, res) => {
  const idNewslatters = req.params.id;
  const newslatters = req.body;
  try {
    const newslattersUpdated = await newslettersModel.findByIdAndUpdate(idNewslatters, newslatters);
    res.send(newslattersUpdated);
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
});

router.delete('/:id', async (req, res) => {
  const idNewslatters = req.params.id;
  try {
    const newslatters = await newslettersModel.findByIdAndRemove(idNewslatters);
    res.send(newslatters);
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      mesage: error
    });
  }
});

module.exports = router;