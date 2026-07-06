export function getHealthStatus() {
  return {
    success: true,
    message: 'Mission Tracker API is running!',
    environment: process.env.NODE_ENV,
  };
}