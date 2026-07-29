# MERN Developer & Instructor Portfolio

A responsive, accessible personal portfolio for a growing MERN Stack developer and web-development instructor. The public site presents projects, teaching services, a learning roadmap, resources, and a validated contact flow without inventing professional claims. Unknown personal details remain visibly marked for replacement.

The repository is split into two phases:

- **Phase 1:** React portfolio frontend. Editable content is kept in typed modules rather than embedded in UI components.
- **Phase 2:** Optional Express/MongoDB contact API scaffold in `server/`. The frontend can still demonstrate its contact experience when no API URL is configured.

## Technology

**Frontend:** React 18, TypeScript, Vite, React Router, Tailwind CSS, Framer Motion, Lucide React, React Hook Form, and Zod.

**Optional API:** Node.js 20+, Express, MongoDB/Mongoose, Zod, Helmet, CORS, rate limiting, and Nodemailer.

**Quality:** ESLint, Prettier, strict TypeScript, responsive layouts, reduced-motion support, keyboard-visible focus, semantic markup, and light/dark themes.

## Quick start

Requirements:

- Node.js 20 or newer
- npm
- MongoDB only if running the optional server

Install and run the frontend:

```bash
npm install
cp .env.example .env
npm run dev
```

Vite prints the local URL, normally `http://localhost:5173`.

Before publishing, replace bracketed values such as `[YOUR NAME]`, `[EMAIL]`, and `[GITHUB URL]` in the typed content files. Replace the resume placeholder in `public/` and update the resume path in the personal data.

## Environment variables

Frontend variables live in the root `.env`:

```env
VITE_CONTACT_API_URL=
VITE_SITE_URL=http://localhost:5173
```

- Leave `VITE_CONTACT_API_URL` blank to use the frontend's local demonstration fallback.
- To use the API, set it to the contact endpoint, for example `http://localhost:5000/api/contact`.
- Only variables prefixed with `VITE_` are available to browser code. Never put database or SMTP credentials in them.

The API has its own environment template:

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

MongoDB must be available at `MONGODB_URI`. SMTP variables are optional: valid submissions are stored even when email notification is not configured. `CLIENT_ORIGIN` accepts a comma-separated allowlist for multiple deployed frontends.

## Commands

From the repository root:

```bash
npm run dev          # frontend development server
npm run build        # type-check and production build
npm run preview      # preview the production build
npm run lint         # ESLint with zero warnings allowed
npm run format       # format supported files
npm run format:check # verify formatting
```

From `server/`:

```bash
npm run dev          # API with Node watch mode
npm start            # API without watch mode
```

## Contact API contract

`POST /api/contact` accepts JSON:

```json
{
  "name": "Example Sender",
  "email": "sender@example.com",
  "subject": "Portfolio enquiry",
  "inquiryType": "General Question",
  "message": "A message containing at least ten characters.",
  "website": ""
}
```

`inquiryType` must be one of: `Job Opportunity`, `Freelance Project`, `Teaching Request`, `Student Mentorship`, `Collaboration`, or `General Question`.

The hidden `website` field is a honeypot and must remain empty for human users. The endpoint validates input, limits each client to five submissions per 15 minutes, stores accepted messages in MongoDB, and optionally sends an SMTP notification. Responses use `{ "success": boolean, "message": string }`; successful storage returns HTTP `201`, validation returns `400`, and rate limiting returns `429`.

Use `GET /api/health` for hosting health checks.

## Project structure

```text
public/                  Static files, resume, robots, and sitemap
src/
  assets/                Local visual assets
  components/
    layout/              Navigation, footer, page shell
    sections/            Home-page feature sections
    ui/                  Reusable interface primitives
  data/                  Typed, editable portfolio content
  hooks/                 Shared React behavior
  lib/                   Validation and utilities
  pages/                 Routed pages and detail views
  types/                 Content contracts
server/
  src/
    config/              MongoDB connection
    controllers/         Contact request behavior
    middleware/          API error handling
    models/              Mongoose contact schema
    routes/              HTTP route definitions and limits
    services/            Optional email notification
```

## Architectural decisions

- **Content outside components:** Personal details, skills, projects, roadmap items, resources, services, timeline entries, and testimonials are data-driven. Updating content does not require rewriting presentation components.
- **Honest placeholders:** Example projects and planned resources are labeled as samples or planned content. Empty testimonials remain hidden instead of presenting fabricated endorsements.
- **Progressive backend:** The static frontend can deploy independently. Setting one public API URL upgrades the contact flow to persistence and email without coupling the rest of the portfolio to MongoDB.
- **Defense in depth:** The client provides user feedback, while the server independently applies Zod validation, a honeypot, payload limits, rate limiting, CORS allowlisting, and security headers.
- **Route-friendly content:** Stable slugs power project and resource detail routes, so content can later move to a CMS without changing public URLs.

## Deployment

### Frontend on Vercel or Netlify

1. Import the repository.
2. Use `npm run build` as the build command and `dist` as the publish directory.
3. Set `VITE_SITE_URL` to the production origin.
4. If deploying the API, set `VITE_CONTACT_API_URL` to its full `/api/contact` endpoint.
5. Configure SPA rewrites so unknown paths serve `/index.html`:
   - Netlify: `/* /index.html 200`
   - Vercel: add a rewrite from `/(.*)` to `/index.html` while allowing static assets.

### API on Render or Railway

1. Create a service with `server` as its root directory.
2. Use `npm install` for install and `npm start` for start.
3. Add the variables from `server/.env.example`.
4. Use a managed MongoDB connection string for `MONGODB_URI`.
5. Set `CLIENT_ORIGIN` to the exact frontend origin; do not use `*` in production.
6. Configure `/api/health` as the health-check path.

Keep `.env` files out of source control and rotate any credential that is accidentally committed.

## Pre-deployment checklist

- Replace all bracketed personal placeholders with verified information.
- Replace the resume and profile/project placeholder assets.
- Confirm project live and repository links.
- Update canonical site URL, sitemap, social preview metadata, and contact email.
- Run `npm run lint`, `npm run format:check`, and `npm run build`.
- Test at 375, 768, 1024, and 1440 px in both themes.
- Test keyboard navigation, reduced motion, form errors, API failure, and the no-API fallback.
- Confirm MongoDB indexes, CORS origins, rate limits, and SMTP delivery in production.

## Intentionally deferred

The following are future Phase 2 features, not claims about the current build: an admin dashboard, MongoDB-backed CMS, blog publishing workflow, student registration and enrollment, authentication, student dashboard, video lessons, assignment submission, newsletter, appointment booking, analytics, multilingual support, and payments.

Project/article management models and routes should be introduced only when the matching authenticated admin workflow is designed. This avoids exposing unfinished write APIs or maintaining duplicate content sources.
