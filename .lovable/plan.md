

# Add Multiple postMessage Formats for Completion

## What Changes
Add two additional `postMessage` calls when all cards are flipped, improving compatibility with different LMS platforms (e.g., Articulate Rise).

## Technical Details

### File: `src/pages/Index.tsx` (lines 22-23)
- Keep the existing `{ type: 'complete' }` message
- Add `{ action: 'completed' }` as a second message
- Add `'complete'` (plain string) as a third message

The updated useEffect block will send all three formats when `flippedTerms.size === glossaryTerms.length`.

