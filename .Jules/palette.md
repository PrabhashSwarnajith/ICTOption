## 2026-01-20 - Form Accessibility: The Missing Link

**Learning:** React forms often rely on visual state (red borders, text) for validation but completely miss programmatic association. Without `aria-invalid` and `aria-describedby`, screen reader users get no feedback when they make a mistake.
**Action:** Always pair visual error states with `aria-invalid="true"` and link the error message ID via `aria-describedby`.
