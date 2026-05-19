# TouchSky Premium SPA

Enterprise-grade marketing SPA built with React, TypeScript, Tailwind CSS, MUI, Framer Motion, and Vite.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — dev server and production builds
- **Tailwind CSS** — utility-first styling
- **MUI v5** — Dialog, TextField, Accordion
- **Framer Motion** — animations and scroll reveals
- **React Router** — client-side routing
- **Zustand** — theme and UI state
- **Axios** — API layer
- **React Hook Form** + **Zod** — contact form validation
- **Lucide React** — icons

## Getting Started

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check and production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_APP_NAME` | Application name |
| `VITE_API_BASE_URL` | API base URL (omit for mock contact submissions) |
| `VITE_CONTACT_ENDPOINT` | Contact form endpoint path |

## Project Structure

```
src/
├── components/
│   ├── common/       # SEOHead, ThemeToggle, Toast, ScrollReveal
│   ├── ui/           # Button, Card, Input, Dialog, etc.
│   ├── layouts/      # MainLayout, Navbar, Footer
│   ├── sections/     # Homepage sections
│   └── providers/    # MUI ThemeProvider
├── constants/        # Design tokens (colors, spacing, etc.)
├── theme/            # MUI + Tailwind theme bridge
├── features/         # Feature modules (contact form)
├── hooks/            # Shared hooks
├── services/         # Axios API layer
├── store/            # Zustand global state
├── types/            # TypeScript interfaces
├── utils/            # Utilities (cn, a11y)
├── data/             # Placeholder content
├── pages/            # Route pages
└── routes/           # App routing
```

## Design System

All visual tokens live in `src/constants/`. Components should use:

- Tailwind semantic classes (`bg-primary`, `text-foreground`)
- Token imports from `constants/*`
- MUI theme synced via `AppThemeProvider`

**Do not hardcode** colors, spacing, or shadows in section components.

## Dark Mode

Toggle via navbar control. Persists to `localStorage`. Supports `light`, `dark`, and `system` preference.

## Contact API

Without `VITE_API_BASE_URL`, the contact form uses a mock submission (1.2s delay, success toast). Set the env vars to POST to a real backend.

## License

Private — TouchSky Technologies
