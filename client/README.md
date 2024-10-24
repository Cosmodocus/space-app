# Client-Side App

This is a client-side application built with Next.js, utilizing Tailwind CSS for styling and various components for a seamless user experience.

## Running the Client-Side App

To run the client-side application locally, follow these steps:

1. Navigate to the client directory:
   ```bash
   cd client

2. Install the dependencies:
    ```bash
    npm run i

3. Start the development server:
    npm run dev

## File Structuring

src/
  ├── app/                  # App router
  │   ├── search/           # Search page
  │   ├── layout.tsx        # Layout component for the app
  │   └── page.tsx          # Home page component
  ├── components/           # UI components
  │   ├── ui/               # Components from Shadcn & Aceturnity UI
  │   ├── Header.tsx        # Generic modular header for customizing titles on pages
  │   ├── NasaCard.tsx      # Card component that renders a media type, title, description, and more
  │   ├── NasaCardModal.tsx  # Modal component for additional info about NasaCard
  │   ├── NasaCardSkeleton.tsx # Skeleton loader for better UX resembling NasaCard shape
  │   ├── SearchBar.tsx     # Input component for user search queries
  │   └── SearchOptions.tsx  # Options for easier access to the NASA API search, connected to SearchBar
  ├── layouts/              # Layout components
  │   └── MainLayout.tsx     # Consists of sidebar, floating dock, and main content as children
  ├── services/             # Logic for connecting to external data or API
  ├── next.config.ts        # Configuration file for Next.js
  ├── package.json          # Contains project metadata and dependencies
  ├── package-lock.json     # Locks the versions of installed packages
  ├── tailwind.config.ts     # Configuration file for Tailwind CSS
  └── tsconfig.json         # Configuration file for TypeScript