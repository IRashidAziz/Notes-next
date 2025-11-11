# Frontend Architecture

## Overview

FlashyNotes frontend is a modern web application built with **Next.js 16** using the App Router architecture, **React 19**, and **TypeScript**. The application follows a modular, scalable architecture with clear separation of concerns and leverages server-side rendering (SSR) and static site generation (SSG) capabilities.

## Technology Stack

### Core Framework
- **Next.js 16.0.1** - React meta-framework with App Router
- **React 19.2.0** - UI library with React Compiler enabled
- **TypeScript 5** - Type-safe development
- **Node.js** - Runtime environment

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Custom Fonts** - Geist Sans and Geist Mono

### State Management & Data Fetching
- **Axios** - HTTP client for API requests
- **Store** - Custom state management (planned)
- **React Hooks** - Local state and side effects

### Animation
- **GSAP** - Animation library for complex animations
- **Framer Motion 12** - Animation library for smooth UI transitions

### Development Tools
- **ESLint** - Code linting
- **React Compiler (Babel)** - Automatic optimization
- **Next.js Dev Server** - Hot module replacement

## Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout component
│   │   ├── (auth)/             # Auth route group
│   │   │   ├── login/          # Login page
│   │   │   ├── register/       # Registration page
│   │   │   └── forgot-password/ # Password recovery
│   │   ├── (home)/             # Home route group
│   │   │   └── page.tsx        # Landing page
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   └── dashboard/          # Dashboard (protected)
│   │
│   ├── components/             # Reusable components
│   │   ├── auth/               # Authentication components
│   │   ├── layout/             # Layout components
│   │   └── ui/                 # UI primitives
│   │
│   ├── lib/                    # Core utilities
│   │   ├── api.ts              # API client configuration
│   │   ├── auth.ts             # Authentication utilities
│   │   ├── db.ts               # Database utilities
│   │   └── utils.ts            # General utilities
│   │
│   ├── constants/              # Application constants
│   │   ├── api.ts              # API endpoints
│   │   ├── config.ts           # App configuration
│   │   └── routes.ts           # Route definitions
│   │
│   ├── store/                  # State management
│   │   ├── store.ts            # Store configuration
│   │   └── auth/               # Auth state slice
│   │
│   ├── hooks/                  # Custom React hooks
│   ├── types/                  # TypeScript type definitions
│   ├── styles/                 # Global styles
│   │   └── globals.css         # Global CSS
│   └── proxy.ts                # API proxy utilities
│
├── public/                     # Static assets
│   ├── fonts/                  # Custom fonts
│   └── images/                 # Images and icons
│
├── docs/                       # Documentation
│   ├── architecture.md         # This file
│   ├── api_integration.md      # API integration guide
│   └── onboarding.md           # Developer onboarding
│
└── Configuration Files
    ├── next.config.ts          # Next.js configuration
    ├── tsconfig.json           # TypeScript configuration
    ├── tailwind.config.ts      # Tailwind configuration
    ├── postcss.config.mjs      # PostCSS configuration
    ├── eslint.config.mjs       # ESLint configuration
    └── package.json            # Dependencies
```

## Architectural Patterns

### 1. App Router Architecture

Next.js App Router provides a file-system-based routing with enhanced features:

- **Route Groups**: Parentheses `()` create logical groups without affecting URLs
  - `(auth)/` - Groups authentication pages
  - `(home)/` - Groups public pages
- **Layouts**: Shared UI across routes with nested layouts
- **Server Components**: Default rendering strategy
- **Client Components**: Interactive components with `'use client'`

### 2. Component Architecture

#### Component Hierarchy
```
RootLayout (app/layout.tsx)
├── Font Configuration (Geist Sans, Geist Mono)
├── Global Styles
└── Children (Page Components)
    ├── Auth Pages
    ├── Public Pages
    └── Dashboard Pages
