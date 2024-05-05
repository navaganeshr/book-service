import express from 'express';
import bookController from '../controllers/bookController';

const router = express.Router();

// Routes for handling book operations
router.get('/', bookController.getAllBooks);
router.post('/', bookController.createBook);
router.get('/:id', bookController.getBookById);
router.patch('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

export default router;