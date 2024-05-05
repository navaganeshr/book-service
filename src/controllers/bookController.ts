import { Request, Response } from 'express';
import Book from '../models/bookModel';

// Controller for handling CRUD operations on books
class BookController {
  // Get all books
  async getAllBooks(req: Request, res: Response) {
    try {
      const books = await Book.find({});
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // Get a specific book by ID
  async getBookById(req: Request, res: Response) {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(book);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // Create a new book
  async createBook(req: Request, res: Response) {
    const { title, author, year } = req.body;
    const book = new Book({ title, author, year });
    try {
      const newBook = await book.save();
      res.status(201).json(newBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  // Update a book by ID
  async updateBook(req: Request, res: Response) {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(book);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  // Delete a book by ID
  async deleteBook(req: Request, res: Response) {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json({ message: 'Book deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new BookController();
