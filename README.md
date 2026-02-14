# m7base

A CSS library that gives websites a quick styling with modern CSS resets, base styles and optional component class styles. It exports a single CSS file.

## Installation

### npm

```bash
npm install @bremmdev/m7base
```

Then just import the `m7base.css' CSS file in your code.

## Usage

m7base provides:

1. **CSS Reset** - Modern, opinionated reset for app-style layouts
2. **Base Styles** - Sensible defaults for typography, forms, and buttons
3. **Component Classes** - Ready-to-use component styles
4. **Utility Classes** - Spacing, typography, layout utilities
5. **CSS Variables** - Customizable design tokens

### Components

#### Accordion

m7base provides styling for native HTML `<details>` and `<summary>` elements. No classes are needed - just use the semantic HTML elements:

```html
<details>
  <summary>This is the title of the accordion</summary>
  <p>This is the content of the accordion. It can be as long as you want.</p>
</details>
```

#### Badge

Use the `badge` class to create small labels or tags for categories, status indicators, or counts:

```html
<!-- Default badge -->
<span class="badge">Default</span>

<!-- Outline badge -->
<span class="badge badge-outline">Outline</span>

<!-- Primary badge -->
<span class="badge badge-primary">Primary</span>
```

#### Buttons

m7base provides several button styles:

```html
<!-- Default button -->
<button>Default</button>

<!-- Outline button -->
<button class="btn-outline">Outline</button>

<!-- Primary button -->
<button class="btn-primary">Primary</button>

<!-- Primary outline button -->
<button class="btn-primary-outline">Primary Outline</button>

<!-- Destructive button -->git ad
<button class="btn-destructive">Destructive</button>
```

Customize the primary button by overriding the CSS variable `--color-accent`.

**Disabled buttons:**

All button styles support the `disabled` attribute:

```html
<button disabled>Default</button>
<button class="btn-outline" disabled>Outline</button>
<button class="btn-primary" disabled>Primary</button>
<button class="btn-primary-outline" disabled>Primary Outline</button>
<button class="btn-destructive" disabled>Destructive</button>
```

#### Card

Use the `card` class to create a container with padding, border, and rounded corners. By default, the card is as wide as its content. Children are stacked vertically with a gap of 0.5rem:

```html
<!-- Basic card -->
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>
```

#### Forms

Use the `form-control` class to group labels and inputs and give them some basic styling. Works with text inputs, textareas, and select elements:

```html
<form>
  <div class="form-control">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" />
  </div>
  <div class="form-control">
    <label for="message">Message</label>
    <textarea id="message" name="message"></textarea>
  </div>
  <div class="form-control">
    <label for="country">Country</label>
    <select name="country" id="country">
      <option value="usa">USA</option>
      <option value="germany">Germany</option>
    </select>
  </div>
</form>
```

#### Page Container

Use `page-container` to center content with a max-width:

```html
<main class="page-container">
  <!-- Your content here -->
</main>
```

### Utilities

#### Spacing

m7base includes a comprehensive spacing system using CSS variables. Spacing values range from `1` (0.25rem) to `16` (4rem).

**Margin utilities:**

```html
<!-- All sides -->
<div class="m-4">Margin 4</div>

<!-- Horizontal (inline) -->
<div class="mx-4">Horizontal margin</div>

<!-- Vertical (block) -->
<div class="my-4">Vertical margin</div>

<!-- Individual sides -->
<div class="mt-4">Top margin</div>
<div class="mb-4">Bottom margin</div>
<div class="ml-4">Left margin</div>
<div class="mr-4">Right margin</div>

<!-- Auto margins -->
<div class="mx-auto">Centered</div>
```

**Padding utilities:**

```html
<!-- All sides -->
<div class="p-4">Padding 4</div>

<!-- Horizontal (inline) -->
<div class="px-4">Horizontal padding</div>

<!-- Vertical (block) -->
<div class="py-4">Vertical padding</div>

<!-- Individual sides -->
<div class="pt-4">Top padding</div>
<div class="pb-4">Bottom padding</div>
<div class="pl-4">Left padding</div>
<div class="pr-4">Right padding</div>
```

**Gap utilities (for flexbox/grid):**

```html
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Column and row gaps -->
<div class="flex gap-x-4 gap-y-2">
  <!-- ... -->
</div>
```

#### Typography

**Headings:**

Use the `h1`, `h2`, `h3`, and `h4` elements to create headings. The font weight is set to 500 and sizes are fluidly scaled between mobile and desktop:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
```

**Text sizes:**

Text size classes scale fluidly between mobile and desktop:

```html
<p class="text-xs">Extra small</p>
<p class="text-sm">Small</p>
<p class="text-base">Base</p>
<p class="text-lg">Large</p>
<p class="text-xl">Extra large</p>
<p class="text-2xl">2XL</p>
<p class="text-3xl">3XL</p>
<p class="text-4xl">4XL</p>
<p class="text-5xl">5XL</p>
```

Text size pixel ranges (mobile → desktop):

- `.text-xs` — 11.2px → 12px
- `.text-sm` — 12.8px → 14px
- `.text-base` — 14.4px → 16px
- `.text-lg` — 16px → 18px
- `.text-xl` — 17.6px → 20px
- `.text-2xl` — 20px → 24px
- `.text-3xl` — 24px → 32px
- `.text-4xl` — 28px → 48px
- `.text-5xl` — 32px → 64px

**Font weights:**

```html
<p class="font-normal">Normal weight</p>
<p class="font-medium">Medium weight</p>
<p class="font-bold">Bold weight</p>
```

**Text alignment:**

```html
<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>
```

**Text colors:**

```html
<p class="text-accent">Accent color</p>
```

#### Layout

**Flexbox utilities:**

```html
<!-- Display flex -->
<div class="flex">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Flex direction -->
<div class="flex flex-col">Column</div>
<div class="flex flex-row">Row</div>

<!-- Flex wrap -->
<div class="flex flex-wrap">Wrap</div>
<div class="flex flex-nowrap">No wrap</div>

<!-- Alignment -->
<div class="flex flex-center">Centered</div>
<div class="flex flex-between">Space between</div>
<div class="flex items-center">Items centered</div>

<!-- Flex grow/shrink -->
<div class="flex-grow">Grows</div>
<div class="flex-shrink">Shrinks</div>
```

**Background colors:**

```html
<div class="bg-accent">Accent background</div>
```

### CSS Variables

m7base uses CSS custom properties (variables) that you can override to customize the design:

```css
:root {
  /* Colors */
  --color-foreground: oklch(13% 0.028 261.692);
  --color-foreground-hover: color-mix(
    in oklch,
    var(--color-foreground) 80%,
    white 20%
  );
  --color-foreground-inverted: oklch(1 0 0);
  --color-background: oklch(1 0 0);
  --color-accent: oklch(51.8% 0.253 323.949);
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

**Customizing colors:**

```css
:root {
  --color-accent: oklch(60% 0.2 200); /* Your custom accent color */
  --color-foreground: oklch(20% 0.02 0); /* Your custom text color */
}
```

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
