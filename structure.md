# Abracadabra Salon — Codebase Structure & Architecture

Welcome to the **Abracadabra Salon** codebase documentation. This file provides an exhaustive, line-by-line and system-by-system breakdown of the entire application. It is designed to give any AI or developer an instant, comprehensive understanding of the project's pages, routing, components, data flows, utilities, and UI/UX design tokens.

---

## 1. Technical Stack & Architecture

Abracadabra Salon is built as a modern, high-performance, single-page application (SPA) with Server-Side Rendering (SSR) support:

- **Core Framework**: [React 19](https://react.dev) & [TypeScript](https://www.typescriptlang.org)
- **Full-Stack Meta-Framework**: [TanStack Start v1](https://tanstack.com/router/latest/docs/start/overview) (a framework built on top of [TanStack Router](https://tanstack.com/router) featuring file-based routing and SSR hydration).
- **Bundler & Dev Server**: [Vite v8](https://vite.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (leveraging the new `@tailwindcss/vite` plugin for lightning-fast compilation and CSS-first configuration).
- **CSS Engine**: [Lightning CSS](https://lightningcss.dev) configured as the Vite transformer.
- **Server Engine**: [Nitro](https://nitro.unjs.io) configured with a production output target of `cloudflare-module` for deployment to Cloudflare Pages/Workers.
- **State Management**: [@tanstack/react-query v5](https://tanstack.com/query) for managing server cache/states.
- **UI Primitives**: Radix UI (accessible components integrated via Shadcn UI structures).

---

## 2. Directory Structure

Below is the directory tree for the workspace root:

```
abracadabra-artisanal-design-main/
├── .tanstack/                  # Auto-generated routing files
├── .wrangler/                  # Cloudflare local wrangler configurations
├── public/                     # Static public assets (e.g. logo, favicons)
├── src/                        # Main source code directory
│   ├── assets/                 # Local image and graphics assets
│   ├── components/             # Reusable React components
│   │   ├── site/               # Domain-specific site layouts (Header, Footer, etc.)
│   │   └── ui/                 # General Shadcn/Radix atomic UI components
│   ├── hooks/                  # Custom React hooks (e.g. use-mobile.tsx)
│   ├── lib/                    # Library functions, constants, and data sets
│   │   ├── error-capture.ts    # Out-of-band error monitoring
│   │   ├── error-page.ts       # Catastrophic SSR error template
│   │   ├── salon-data.ts       # Shared static data (services, reviews)
│   │   └── utils.ts            # Class merging utility (clsx + tailwind-merge)
│   ├── routes/                 # File-based application routes (TanStack Router)
│   │   ├── __root.tsx          # Root routing configuration & global shell
│   │   ├── index.tsx           # Home landing page
│   │   ├── book.tsx            # Simplified booking pipeline
│   │   ├── services.tsx        # Services list & detailed dropdowns
│   │   ├── gallery.tsx         # Filterable client work gallery
│   │   ├── contact.tsx         # Location mapping & business details
│   │   └── studio.tsx          # Evergreen Our Studio story page
│   ├── routeTree.gen.ts        # Auto-generated router declarations
│   ├── router.tsx              # React-router client instantiator
│   ├── server.ts               # Nitro server entry-point
│   ├── start.ts                # SSR start entry-point (middlewares)
│   └── styles.css              # Global custom stylesheets & Tailwind v4 theme
├── bunfig.toml                 # Bun configuration file
├── components.json             # Shadcn UI configuration file
├── eslint.config.js            # Linter settings
├── package.json                # Project script mappings and dependency declarations
├── tsconfig.json               # TypeScript configurations
└── vite.config.ts              # Vite configurations, plugins, and server details
```

---

## 3. Styling & The Design System

The app features a custom-designed, premium editorial design system utilizing natural tones and serif typography. All core tokens are declared in [src/styles.css](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/styles.css).

### Color Palette (OKLCH Color Space)
- **Ivory (`--ivory`)**: `oklch(0.965 0.012 82)` (`#F7F3EE`). The primary background color. Provides a warm, comforting feel.
- **Cream (`--cream`)**: `oklch(0.98 0.008 82)`. Used for cards and interactive containers to contrast with Ivory.
- **Sand (`--sand`)**: `oklch(0.855 0.028 62)` (`#DCCFC2`). Used for secondary elements, badges, and background panels.
- **Terracotta (`--terracotta`)**: `oklch(0.585 0.098 42)` (`#A76D5B`). The primary brand accent color. Used for links, call-to-actions, and stars.
- **Espresso (`--espresso`)**: `oklch(0.278 0.028 40)` (`#342B28`). The primary text/foreground color.
- **Sage (`--sage`)**: `oklch(0.598 0.038 138)` (`#7B8A73`). The secondary accent, representing natural textures and organic styles.

### Typography
- **Display Serif Font (`--font-display`)**: `"Cormorant Garamond"`, `"Cormorant"`, Georgia, serif. Extensively used for headings (`h1` through `h5`).
- **Sans-Serif Font (`--font-sans`)**: `"Manrope"`, system-ui, sans-serif. Used for body copy, buttons, labels, and forms.

### Custom Tailwind v4 Utilities
- `@utility eyebrow`: Small, uppercase text with wide letter-spacing (`0.28em`), colored in terracotta.
- `@utility display-xl`: Massive display header text with responsive sizing (`clamp(2.75rem, 7vw, 6.25rem)`), thin font weight, and tight line heights.
- `@utility display-lg`: Sub-headings (`clamp(2.25rem, 5vw, 4rem)`).
- `@utility italic-accent`: Renders font-display in italic form to emphasize aesthetic terms.
- `@utility grain`: Implements a film-grain noise texture overlay using an inline SVG fractal noise filter.
- `@utility hairline`: A thin border line (`1px`) fading out at the edges using a linear gradient.
- `@utility sparkle`: Prefixes text elements with the diamond star character `✦` in terracotta.
- `@utility rise`: A CSS keyframe animation (`soft-rise`) that slides elements up (`14px`) and fades them in over `0.9` seconds.
- `@utility marquee-track`: Continuous horizontal scroll used for endless decorative text tracks.

---

## 4. Routing System & Pages

Application pages are managed via file-based routing within [src/routes/](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/routes).

### 4.1. Root Configuration: [__root.tsx](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/routes/__root.tsx)
Acts as the global document shell.
- **Context Injection**: Extends router context to receive `queryClient: QueryClient`.
- **Global Layout**: Renders `<Header />`, the main content area (`<Outlet />`), and the `<Footer />` inside `QueryClientProvider`.
- **SEO & Document Head**: Inject meta headers globally (viewport, title: `"Abracadabra Salon — Where Hair Becomes Art"`, description, OpenGraph tags, and Twitter Cards). Connects Google Fonts (`Cormorant Garamond` and `Manrope`) and imports `styles.css`.
- **Global Catch-alls**:
  - `NotFoundComponent`: Displays a warm 404 block styled with the custom `eyebrow`, `display-lg`, and a return home link.
  - `ErrorComponent`: A boundary catching unhandled client-side render exceptions. Offers a retry button (which runs `router.invalidate()`) and a link to go home.

### 4.2. Home Page: [index.tsx](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/routes/index.tsx)
Path: `/`
A highly aesthetic landing page composed of multiple sections:
- **Hero Section**: Displays the main brand value propositions, a booking CTA, and a responsive asymmetric main banner image (`new-hero.png`) with a floating testimonial badge. Features a link leading directly to `/studio`.
- **Text Marquee**: An infinite text banner displaying service tags ("Vivid Color", "Balayage", "Curly Cuts", etc.) sliding horizontally.
- **Featured Services**: An asymmetrical, editorial lookbook spread that showcases our 6 key services. It features large visual focus on *Fantasy & Vivid Color* (our creative specialty), with embedded atmospheric images (balayage blonde, textured braids, clean nails), terracotta divider lines, and custom luxury tags ("Signature Service", "Most Requested", "Creative Specialty", "Client Favorite", "Bespoke Care", and "Fine Detail").
- **Why Choose Abracadabra Section**: Displays a responsive grid of 6 elegant, high-quality cards detailing our studio specialties (Creative Color Expertise, Curl & Texture Specialists, Welcoming Atmosphere, Personalized Consultations, Premium Products, and Easy Booking Experience).
- **Why Clients Stay**: Highlights 6 core values of the salon, aligned alongside a decorative image component (`salon-detail.jpg`).
- **Product Showcase**: Displays a list of high-end styling brands (Oribe, R+Co, Olaplex, Davines, IGK).
- **Instagram Feed**: A masonry grid of 8 images showcasing client hair transformations.
- **Client Reviews**: A horizontal swipeable review feed showing client quotes.
- **Footer CTA**: Prompts users to book an appointment.

### 4.3. Booking Page: [book.tsx](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/routes/book.tsx)
Path: `/book`
A simplified multi-step booking client interface that removes stylist assignment to match salon-based scheduling:
- **Step 1: Service Selector**: A drop-down menu generated by combining categories and specific item names from `salon-data.ts`.
- **Step 2: Day Selector**: A calendar component offering the next 14 consecutive days (computed from current date).
- **Step 3: Time Selector**: Interactive buttons allowing users to choose an appointment slot.
- **Live Summary Sidebar**: A sticky `<aside>` showing real-time selection parameters (Service, Day, Time) and excluding any stylist parameters. The **Confirm booking** CTA button is enabled only when all three parameters are selected.
- **FAQ Accordion**: Built using CSS-grid grid-rows transitions. Toggling a question expands/collapses the answer smoothly.

### 4.4. Services Menu: [services.tsx](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/routes/services.tsx)
Path: `/services`
Lists the complete service offerings:
- **Structured Categories**: Groups services by Hair, Color, Texture, and Beauty.
- **Interactive Accordion**: Tapping a service slides open detailed descriptions and exposes a booking link for that item.
- **Layout**: Uses a sticky category sidebar format on desktop.

### 4.5. Our Studio: [studio.tsx](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/routes/studio.tsx)
Path: `/studio`
An editorial story page representing the salon's evergreen philosophy:
- **Layout**: Alternating images and text cards that maintain the previous team grid alignment and image aspect ratios.
- **Evergreen Sections**:
  1. *The Story of Abracadabra*: Historical overview since 2011, establishing our handcrafted design legacy.
  2. *Hair as a Creative Canvas*: Explains our belief in individualized styling, curl textures, and vivid melts.
  3. *Designed to Feel Like Home*: Focuses on our terracotta theme, healthy plants, sensory relaxation, and tea selection.
  4. *A Shared Creative Passion*: Elaborates on our collective expertise model, continuous education, and resource sharing.
- **Visuals**: Uses studio atmosphere photos (`hero-salon.jpg`, `gallery-vivid.jpg`, `salon-detail.jpg`, and `products.jpg`).

### 4.6. Portfolio Gallery: [gallery.tsx](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/routes/gallery.tsx)
Path: `/gallery`
A client portfolio gallery:
- **Category Filter Tabs**: Filters items by "All", "Blonding", "Vivids", "Brunettes", "Braids", and "Curly Hair".
- **Responsive Dense Grid**: Uses Tailwind's grid auto-flow dense properties alongside custom row spans (`row-span-2`) to create a masonry-like grid of client photos.
- **Hover Effects**: Overlay gradients display category tags and zoom scale transitions.

### 4.7. Contact Page: [contact.tsx](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/routes/contact.tsx)
Path: `/contact`
- **Location Mapping**: Renders an interactive OpenStreetMap iframe styled with CSS filter layers (grayscale, contrast adjustments, and sepia warmth).
- **Details Section**: Renders contact numbers, emails, social links, parking rules, and a tabular-numeric view of business hours.

---

## 5. Site Components

Domain-specific layouts located under [src/components/site/](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/components/site):

- **[Header.tsx](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/components/site/Header.tsx)**:
  - Header sticky state dynamically switches background colors from transparent to blurred ivory when page scroll exceeds `24px`.
  - Implements navigation links (`/`, `/studio`, `/services`, `/gallery`, `/contact`).
  - Active links display a bottom terracotta underline styling.
  - Features a responsive hamburger toggle menu for mobile viewports.
- **[Footer.tsx](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/components/site/Footer.tsx)**:
  - Espresso-colored footer block.
  - Divided into sections: Brand values, detailed operating address, tabular list of hours, site explore links pointing to `/studio`, and links to Instagram, Facebook, and Pinterest.
- **[SparkleMark.tsx](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/components/site/SparkleMark.tsx)**:
  - A utility vector graphics file rendering the brand's signature diamond star shape (`✦`).

---

## 6. Shared State & Core Data: [salon-data.ts](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/lib/salon-data.ts)

Stores the static content structure of the application.
- **`services`**: Multi-dimensional categorized array mapping services into:
  - **Hair**: Signature cuts, blowout styling, special occasion styles.
  - **Color**: Hand-painted balayage, highlights, vivid color, and corrections.
  - **Texture**: Curly cuts, knotless braids, extensions.
  - **Beauty**: Manicures, brow shaping, face/body waxing, permanent makeup.
- **`reviews`**: Client review quotes with tags mapping to their specific service types.
- *Note: Individual stylist staff configurations are completely omitted from client page layout components to align with general booking.*

---

## 7. App Infrastructure, Setup & SSR Resilience

### 7.1. Global Client Entry: [start.ts](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/start.ts)
Binds the TanStack Start instance together. Declares a custom `errorMiddleware` capturing client SSR requests. If rendering fails, it blocks standard crash stacks and intercepts the request to write a custom, user-friendly HTML error page (`renderErrorPage`).

### 7.2. Global Router Config: [router.tsx](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/router.tsx)
Provides a `getRouter()` builder. Initializes the route tree, assigns `QueryClient` context, sets page scroll restoration to `true`, and schedules preloading of routes.

### 7.3. Server Entry Point: [server.ts](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/server.ts)
Handles SSR request pipelines.
- **SSR Error Interception**: Integrates with [error-capture.ts](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/lib/error-capture.ts).
- **H3 Swallowed Error Recovery**: Under standard runtime, the underlying web server framework (`h3`) swallows critical SSR errors and yields generic, uninformative JSON objects. The handler in `server.ts` intercepts these responses, fetches the real crash stack via `consumeLastCapturedError()`, logs the original issue, and serves `renderErrorPage()`.

### 7.4. Error Capturing Mechanism: [error-capture.ts](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/lib/error-capture.ts)
Listens to global `error` and `unhandledrejection` events. It caches errors out-of-band in a temporary object with a Time-To-Live of 5 seconds, allowing the SSR request thread to retrieve the real exception stack when the render fails.

---

## 8. Common Utility Functions & Custom Hooks

- **Class Merger**: [utils.ts](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/lib/utils.ts)
  - Exports `cn(...inputs: ClassValue[])` combining `clsx` and `twMerge`. Used to dynamically override component class definitions.
- **Responsive hook**: [use-mobile.tsx](file:///c:/Users/ahmad/Downloads/abracadabra-artisanal-design-main/abracadabra-artisanal-design-main/src/hooks/use-mobile.tsx)
  - Monitors window resizing boundaries relative to a `768px` width. Returns a real-time boolean `isMobile` to conditionally render components or layouts.
