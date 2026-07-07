import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import healthRoutes from './routes/health.routes';
import userRoutes from "./routes/user.routes";

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

// User Route
app.use("/api/users", userRoutes);

export default app;