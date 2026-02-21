# m7base

A CSS library that gives websites a quick styling with modern CSS resets, base styles and optional component class styles. It exports a single CSS file.

## Installation

### npm

```bash
npm install @bremmdev/m7base
```

Then just import the `@bremmdev/m7base.css` CSS file in your code.

Alternatively, you can download the `m7base.css` file in /dist

## Usage

m7base provides:

1. **CSS Reset** - Modern, opinionated reset for app-style layouts
2. **Base Styles** - Sensible defaults for typography, forms, and buttons
3. **Component Classes** - Ready-to-use component styles
4. **Utility Classes** - Spacing, typography, layout utilities
5. **CSS Variables** - Customizable design tokens

### Components

m7base provides ready-to-use component classes:

- **Accordion** - Styled native `<details>` and `<summary>` elements
- **Badge** - Small labels/tags (`badge`, `badge-outline`, `badge-primary`)
- **Buttons** - Multiple button styles (`btn-outline`, `btn-primary`, `btn-primary-outline`, `btn-destructive`)
- **Card** - Container with padding, border, and rounded corners
- **Custom Select** - Fully customizable select element using experimental browser features
- **Forms** - Form control grouping (`form-control`) with styled inputs, textareas, and selects
- **Notification** - Alert messages (`notification-success`, `notification-error`, `notification-warning`, `notification-info`)
- **Page Container** - Centered content with max-width (`page-container`)

