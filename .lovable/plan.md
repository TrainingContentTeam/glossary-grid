

# Autism Glossary – Interactive Grid

## Overview
A responsive 3×3 grid glossary displaying 9 autism-related terms, designed to be embedded as an iframe (1920×800) in Articulate Rise. Each card shows a term that can be clicked/tapped to reveal its full definition.

## Design
- **Colors**: Primary `#014aa8` (headers, accents), Secondary `#000f2f` (background, text)
- **Fonts**: **Sora** for term titles, **Roboto** for body/definition text (loaded via Google Fonts)
- **Layout**: 3×3 card grid, centered within 1920×800 viewport, with responsive fallback to 2-column and 1-column on smaller screens

## Glossary Cards (9 Terms)
Each card displays the term name on the front. Clicking a card flips/expands to reveal the full definition. Terms:
1. Autism Spectrum Disorder (ASD)
2. Stimming
3. Neurodivergent
4. Neurotypical
5. Meltdown
6. Sensory Processing
7. Elopement/Wandering
8. Fight or Flight
9. Echolalia

## Interaction
- Cards show the term title by default in a clean, visually appealing card
- Clicking a card reveals the full definition (flip or expand animation)
- Clicking again or clicking a close button returns to the title view
- Smooth transitions for a polished feel

## GitHub Pages Deployment
- Update `vite.config.ts` with a placeholder `base` path (`/REPO_NAME/`) — you'll tell me the actual name once created
- Create `.github/workflows/deploy.yml` with the provided workflow (using `npm install` instead of `npm ci`)

## Technical Notes
- No backend needed — all content is static
- Fully self-contained for iframe embedding
- Remove default app padding/max-width constraints so the glossary fills the viewport

