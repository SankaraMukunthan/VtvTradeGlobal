import express from 'express';
import { createServer } from 'http';
import { registerRoutes } from '../../server/routes.js';
import serverless from 'serverless-http';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  next();
});

// Initialize routes
async function initializeApp() {
  try {
    await registerRoutes(app);
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

initializeApp();

// Export handler for Netlify
export const handler = serverless(app);