import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './routes/bookRoutes';
import userRoutes from './routes/userRoutes';

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/books', bookRoutes);
app.use('/users', userRoutes);

export default app;
