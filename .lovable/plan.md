

# Fix Accessibility Colors, Mirrored Text, and Remove Scrollbars

## Problems Identified
1. **Mirrored/reversed text on card backs** — The back-face text renders backwards because the child content inherits the parent's `rotateY(180deg)` transform without counter-rotating.
2. **Scrollbars on card backs** — Long definitions (especially ASD, Elopement, Fight or Flight) overflow the fixed card height, causing scrollbars.
3. **Poor contrast on card back header** — The term title on the back uses `text-accent` (a medium blue) on a blue `bg-card` background, failing WCAG contrast requirements.

## Plan

### 1. Fix mirrored text on card backs
- The back face `div` already has `[transform:rotateY(180deg)]`, but the text still appears mirrored in the screenshot. This is likely because `backface-hidden` and `transform-style-3d` are not being applied correctly via Tailwind utility classes (they may not exist by default).
- Add explicit CSS for `.backface-hidden` and `.transform-style-3d` in `src/index.css` to ensure these properties work:
  - `backface-visibility: hidden`
  - `transform-style: preserve-3d`
  - `perspective` on the parent

### 2. Remove scrollbars and fit content
- Remove `overflow-y-auto` from the card back
- Add `overflow-hidden` instead so no scrollbar appears
- Reduce the definition font size slightly (from `text-sm` to `text-xs`) so longer definitions fit
- Increase card row height from `200px`/`220px` to `240px` to give more room
- Set the main container to `h-[800px]` (the target iframe size) instead of `min-h-screen`, so the grid fills exactly 800px height
- Adjust padding and gaps to maximize usable card space

### 3. Improve color accessibility
- **Card back title**: Change from `text-accent` (blue-on-blue, poor contrast) to `text-white font-bold` for clear readability
- **Card back body text**: Keep `text-white/90` which provides good contrast on the blue card background
- **Close button**: Change from `text-muted-foreground` to `text-white/70 hover:text-white` for visibility
- **Card front**: White text on `#014aa8` blue already passes WCAG AA (contrast ratio ~5.5:1) — no change needed

### Files to Modify

**`src/index.css`** — Add utility classes for 3D transforms:
- `.backface-hidden { backface-visibility: hidden; }`
- `.transform-style-3d { transform-style: preserve-3d; }`

**`src/components/GlossaryCard.tsx`**:
- Fix text colors on card back for accessibility
- Replace `overflow-y-auto` with `overflow-hidden`
- Reduce definition text size for long content to fit

**`src/pages/Index.tsx`**:
- Set container to `h-[800px]` instead of `min-h-screen`
- Increase row height and adjust gaps to fill the 800px frame without scrolling
- Add `overflow-hidden` to the main element to prevent any page-level scrollbar

