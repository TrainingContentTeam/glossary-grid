
# Add Scrollbars to Long Card Definitions

## What Changes
Wrap the definition text on the back of each glossary card in a `ScrollArea` component so long definitions become scrollable instead of being cut off by `overflow-hidden`.

## Technical Details

### File: `src/components/GlossaryCard.tsx`
- Import `ScrollArea` from `@/components/ui/scroll-area`
- Wrap the `<p>` definition text (line 55-57) in a `<ScrollArea className="flex-1 overflow-auto">` so it scrolls within the available card space
- The back side already uses `flex flex-col` and `overflow-hidden`, so making the definition area `flex-1` will fill remaining space and scroll when content overflows
- Add `onClick={e => e.stopPropagation()}` on the ScrollArea so scrolling doesn't accidentally flip the card back
