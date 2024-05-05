import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './routes/bookRoutes';

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/books', bookRoutes);

export default app;