

# Fix White Screen on GitHub Pages

## Problem
The app works in Lovable's preview but shows a white screen on GitHub Pages because `BrowserRouter` defaults to matching routes from `/`, while GitHub Pages serves from `/glossary-grid/`. The router can't find a matching route, so nothing renders.

## Solution

### File: `src/App.tsx`

Add the `basename` prop to `BrowserRouter` so it knows about the `/glossary-grid/` subpath in production:

**Before:**
```tsx
<BrowserRouter>
```

**After:**
```tsx
<BrowserRouter basename={import.meta.env.BASE_URL}>
```

`import.meta.env.BASE_URL` is automatically set by Vite from the `base` config — it will be `/glossary-grid/` in production and `/` in development. This is a single-line change.

