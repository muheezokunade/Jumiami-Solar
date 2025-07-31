# Jumiami Solar Website

## Overview

This is a modern, responsive website for Jumiami Solar, a Nigerian solar energy company based in Lagos. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a solar energy company website with contact forms, project showcases, testimonials, and product information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Validation**: Zod schemas shared between client and server

### Project Structure
```
├── client/           # React frontend application
├── server/           # Express.js backend API
├── shared/           # Shared TypeScript types and schemas
├── migrations/       # Database migration files
└── attached_assets/  # Project requirements and assets
```

## Key Components

### Database Schema
The application uses four main entities:
- **Users**: Basic user authentication system
- **Contacts**: Customer inquiries and contact form submissions
- **Testimonials**: Customer reviews and ratings
- **Projects**: Showcase of completed solar installations

### API Endpoints
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Retrieve all contacts
- `GET /api/testimonials` - Fetch customer testimonials
- `GET /api/projects` - Get project portfolio

### UI Components
- Responsive navigation with mobile menu
- Hero section with animated background
- Product cards for solar equipment
- Project showcase with filtering
- Contact form with validation
- Testimonial carousel
- Floating action button for quick contact

## Data Flow

1. **Client-Side**: React components use TanStack Query to fetch data from API endpoints
2. **API Layer**: Express.js routes handle HTTP requests and validate data using Zod schemas
3. **Data Layer**: Currently uses in-memory storage (MemStorage) with sample data, designed to easily switch to PostgreSQL with Drizzle ORM
4. **Shared Schemas**: Zod schemas in `/shared` ensure type safety between client and server

## External Dependencies

### Frontend Libraries
- **@radix-ui/***: Headless UI components for accessibility
- **@tanstack/react-query**: Server state management
- **@hookform/resolvers**: Form validation integration
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight routing library

### Backend Libraries
- **drizzle-orm**: Type-safe database ORM
- **@neondatabase/serverless**: PostgreSQL database connection
- **express**: Web application framework
- **zod**: Schema validation library

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tailwindcss**: CSS processing
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Development
- `npm run dev`: Starts development server with hot reload
- Frontend served by Vite dev server
- Backend runs with tsx for TypeScript execution
- Database migrations managed with `npm run db:push`

### Production Build
- `npm run build`: Creates optimized frontend build and bundles backend
- Frontend built to `/dist/public` directory
- Backend bundled to `/dist/index.js` with esbuild
- `npm start`: Runs production server

### Environment Configuration
- Uses environment variables for database connection
- Configured for Replit deployment with specific plugins
- Static assets served from built frontend in production

### Database Setup
- Drizzle configuration points to PostgreSQL database
- Schema defined in `/shared/schema.ts`
- Migrations output to `/migrations` directory
- Currently using in-memory storage that can be easily replaced with actual database

The application is designed to be easily deployable on platforms like Replit, Vercel, or traditional hosting providers with minimal configuration changes.