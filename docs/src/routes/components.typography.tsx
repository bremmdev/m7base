import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/typography')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section className="text-center">
    <h2 className="text-accent">Typography</h2>
    <p className="my-8">Use the <code className="font-bold">h1</code>, <code className="font-bold">h2</code>, <code
      className="font-bold">h3</code>, and <code className="font-bold">h4</code> elements to create headings. The font
      weight is set to 500 and sizes are fluidly scaled between mobile and desktop.</p>
    <pre><code>{`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>`}</code></pre>

    <div className="flex flex-col gap-2 mt-8">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
    </div>

    <h3 className="text-accent mt-16">Font size classes</h3>
    <p className="my-8">Use these utility classes to set font sizes. Sizes scale fluidly between mobile and desktop.
    </p>
    <pre><code>{`<p class="text-xs">Extra small</p>
<p class="text-sm">Small</p>
<p class="text-base">Base</p>
<p class="text-lg">Large</p>
<p class="text-xl">Extra large</p>
<p class="text-2xl">2XL</p>
<p class="text-3xl">3XL</p>
<p class="text-4xl">4XL</p>
<p class="text-5xl">5XL</p>`}</code></pre>

    <div className="flex flex-col gap-2 mt-8 text-center">
      <p className="text-xs"><code className="text-sm">.text-xs</code> — 11.2px → 12px</p>
      <p className="text-sm"><code className="text-sm">.text-sm</code> — 12.8px → 14px</p>
      <p className="text-base"><code className="text-sm">.text-base</code> — 14.4px → 16px</p>
      <p className="text-lg"><code className="text-sm">.text-lg</code> — 16px → 18px</p>
      <p className="text-xl"><code className="text-sm">.text-xl</code> — 17.6px → 20px</p>
      <p className="text-2xl"><code className="text-sm">.text-2xl</code> — 20px → 24px</p>
      <p className="text-3xl"><code className="text-sm">.text-3xl</code> — 24px → 32px</p>
      <p className="text-4xl"><code className="text-sm">.text-4xl</code> — 28px → 48px</p>
      <p className="text-5xl"><code className="text-sm">.text-5xl</code> — 32px → 64px</p>
    </div>

    <p className="my-8">There are also utility classes for font weight and text alignment.</p>
    <pre><code>{`<p class="font-normal">Normal weight</p>
<p class="font-medium">Medium weight</p>
<p class="font-bold">Bold weight</p>`}</code></pre>

    <p className="my-8">Text alignment:</p>
    <pre><code>{`<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>`}</code></pre>

    <h3 className="text-accent mt-8">Text highlight</h3>
    <p className="my-8">Use the <code className="font-bold">text-highlight</code> class to highlight text or parts of a
      text.</p>
    <pre><code>{`<p class="text-highlight">This is a <span class="text-highlight">highlighted</span> text.</p>`}</code></pre>
    <p className="my-4">This is a <span className="text-highlight">highlighted</span> text.</p>

  </section>
}