For detailed examples and usage, visit the [documentation site](https://m7base.bremm.dev).

### Utilities

m7base includes comprehensive utility classes:

- **Spacing** - Margin, padding, and gap utilities (values 1-16)
- **Typography** - Text sizes (xs to 5xl), font weights, text alignment, colors, and highlight
- **Layout** - Flexbox utilities (display, direction, wrap, alignment, grow/shrink)
- **Background colors** - Background color utilities

For detailed examples and usage, visit the [documentation site](https://m7base.bremm.dev).

### Dark Mode

m7base includes full dark mode support. The theme is controlled via the `data-theme` attribute on the root element.

**Enabling dark mode:**

```html
<!-- Light mode (default) -->
<html>
  <!-- ... -->
</html>

<!-- Dark mode -->
<html data-theme="dark">
  <!-- ... -->
</html>
```

### CSS Variables

m7base uses CSS custom properties (variables) that you can override to customize the design. All color variables are defined separately for light and dark modes.

**Light mode colors (default):**

```css
:root {
  --color-foreground: oklch(13% 0.028 261.692);
  --color-foreground-hover: color-mix(
    in oklch,
    var(--color-foreground) 80%,
    white 20%
  );
  --color-foreground-inverted: oklch(1 0 0);
  --color-background: oklch(1 0 0);
  --color-outline-hover: color-mix(
    in oklch,
    var(--color-background) 95%,
    black 5%
  );
  --color-accent: oklch(0.58 0.16 85);
  --color-accent-hover: color-mix(in oklch, var(--color-accent) 90%, white 10%);
  --color-accent-outline: color-mix(
    in oklch,
    var(--color-accent) 10%,
    white 90%
  );
  --color-destructive: oklch(50.5% 0.213 27.518);
  --color-destructive-hover: color-mix(
    in oklch,
    var(--color-destructive) 90%,
    white 10%
  );
  --color-border: oklch(37.2% 0.044 257.287);
  --color-surface: oklch(98.4% 0.003 247.858);
  --color-badge: oklch(92.9% 0.013 255.508);
}
```

**Dark mode colors:**

```css
:root[data-theme="dark"] {
  --color-foreground: oklch(92.9% 0.013 255.508);
  --color-foreground-hover: color-mix(
    in oklch,
    var(--color-foreground) 80%,
    black 20%
  );
  --color-foreground-inverted: oklch(13% 0.028 261.692);
  --color-background: oklch(13% 0.028 261.692);
  --color-outline-hover: color-mix(
    in oklch,
    var(--color-background) 95%,
    white 5%
  );
  --color-accent: oklch(92.4% 0.12 95.746);
  --color-accent-hover: color-mix(in oklch, var(--color-accent) 90%, white 10%);
  --color-accent-outline: color-mix(
    in oklch,
    var(--color-accent) 14%,
    var(--color-background) 86%
  );
  --color-destructive: oklch(64.5% 0.246 16.439);
  --color-destructive-hover: color-mix(
    in oklch,
    var(--color-destructive) 90%,
    white 10%
  );
  --color-border: oklch(45% 0.044 257.287);
  --color-surface: oklch(20.8% 0.042 265.755);
  --color-badge: oklch(27.8% 0.033 256.848);
}
```

**Spacing and typography variables:**

```css
:root {
  /* Spacing scale (0.25rem increments) */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  /* ... up to --spacing-16: 4rem */

  /* Typography */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 3rem;
  --text-5xl: 4rem;

  /* Layout */
  --page-content-width: 90rem;
}
```

### Customizing Theme Colors

To customize the theme colors, override the CSS variables for both light and dark modes.

**Customizing the accent color:**

```css
:root {
  /* Light mode accent */
  --color-accent: oklch(60% 0.2 250);
  --color-accent-hover: color-mix(in oklch, var(--color-accent) 90%, white 10%);
  --color-accent-outline: color-mix(
    in oklch,
    var(--color-accent) 10%,
    white 90%
  );
}

:root[data-theme="dark"] {
  /* Dark mode accent - typically brighter for visibility on dark backgrounds */
  --color-accent: oklch(75% 0.18 250);
  --color-accent-hover: color-mix(in oklch, var(--color-accent) 90%, white 10%);
  --color-accent-outline: color-mix(
    in oklch,
    var(--color-accent) 14%,
    var(--color-background) 86%
  );
}
```

**Customizing the full color scheme:**

```css
:root {
  /* Light mode - custom blue theme */
  --color-foreground: oklch(20% 0.02 240);
  --color-background: oklch(98% 0.01 240);
  --color-accent: oklch(55% 0.2 240);
  --color-border: oklch(80% 0.02 240);
  --color-surface: oklch(96% 0.015 240);
}

:root[data-theme="dark"] {
  /* Dark mode - custom blue theme */
  --color-foreground: oklch(90% 0.02 240);
  --color-background: oklch(15% 0.03 240);
  --color-accent: oklch(70% 0.18 240);
  --color-border: oklch(40% 0.03 240);
  --color-surface: oklch(22% 0.035 240);
}
```

**Tips for dark mode colors:**

- Increase the lightness of accent and destructive colors for better visibility on dark backgrounds
- Invert foreground and background colors
- Adjust border colors to be lighter (higher lightness value) for contrast against dark backgrounds
- Use `color-mix()` with `black` instead of `white` for hover states on light-colored elements

### Base Styles

m7base includes sensible defaults for:

- **Headings** (h1-h4) - Pre-styled with appropriate sizes and weights
- **Form elements** - Inputs, textareas, and selects with consistent styling
- **Buttons** - Default button styles with hover and focus states
- **Focus states** - Accessible focus indicators using `:focus-visible`
- **Typography** - System font stack and base line-height

### CSS Layers

m7base uses CSS layers to organize styles in a specific order:

1. `reset` - CSS reset styles
2. `base` - Base element styles
3. `components` - Component classes
4. `utilities` - Utility classes
5. `overrides` - For your custom overrides

This allows you to override any styles easily by placing your custom CSS in the `overrides` layer:

```css
@layer overrides {
  .btn-primary {
    background-color: blue;
  }
}
```

## Browser Support

m7base targets modern browsers:

- Latest versions of Chrome, Firefox, Safari, and Edge
- No Internet Explorer 11 support
- Modern CSS features are automatically transformed for compatibility

The library uses modern CSS features like:

- CSS Custom Properties (CSS Variables)
- CSS Layers (`@layer`)
- `oklch()` color space
- `color-mix()` function
- Logical properties (`margin-inline`, `padding-block`, etc.)

These features are automatically transformed by Lightning CSS based on your browser targets.

## Build Setup

This project uses [Lightning CSS](https://lightningcss.dev) for bundling, minification, and CSS transformation. Lightning CSS is an extremely fast CSS parser, transformer, bundler, and minifier written in Rust.

### Features

- **Bundling**: Combines all `@import` statements into a single CSS file
- **Minification**: Reduces file size through aggressive optimization
- **Autoprefixing**: Automatically adds vendor prefixes based on browser targets
- **Modern CSS Support**: Transforms modern CSS features to compatible syntax
- **CSS Layers**: Preserves CSS layer structure (`@layer`)

### Configuration

#### Output

- **Production**: `dist/m7base.css` - Minified, bundled CSS file
- **Development**: `dist/m7base.css` - Unminified, bundled CSS file
- **Watch mode**: `dist/index.css` - Automatically updates on changes

### How It Works

1. Lightning CSS reads `styles/index.css` as the entry point
2. All `@import` statements are resolved and bundled
3. CSS layers are preserved (`@layer reset, base, components, utilities, overrides`)
4. Modern CSS features are transformed based on browser targets
5. Vendor prefixes are automatically added where needed
6. Output is minified (in production builds) and written to `dist/m7base.css`

### Project Structure

```
m7base/
├── styles/
│   ├── index.css      # Main entry point with @import statements
│   └── reset.css      # CSS reset styles
├── dist/
│   └── m7base.css     # Built output (generated)
└── package.json
```
