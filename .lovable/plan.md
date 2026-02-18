

# Update GitHub Pages Base Path

## Change

Replace the placeholder `REPO_NAME` in `vite.config.ts` with your actual repository name `glossary-grid`.

### File: `vite.config.ts` (line 8)

**Before:**
```
base: mode === "production" ? "/REPO_NAME/" : "/",
```

**After:**
```
base: mode === "production" ? "/glossary-grid/" : "/",
```

This single-line change ensures production builds reference assets from the correct `/glossary-grid/` subpath on GitHub Pages.

