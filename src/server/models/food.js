import restful from 'node-restful';

const mongoose = restful.mongoose;

// Schema
const foodSchema = new mongoose.Schema({
  name: String,
  date: Date,
  kcal: String,
  description: String
});

// Return model
module.exports = restful.model('Foods', foodSchema);