import dotenv from 'dotenv';

dotenv.config();

import app from './app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('=================================');
  console.log('🚀 Mission Tracker API Started');
  console.log(`🌐 Server: http://localhost:${PORT}`);
  console.log(`❤️ Health: http://localhost:${PORT}/api/health`);
  console.log('=================================');
});