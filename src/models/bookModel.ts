import mongoose from 'mongoose';

// Define book schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number, required: true },
});

// Create book model
const Book = mongoose.model('Book', bookSchema);

export default Book;
