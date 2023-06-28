import { Router } from 'express';
import ResultModel, { find } from '../models/models';

const router = Router();

// Create a new example document
router.post('/examples', async (req, res) => {
  try {
    const example = new ResultModel(req.body);
    const savedExample = await example.save();
    res.status(201).json(savedExample);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Get all examples
router.get('/examples', async (req, res) => {
  try {
    const examples = await find();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

export default router;
