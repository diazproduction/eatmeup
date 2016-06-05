import express from 'express';

const router = express.Router();

// Models
import Foods from '../models/food';

// Routes
Foods.methods(['get', 'put', 'post', 'delete']);
Foods.register(router, '/foods');

module.exports = router;