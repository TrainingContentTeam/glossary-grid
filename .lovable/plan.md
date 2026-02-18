

# Add Flip Icon and Completion Tracking

## Changes

### 1. Add flip icon to card fronts (`src/components/GlossaryCard.tsx`)
- Import `RotateCcw` (or `FlipHorizontal`) from `lucide-react`
- Add the icon to the bottom-right corner of the front face as a visual hint to flip
- Style it subtly (small, semi-transparent white)

### 2. Track flipped cards and send completion message

**In `src/pages/Index.tsx`:**
- Add a `Set` state to track which terms have been flipped at least once
- Pass an `onFlip` callback to each `GlossaryCard`
- When the Set reaches size 9, call `window.parent.postMessage({ type: 'complete' }, '*')`
- Use a `useEffect` watching the Set size to trigger the message exactly once

**In `src/components/GlossaryCard.tsx`:**
- Accept an optional `onFlip` prop
- Call `onFlip(term.term)` the first time a card is flipped to its back

### Technical Details

```text
Index.tsx
  - flippedTerms: Set<string> (state)
  - handleFlip(term): adds term to set
  - useEffect: when flippedTerms.size === 9, postMessage + flag to prevent re-firing

GlossaryCard.tsx
  - props: { term, onFlip? }
  - onClick: flip card, if flipping to back -> call onFlip(term.term)
  - Front face: add <RotateCcw> icon bottom-right corner
```

No audio tracking needed -- completion fires once all 9 cards have been flipped at least once.

