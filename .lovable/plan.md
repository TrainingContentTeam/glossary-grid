

# Fix Arrow and Text Visibility

## Problem
After changing the background to light gray (`#f2f4f6`), the carousel arrows and text are invisible because the color scheme still uses white foreground text and light-colored UI elements.

## Changes

### 1. `src/index.css` -- Update CSS variables for light background
- Change `--foreground` to a dark color (e.g., `222 47% 11%`) so text is readable
- Update `--muted-foreground` to a visible gray
- Update `--card` colors if needed so cards still look good
- Update `--border` and other variables to work with the light background

### 2. `src/pages/Index.tsx` -- Style the carousel arrows explicitly
- Add className overrides to `CarouselPrevious` and `CarouselNext` to ensure they have a visible background, border, and dark icon color (e.g., `bg-white border border-gray-300 text-gray-700 shadow-sm hover:bg-gray-100`)
- This ensures arrows are clearly visible regardless of theme variables

