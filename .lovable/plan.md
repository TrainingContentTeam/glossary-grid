

# Add Underlines, Larger Definition Font, and Progress Indicator

## Changes

### 1. Underline term titles on card fronts (`GlossaryCard.tsx`)
- Add `underline decoration-primary-foreground/40 underline-offset-4` to the `<h3>` on the front face so each term has a subtle underline hint.

### 2. Increase definition font size (`GlossaryCard.tsx`)
- Change the definition `<p>` from `text-xs` to `text-sm` for better readability on the card backs.

### 3. Add a progress indicator (`Index.tsx`)
- Add a bar at the bottom of the viewport showing how many cards have been flipped (e.g., "3 of 9 terms explored").
- Use the existing `Progress` component from `src/components/ui/progress.tsx` with value based on `flippedTerms.size / glossaryTerms.length * 100`.
- The bar sits fixed at the bottom, outside the grid, styled to match the dark theme.
- Once all 9 are flipped, the text changes to "All terms explored!" with a checkmark.

### Files to Modify

**`src/components/GlossaryCard.tsx`**
- Add underline classes to the front-face `<h3>`
- Change definition text from `text-xs` to `text-sm`

**`src/pages/Index.tsx`**
- Import `Progress` component
- Add a bottom bar showing `{flippedTerms.size} of {glossaryTerms.length} terms explored` with a progress bar
- Adjust layout: reduce main content height slightly to make room for the progress bar at the bottom (e.g., main grid area becomes `h-[750px]` with a `h-[50px]` progress footer)

