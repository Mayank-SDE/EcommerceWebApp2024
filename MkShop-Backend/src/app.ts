import express from 'express';
import { connectDB } from './utils/features.js';
import { errorMiddleware } from './middlewares/error.js';
import NodeCache from 'node-cache';
import { config } from 'dotenv';
import morgan from 'morgan';
// Importing routes
import userRoutes from './routes/user.js';
import productRoutes from './routes/product.js';
import orderRoutes from './routes/order.js';
import paymentRoutes from './routes/payment.js';
import dashboardRoutes from './routes/dashboard.js';
// Make sure to use the dotenv before the connectDB() method.

config({
  path: './.env',
});

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (request, response) => {
  response.send('API Working with /api/v1');
});

// Using Routes

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/order', orderRoutes);
app.use('/api/v1/payment', paymentRoutes);
app.use('/api/v1/dashboard', dashboardRoutes);

//declaring the uploads as an static folder.
app.use('/uploads', express.static('uploads'));
// Error Handling
app.use(errorMiddleware);

const port = process.env.PORT || 5500;
const mongoURI = process.env.MONGO_URI || '';

connectDB(mongoURI);

export const nodeCache = new NodeCache();

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
