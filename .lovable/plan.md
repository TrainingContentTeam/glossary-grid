

# Convert Glossary Grid to Single-Card Carousel

## What Changes
Instead of showing all 9 cards in a 3x3 grid, the glossary will display one card at a time with left/right navigation arrows to move between cards. A dot indicator will show which card you're on.

## Technical Details

### File: `src/pages/Index.tsx`
- Remove the 3-column grid layout
- Import and use the existing `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` components from `src/components/ui/carousel.tsx`
- Wrap each `GlossaryCard` in a `CarouselItem`
- Add dot indicators below the carousel showing current position (using the Embla carousel API)
- Center the single card in the 1920x720 viewport
- Keep the progress bar at the bottom

### File: `src/components/GlossaryCard.tsx`
- Adjust card sizing to look good as a single centered card (larger text, more padding)
- Card will fill the carousel item area with a max-width constraint for readability

### Layout at 1920x720
```text
+--------------------------------------------------+
|                                                    |
|          [<]   +----------------+   [>]           |
|                |                |                   |
|                |  Glossary Card |                   |
|                |   (1 of 9)    |                   |
|                +----------------+                   |
|              o o o * o o o o o                      |
|                                                    |
|  ================================================  |
|  Progress: 3 of 9 explored                        |
+--------------------------------------------------+
```

### Changes Summary
1. **`src/pages/Index.tsx`** -- Replace grid with Carousel components, add dot indicators via carousel API, center the carousel vertically
2. **`src/components/GlossaryCard.tsx`** -- Increase text sizes and padding for single-card display; set a fixed height so the card fills the carousel area nicely

