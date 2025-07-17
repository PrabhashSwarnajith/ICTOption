# Color Palette Reference

This project uses a custom color palette defined in `tailwind.config.js`. Here's how to use each color:

## Color Usage Guide

### Primary Color - Black (#000000)

**Usage**: Main backgrounds, text, strong contrast

```jsx
// Background
<div className="bg-primary">
// Text
<p className="text-primary">
// Border
<div className="border-primary">
```

### Secondary Color - Red (#FF0000)

**Usage**: Highlights, accents, buttons, attention

```jsx
// Background
<div className="bg-secondary">
// Text
<p className="text-secondary">
// Border
<div className="border-secondary">
```

### Accent Color - White (#FFFFFF)

**Usage**: Canvas, cards, text, clean minimalistic feel

```jsx
// Background
<div className="bg-accent">
// Text
<p className="text-accent">
// Border
<div className="border-accent">
```

### Neutral Dark - Dark Gray (#2E2E2E)

**Usage**: Backgrounds, footers, readable dark text

```jsx
// Background
<div className="bg-neutral-dark">
// Text
<p className="text-neutral-dark">
// Border
<div className="border-neutral-dark">
```

### Neutral Light - Light Gray (#F5F5F5)

**Usage**: Card backgrounds, section dividers

```jsx
// Background
<div className="bg-neutral-light">
// Text
<p className="text-neutral-light">
// Border
<div className="border-neutral-light">
```

### Contrast - White (#FFFFFF)

**Usage**: Base canvas, clean minimalistic feel

```jsx
// Background
<div className="bg-contrast">
// Text
<p className="text-contrast">
// Border
<div className="border-contrast">
```

## Color Palette Preview

| Color Name    | HEX Code | Visual Preview | Usage Notes                              |
| ------------- | -------- | -------------- | ---------------------------------------- |
| Primary       | #000000  | ⚫ Black       | Main backgrounds, text, strong contrast  |
| Secondary     | #FF0000  | � Red          | Highlights, accents, buttons, attention  |
| Accent        | #FFFFFF  | ⬜ White       | Canvas, cards, text, clean minimalistic  |
| Neutral Dark  | #2E2E2E  | ⚫ Dark Gray   | Backgrounds, footers, readable dark text |
| Neutral Light | #F5F5F5  | ⚪ Light Gray  | Card backgrounds, section dividers       |
| Contrast      | #FFFFFF  | ⬜ White       | Base canvas, clean minimalistic feel     |

## Examples in Use

The current `App.jsx` demonstrates usage of all colors:

- Header uses `bg-primary` (black) for the main background
- Secondary color (`bg-secondary`, red) is used for highlights and buttons
- Accent color (`bg-accent`, white) is used for cards and text
- Neutral colors are used for cards and footer
- Contrast (white) is the main page background
