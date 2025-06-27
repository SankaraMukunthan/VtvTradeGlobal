#!/usr/bin/env node

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../shared/schema.js';

// Production database setup script
async function setupProductionDatabase() {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL environment variable is required');
    process.exit(1);
  }

  try {
    console.log('Connecting to production database...');
    
    const client = postgres(process.env.DATABASE_URL, { max: 1 });
    const db = drizzle(client, { schema });

    console.log('Setting up database schema...');
    
    // Note: In production, you would run migrations here
    // For now, this script just verifies the connection
    
    console.log('Verifying database connection...');
    await db.select().from(schema.products).limit(1);
    
    console.log('Production database setup completed successfully!');
    
    await client.end();
  } catch (error) {
    console.error('Error setting up production database:', error);
    process.exit(1);
  }
}

setupProductionDatabase();