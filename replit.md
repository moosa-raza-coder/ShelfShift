# Wholesale Shelf Corps - Full Service Funding Solution

## Overview

A premium B2B funding platform that positions aged corporations as the secret to unlocking $150,000+ in business credit without the typical 2-year wait. The application is a conversion-optimized landing page designed to generate high-quality leads through strategy call bookings and an interactive funding calculator. Built with React/TypeScript frontend, Express backend, and PostgreSQL database for lead/booking management.

**Primary Goal**: Convert visitors into scheduled strategy calls by showcasing the value proposition of aged corporations for instant business credibility and accelerated credit building.

**Key Business Model**: High-ticket ($5,000+) aged corporation sales bundled with credit building programs, credit partners, and funding consulting services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool

**UI Component System**: 
- Radix UI primitives for accessible, unstyled components
- shadcn/ui component library (New York style variant)
- Tailwind CSS for styling with custom design tokens
- Framer Motion for animations and scroll-based interactions

**Design Approach**:
- Premium financial services aesthetic inspired by Stripe, Brex, Ramp
- Conversion-optimized layout with clear visual hierarchy
- Mobile-first responsive design
- Animated gradients, glass morphism effects, and micro-interactions
- Typography: Inter (body), Space Grotesk (headings)
- Color scheme: Dark blue primary (#1e3a5f range), burgundy/gold accents (#8b2942 range)

**Key UI Patterns**:
- Single-page application with smooth scroll navigation
- Modal overlays for lead capture (funding calculator, video player)
- Exit-intent popup to re-engage departing visitors
- Floating CTA button that appears on scroll
- Calendly iframe integration for booking
- Progressive disclosure of value proposition through sectioned content

**State Management**: React hooks (useState, useEffect) for local component state, no global state library needed due to simple data flow

### Backend Architecture

**Runtime**: Node.js with Express.js server

**API Design**: RESTful endpoints for lead and booking data
- `POST /api/leads` - Capture funding calculator submissions
- `GET /api/leads` - Retrieve all leads (admin access)
- `POST /api/bookings` - Capture strategy call bookings
- `GET /api/bookings` - Retrieve all bookings (admin access)

**Development Mode**: Vite dev server with HMR proxied through Express
**Production Mode**: Express serves pre-built static React assets from `dist/public`

**Build Strategy**: 
- Client builds to `dist/public` via Vite
- Server builds to `dist/index.cjs` via esbuild
- Bundled dependencies reduce cold start times
- Source maps generated for debugging

**Session Management**: Structure exists for express-session with connect-pg-simple for PostgreSQL session store (not yet implemented with actual authentication)

### Data Storage

**Database**: PostgreSQL via Neon serverless driver (@neondatabase/serverless)

**ORM**: Drizzle ORM for type-safe database queries

**Schema Design** (`shared/schema.ts`):
- `users` table - Username/password authentication (prepared for future admin panel)
- `leads` table - Funding calculator submissions with projected funding amounts
- `bookings` table - Strategy call booking information

**Migration Strategy**: Drizzle Kit manages schema migrations in `migrations/` directory

**Development Fallback**: In-memory storage implementation (`MemStorage`) allows development without database connection

### Routing & Navigation

**Client Routing**: wouter for lightweight SPA routing (currently single route to homepage)

**URL Structure**: 
- `/` - Main landing page
- All other routes fall through to 404 page

**Scroll Navigation**: Anchor links with smooth scroll behavior to section IDs (#how-it-works, #benefits, #testimonials, #faq, #book-call)

### External Dependencies

**Third-Party Services**:
- **Calendly** - Embedded appointment scheduling widget (requires configuration with actual Calendly URL)
- **Google Fonts** - Inter and Space Grotesk font families loaded via CDN
- **Future Integration Point**: Salesforce for proposal generation and lead nurturing automation (mentioned in requirements, not yet implemented)

**Key NPM Packages**:
- `@tanstack/react-query` - Server state management for API calls
- `framer-motion` - Animation library for scroll effects and transitions
- `react-hook-form` + `@hookform/resolvers` - Form validation with Zod schemas
- `zod` - Runtime type validation for API payloads
- `date-fns` - Date manipulation utilities
- `lucide-react` - Icon component library

**Build Tools**:
- Vite - Frontend bundler with React plugin
- esbuild - Server bundler for production
- TypeScript - Type checking across full stack
- PostCSS + Autoprefixer - CSS processing
- Tailwind CSS - Utility-first styling

**Development Tools**:
- `@replit/vite-plugin-runtime-error-modal` - Enhanced error reporting in Replit environment
- `@replit/vite-plugin-cartographer` - Replit-specific dev tooling
- `tsx` - TypeScript execution for dev server and build scripts

**Database Tooling**:
- `drizzle-kit` - Schema management and migrations
- `drizzle-zod` - Automatic Zod schema generation from Drizzle schemas