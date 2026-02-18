

# Convert Carousel Back to 3x3 Grid at 1920x700

## What Changes
Switch from the single-card carousel back to a 3x3 grid of smaller flip cards, all fitting within a 1920x700 viewport with no scrolling. The existing design (3D flip, progress bar, styling) stays intact -- cards just get smaller.

## Technical Details

### 1. `src/pages/Index.tsx`
- Change main container height from `h-[720px]` to `h-[700px]`
- Remove all carousel imports and components (`Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`, `CarouselApi`)
- Remove carousel API state (`api`, `current`, `setCurrent`, the `useEffect` for carousel)
- Remove dot indicators section
- Replace carousel with a 3x3 CSS grid: `grid grid-cols-3 gap-3` with fixed card heights (~180px) to fit within the viewport
- Keep progress bar at the bottom

### 2. `src/components/GlossaryCard.tsx`
- Reduce front text size from `text-3xl md:text-4xl` to `text-base md:text-lg`
- Reduce front padding from `p-10` to `p-4`
- Reduce back padding from `p-8` to `p-4`
- Reduce back title margin, definition text size to `text-xs md:text-sm`
- Shrink icon sizes (RotateCcw, X) from `h-5 w-5` to `h-3.5 w-3.5`
- All existing styling (colors, 3D flip, shadows, hover effects, fonts) preserved

### Layout
```text
+--------------------------------------------------+
|  [Card 1]  [Card 2]  [Card 3]                    |
|  [Card 4]  [Card 5]  [Card 6]                    |
|  [Card 7]  [Card 8]  [Card 9]                    |
|                                                    |
|  ================================================  |
|  Progress: 3 of 9 explored                        |
+--------------------------------------------------+
```

