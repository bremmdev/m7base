
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <section className="text-center">
        <h2 className="text-accent text-center">Installation</h2>

        <p className="my-8">Install <span className="font-bold">m7base</span> using npm:</p>
        <pre><code>npm install @bremmdev/m7base</code></pre>

        <p className="my-8">Then import the CSS file in your code:</p>
        <pre><code>import '@bremmdev/m7base.css'</code></pre>

        <p className="my-8">Alternatively, you can <a href="m7base.css" download="m7base.css">download this CSS file</a> and
          include it in your project.</p>
      </section>

      <section className="text-center">
        <h2 className="text-accent text-center">CSS Variables, dark mode and layers</h2>
        <p className="my-8">m7base uses CSS custom properties that you can override to customize the design. All color
          variables are defined separately for light and dark modes.</p>
        <h3 className="text-accent my-8">Light mode colors</h3>
        <pre><code>{`:root {
  --color-foreground: oklch(13% 0.028 261.692);
  --color-foreground-inverted: oklch(1 0 0);
  --color-background: oklch(1 0 0);
  --color-accent: oklch(0.58 0.16 85);
  --color-destructive: oklch(50.5% 0.213 27.518);
  --color-border: oklch(37.2% 0.044 257.287);
  --color-surface: oklch(98.4% 0.003 247.858);
  --color-badge: oklch(92.9% 0.013 255.508);
}`}</code></pre>

        <h3 className="text-accent my-8">Dark mode colors</h3>
        <pre><code>{`:root[data-theme="dark"] {
  --color-foreground: oklch(92.9% 0.013 255.508);
  --color-foreground-inverted: oklch(13% 0.028 261.692);
  --color-background: oklch(13% 0.028 261.692);
  --color-accent: oklch(92.4% 0.12 95.746);
  --color-destructive: oklch(64.5% 0.246 16.439);
  --color-border: oklch(45% 0.044 257.287);
  --color-surface: oklch(20.8% 0.042 265.755);
  --color-badge: oklch(27.8% 0.033 256.848);
}`}</code></pre>

        <h3 className="text-accent mt-8">Customizing theme colors</h3>
        <p className="my-8">To customize theme colors, override the CSS variables for both light and dark modes:</p>
        <pre><code>{`:root {
  /* Light mode - custom blue accent */
  --color-accent: oklch(55% 0.2 240);
}

:root[data-theme="dark"] {
  /* Dark mode - brighter for visibility */
  --color-accent: oklch(70% 0.18 240);
}`}</code></pre>

        <p className="my-8">m7base uses CSS layers to organize styles. Override any styles by placing custom CSS in the
          <code className="font-bold">overrides</code> layer:
        </p>
        <pre><code>{`@layer overrides {
  .btn-primary {
    background-color: blue;
  }
}`}</code></pre>
        <p className="my-8">Layer order: <code>reset</code> → <code>base</code> → <code>components</code> →
          <code>utilities</code> → <code>overrides</code>
        </p>

      </section>
    </>
  )
}
