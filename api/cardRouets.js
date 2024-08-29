const express = require('express');
const router = express.Router();
const Card = require('./cardSchema'); 

router.post('/cards', async (req, res) => {
  try {
    const { id, title, description } = req.body;
    const newCard = new Card({ id, title, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ message: 'Error creating card', error });
  }
});

router.get('/cards', async (req, res) => {
    try {
      const cards = await Card.find();
      res.status(200).json(cards);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving cards', error });
    }
  });

router.get('/cards/:title', async (req, res) => {
    try {
      const { title } = req.params;
      const card = await Card.findOne({ title: title });
      if (card) {
        res.status(200).json(card);
      } else {
        res.status(404).json({ message: 'Card not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving card', error });
    }
  });
  
router.get('/cards/id/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const card = await Card.findOne({ id: Number(id) });
      if (card) {
        res.status(200).json(card);
      } else {
        res.status(404).json({ message: 'Card not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving card', error });
    }
  });
 
  

module.exports = router;
