const express = require('express');
const router = express.Router();
const newslettersModel = require('../models/newslettersModel');

router.get('/', async (req, res) => {
  try {
    const newsletters = await newslettersModel.find({}).sort({ _id: 'desc' });
    res.send(newsletters)
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
});

router.get('/:id', async (req, res) => {
  const idNewsletter = req.params.id;
  try {
    const newsletters = await newslettersModel.findById(idNewsletter)
    res.send(newsletters);
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
});

router.post('/', async (req, res) => {
  const newNewsletter = req.body;
  const newsletters = new newslettersModel({
    email: newNewsletter.email
  });
  try {
    const currentNewsletter = await newsletters.save();
    res.send(currentNewsletter);
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
});

router.put('/:id', async (req, res) => {
  const idNewsletter = req.params.id;
  const newsletters = req.body;
  try {
    const newsletterUpdated = await newslettersModel.findByIdAndUpdate(idNewsletter, newsletters);
    res.send(newsletterUpdated);
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
});

router.delete('/:id', async (req, res) => {
  const idNewsletter = req.params.id;
  try {
    const newsletters = await newslettersModel.findByIdAndRemove(idNewsletter);
    res.send(newsletters);
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      mesage: error
    });
  }
});

module.exports = router;