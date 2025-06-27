# VTV Enterprises - Local Development Setup

This guide will help you set up and run the VTV Enterprises website locally on your machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **PostgreSQL** (version 12 or higher)
- **Git**

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd vtv-enterprises
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   
   Create a PostgreSQL database:
   ```sql
   CREATE DATABASE vtv_enterprises;
   CREATE USER vtv_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE vtv_enterprises TO vtv_user;
   ```

4. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Database Configuration
   DATABASE_URL=postgresql://vtv_user:your_password@localhost:5432/vtv_enterprises
   PGHOST=localhost
   PGPORT=5432
   PGDATABASE=vtv_enterprises
   PGUSER=vtv_user
   PGPASSWORD=your_password

   # Email Configuration (EmailJS)
   EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   EMAILJS_SERVICE_ID=your_emailjs_service_id
   EMAILJS_TEMPLATE_ID=your_emailjs_template_id

   # Optional: SendGrid (if you want to use SendGrid instead of EmailJS)
   SENDGRID_API_KEY=your_sendgrid_api_key
   ```

5. **Set up the database schema**
   ```bash
   npm run db:push
   ```

6. **Seed the database with initial data**
   ```bash
   npm run db:seed
   ```

## Running the Application

### Development Mode

Start the development server:
```bash
npm run dev
```

This will start both the backend Express server and frontend Vite development server. The application will be available at:
- **Frontend**: http://localhost:5000
- **Backend API**: http://localhost:5000/api

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run db:push` - Push database schema changes
- `npm run db:seed` - Seed database with initial data
- `npm run db:studio` - Open Drizzle Studio (database GUI)

## Project Structure

```
vtv-enterprises/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Database operations
├── db/                   # Database configuration
├── shared/               # Shared types and schemas
├── public/               # Static assets
└── attached_assets/      # Document files (PDFs, images)
```

## Features

- **Product Catalog**: Browse export and import products
- **Contact Form**: Send inquiries via EmailJS
- **Company Information**: About page with certifications
- **Responsive Design**: Mobile-friendly interface
- **Database**: PostgreSQL with Drizzle ORM

## Database Management

### View Database
```bash
npm run db:studio
```

### Reset Database
```bash
# Drop all tables and recreate
npm run db:push
npm run db:seed
```

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure PostgreSQL is running
   - Check DATABASE_URL in .env file
   - Verify database credentials

2. **Port Already in Use**
   - The application runs on port 5000 by default
   - Kill any processes using port 5000 or change the port

3. **Missing Environment Variables**
   - Ensure all required variables are set in .env
   - Check .env.example for reference

4. **Email Service Not Working**
   - Verify EmailJS configuration
   - Check public key, service ID, and template ID

### Logs

Development logs will appear in your terminal. Check for:
- Database connection status
- API endpoint responses
- Build errors or warnings

## Development Tips

1. **Hot Reload**: Changes to frontend code will automatically reload
2. **API Changes**: Server restarts automatically on backend changes
3. **Database Changes**: Use `npm run db:push` after schema modifications
4. **Static Files**: Place assets in `public/` or `attached_assets/` directories

## Support

For issues or questions:
- Check the console for error messages
- Review environment variable configuration
- Ensure all dependencies are installed correctly