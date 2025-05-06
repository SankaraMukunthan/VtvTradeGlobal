# Architecture Overview

## Overview

VTV Enterprises is a full-stack web application for an agricultural trade company that specializes in importing and exporting agricultural products. The application follows a modern client-server architecture with a clear separation between frontend and backend components.

The system is built using a React frontend with TypeScript and an Express.js backend, connected to a PostgreSQL database using Drizzle ORM. The application follows RESTful API patterns for communication between client and server.

## System Architecture

The application follows a three-tier architecture:

1. **Presentation Layer**: React-based client-side application built with TypeScript
2. **Application Layer**: Express.js server providing REST APIs
3. **Data Layer**: PostgreSQL database accessed through Drizzle ORM

### Key Architectural Decisions

- **Monorepo Structure**: The project uses a monorepo approach containing both client and server code in a single repository, simplifying development and deployment workflows.
- **TypeScript**: Used throughout the stack for type safety and better developer experience.
- **API-First Design**: Clear separation between frontend and backend with a well-defined REST API interface.
- **Component-Based UI**: The frontend uses a component-based architecture with shadcn/ui components for consistent design and reusability.
- **Database Abstraction**: Drizzle ORM is used for database access, providing a type-safe interface to the database.

## Key Components

### Frontend

- **Framework**: React with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library based on Radix UI primitives
- **State Management**: React Query for server state management
- **Styling**: Tailwind CSS for utility-first styling approach

The frontend is organized around feature-based components:

- `components/`: UI components, including reusable UI elements and feature-specific components
- `pages/`: Page components corresponding to different routes
- `hooks/`: Custom React hooks
- `lib/`: Utility functions and shared code

### Backend

- **Framework**: Express.js with TypeScript
- **API Layer**: RESTful endpoints defined in `server/routes.ts`
- **Data Access Layer**: Storage abstraction in `server/storage.ts` interfacing with Drizzle ORM
- **Server Configuration**: Core server setup in `server/index.ts`

### Database

- **Database**: PostgreSQL (via Neon Serverless)
- **ORM**: Drizzle ORM for database access and schema management
- **Schema**: Defined in `shared/schema.ts`
- **Migrations**: Handled via Drizzle Kit

Key tables:
- `users`: User authentication and management
- `products`: Product catalog for import and export items
- `testimonials`: Customer testimonials
- `contact_messages`: Contact form submissions

## Data Flow

1. **Client Requests**: 
   - User interactions in the React UI trigger API requests to the server
   - React Query is used to manage and cache data fetching

2. **API Processing**:
   - Express routes receive requests and validate inputs
   - The server processes requests and interacts with the database via the storage layer
   - Responses are returned as JSON

3. **Data Storage**:
   - Drizzle ORM handles database operations
   - PostgreSQL stores application data
   - Zod schemas are used for data validation

4. **State Management**:
   - React Query manages server state in the frontend
   - Local component state is used for UI-specific state

## External Dependencies

### Frontend Dependencies

- **@radix-ui/react-***: UI component primitives
- **@tanstack/react-query**: Data fetching and server state management
- **class-variance-authority**: Utility for creating variant components
- **clsx**: Utility for constructing className strings
- **wouter**: Lightweight routing library
- **tailwindcss**: Utility-first CSS framework
- **next/font**: Font loading for web fonts

### Backend Dependencies

- **express**: Web server framework
- **@neondatabase/serverless**: PostgreSQL client for serverless environments
- **drizzle-orm**: TypeScript ORM
- **zod**: Schema validation library

## Development Workflow

- **Development**: `npm run dev` runs the development server with live reloading
- **Build**: `npm run build` compiles the application for production
- **Database Management**:
  - `npm run db:push`: Updates the database schema
  - `npm run db:seed`: Seeds the database with initial data

## Deployment Strategy

The application is configured for deployment on Replit, as indicated by the `.replit` configuration file. The deployment process includes:

1. **Build Step**: `npm run build` compiles both client and server code
2. **Start Command**: `npm run start` runs the production server
3. **Port Configuration**: The application runs on port 5000 internally, mapped to port 80 externally

The application uses environment variables for configuration, particularly for database connection (`DATABASE_URL`).

## Security Considerations

- **Authentication**: Basic username/password authentication implemented
- **Input Validation**: Zod schemas are used to validate user input
- **API Security**: Express middleware for request logging and error handling
- **Database Security**: Using Neon's serverless PostgreSQL offering which provides secure connection handling

## Future Considerations

Potential areas for architectural enhancement:

1. **Authentication Enhancement**: Implementing JWT or session-based authentication
2. **Caching Strategy**: Adding Redis or similar for API response caching
3. **API Documentation**: Adding Swagger/OpenAPI documentation
4. **Monitoring**: Implementing application monitoring and logging
5. **CI/CD**: Setting up automated testing and deployment pipelines