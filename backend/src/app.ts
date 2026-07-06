import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import healthRoutes from './routes/health.routes';

const app = express();

// Security
app.use(helmet());

// CORS
app.use(cors());

// Logging
app.use(morgan('dev'));

// JSON Parser
app.use(express.json());

// Health Route
app.use('/api/health', healthRoutes);

export default app;