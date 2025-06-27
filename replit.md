# VTV Enterprises - Application Architecture

## Overview

VTV Enterprises is a full-stack web application for an agricultural trade company specializing in importing and exporting agricultural products. The application serves as a digital presence for the company, showcasing products, services, and facilitating customer contact. Built with modern web technologies, it provides a professional platform for global trade operations.

## System Architecture

The application follows a three-tier architecture pattern:

1. **Presentation Layer**: React-based frontend with TypeScript for type safety
2. **Application Layer**: Express.js backend providing RESTful APIs
3. **Data Layer**: PostgreSQL database with Drizzle ORM for type-safe database operations

### Key Architectural Decisions

- **Monorepo Structure**: Single repository containing both client and server code for simplified development and deployment
- **TypeScript Throughout**: Used across the entire stack for enhanced developer experience and type safety
- **Component-Based UI**: React components with shadcn/ui for consistent design and reusability
- **API-First Design**: Clear separation between frontend and backend with well-defined REST endpoints
- **Modern Tooling**: Vite for fast development builds, Tailwind CSS for styling, and React Query for state management

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with Neon Database serverless connector
- **API Design**: RESTful endpoints with proper error handling
- **File Structure**: Modular design with separate routing and storage layers

### Database Schema
The application uses PostgreSQL with the following main entities:
- **Products**: Core business entities for export/import products
- **Testimonials**: Customer feedback and reviews
- **Contact Messages**: Customer inquiries and communication
- **Users**: Basic user management (for future admin features)

## Data Flow

1. **Client Requests**: Frontend components make API calls using React Query
2. **API Processing**: Express.js routes handle requests and validate data
3. **Database Operations**: Storage layer uses Drizzle ORM to interact with PostgreSQL
4. **Response Handling**: Data flows back through the API to update the UI

The application follows a standard request-response pattern with proper error handling at each layer.

## External Dependencies

### Core Dependencies
- **Database**: PostgreSQL with Neon Database serverless hosting
- **Email Service**: EmailJS for contact form submissions
- **UI Components**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript compiler
- **Database Management**: Drizzle Kit for migrations and schema management
- **Linting**: ESLint with TypeScript support

## Deployment Strategy

The application is designed for deployment on modern hosting platforms:

### Production Deployment
- **Frontend**: Static site deployment (Netlify recommended)
- **Backend**: Node.js server deployment
- **Database**: Managed PostgreSQL service (Railway, Supabase, or Neon)
- **Assets**: CDN for static assets and images

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- EmailJS configuration for contact forms
- Build optimization for production environments

### Build Process
1. **Development**: `npm run dev` for local development with hot reload
2. **Production Build**: `npm run build` generates optimized frontend and backend bundles
3. **Database Setup**: `npm run db:push` for schema deployment
4. **Seeding**: `npm run db:seed` for initial data population

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```