```

#### Component Organization
- **`components/auth/`** - Login forms, registration, password recovery
- **`components/layout/`** - Headers, footers, navigation, sidebars
- **`components/ui/`** - Buttons, inputs, cards, modals (reusable primitives)

### 3. Data Flow Architecture

```
User Action → Component → Hook → API Client → Backend → Response → State Update → UI Re-render
```

#### Layers:
1. **Presentation Layer** (`components/`)
   - React components
   - UI rendering
   - User interactions

2. **Business Logic Layer** (`hooks/`, `lib/`)
   - Custom hooks
   - Data transformation
   - Validation logic

3. **Data Access Layer** (`lib/api.ts`, `store/`)
   - API communication
   - State management
   - Data caching

4. **Configuration Layer** (`constants/`)
   - API endpoints
   - Route definitions
   - App configuration

### 4. State Management

#### Local State
- React hooks (`useState`, `useReducer`)
- Server state via Next.js

#### Global State
- Centralized store (`store/store.ts`)
- Feature-based slices (`store/auth/`)
- Planned integration with React Context or external library

#### Server State
- Next.js data fetching
- Server components
- API route handlers

### 5. Authentication Architecture

```
User → Login Form → Auth API → Token Storage → Protected Routes → Dashboard
```

**Flow:**
1. User submits credentials via auth components
2. `lib/auth.ts` handles authentication logic
3. Tokens stored securely (localStorage/cookies)
4. Middleware validates protected routes
5. Auth state managed in `store/auth/`

### 6. API Integration

#### API Client Configuration
```typescript
// lib/api.ts
- Axios instance with base configuration
- Request/response interceptors
- Error handling
- Token management
```

#### Endpoint Management
```typescript
// constants/api.ts
- API_BASE_URL
- Endpoint definitions
- API versioning
```

#### Proxy Layer
```typescript
// proxy.ts
- Development proxy configuration
- API route forwarding
- CORS handling
```

## Routing Strategy

### Public Routes
- `/` - Landing page
- `/about` - About page
- `/contact` - Contact page
- `/login` - Login page
- `/register` - Registration page
- `/forgot-password` - Password recovery

### Protected Routes
- `/dashboard` - Main dashboard (requires authentication)
- Additional dashboard routes as needed

### Route Protection
- Middleware checks authentication status
- Redirects unauthorized users to login
- Preserves intended destination for post-login redirect

## Styling Architecture

### Tailwind CSS Approach
- **Utility-first** classes for rapid development
- **Responsive design** with mobile-first breakpoints
- **Dark mode** support with `dark:` variants
- **Custom theme** configuration in `tailwind.config.ts`

### Style Organization
```css
globals.css
├── CSS Variables
├── Base Styles
├── Component Styles
└── Utility Classes
```

### Design Tokens
- Colors (primary, secondary, accent, neutral)
- Spacing scale
- Typography scale
- Border radius values
- Shadow definitions

## Performance Optimizations

### Next.js Features
1. **Automatic Code Splitting** - Route-based splitting
2. **Image Optimization** - Next.js `<Image>` component
3. **Font Optimization** - Automatic font loading
4. **React Compiler** - Automatic memoization and optimization

### Build Optimizations
- Tree shaking unused code
- Minification of JavaScript and CSS
- Static asset compression
- Incremental Static Regeneration (ISR)

### Runtime Optimizations
- Lazy loading components
- Debouncing/throttling user inputs
- Optimistic UI updates
- Request deduplication

## Type Safety

### TypeScript Configuration
- Strict mode enabled
- Path aliases (`@/*` → `./src/*`)
- Type definitions in `types/`
- JSX support with `react-jsx`

### Type Organization
```typescript
types/
├── api.ts          # API request/response types
├── models.ts       # Data model types
├── components.ts   # Component prop types
└── common.ts       # Shared utility types
```

## Development Workflow

### Local Development
```bash
npm run dev         # Start dev server (port 3000)
npm run build       # Production build
npm run start       # Start production server
npm run lint        # Run ESLint
```

### Code Quality
- ESLint for code linting
- TypeScript for type checking
- Next.js built-in checks
- Pre-commit hooks (recommended)

## Security Considerations

### Authentication
- Secure token storage
- Token expiration handling
- Automatic token refresh
- XSS protection via React

### API Communication
- HTTPS in production
- CORS configuration
- Request validation
- Error message sanitization

### Client-Side Security
- Input sanitization
- Output encoding
- Content Security Policy
- Dependency auditing

## Future Enhancements

### Planned Features
1. **Advanced State Management** - Redux Toolkit or Zustand
2. **Testing Suite** - Jest, React Testing Library, Playwright
3. **PWA Support** - Service workers, offline functionality
4. **Internationalization** - Multi-language support
5. **Analytics** - User behavior tracking
6. **Error Monitoring** - Sentry or similar
7. **Performance Monitoring** - Web Vitals tracking

### Scalability
- Micro-frontend architecture (if needed)
- Component library extraction
- Monorepo setup with Turborepo
- Advanced caching strategies

## Build & Deployment

### Production Build
```bash
npm run build       # Creates .next/ directory
npm run start       # Serves production build
```

### Deployment Targets
- **Vercel** - Recommended (seamless Next.js integration)
- **Docker** - Container-based deployment
- **Static Export** - For static hosting (if applicable)
- **Node.js Server** - Custom server deployment

### Environment Variables
```
NEXT_PUBLIC_API_URL     # Backend API URL
NEXT_PUBLIC_APP_URL     # Frontend URL
NODE_ENV                # Environment (development/production)
```

## Conclusion

The FlashyNotes frontend architecture is designed for:
- **Developer Experience** - Type safety, hot reload, modern tooling
- **Performance** - Optimized builds, code splitting, caching
- **Maintainability** - Clear structure, separation of concerns
- **Scalability** - Modular design, extensible patterns
- **User Experience** - Fast loading, smooth animations, responsive design

This architecture provides a solid foundation for building a modern, performant, and maintainable web application.
