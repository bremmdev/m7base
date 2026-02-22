import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/utilities/typography')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="text-center">
      <h2 className="text-accent">Typography utilities</h2>
      <p className="my-8">Utility classes for controlling font size, weight, alignment, and text decoration.</p>

      <h3 className="text-accent mt-16">Font size</h3>
      <p className="my-8">Use these classes to set font sizes. Sizes scale fluidly between mobile and desktop.</p>
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

      <h3 className="text-accent mt-16">Font weight</h3>
      <p className="my-8">Control font weight with these utility classes.</p>
      <pre><code>{`<p class="font-normal">Normal weight (400)</p>
<p class="font-medium">Medium weight (500)</p>
<p class="font-bold">Bold weight (700)</p>`}</code></pre>

      <div className="flex flex-col gap-2 mt-8 text-center">
        <p className="font-normal"><code className="text-sm">.font-normal</code> — font-weight: 400</p>
        <p className="font-medium"><code className="text-sm">.font-medium</code> — font-weight: 500</p>
        <p className="font-bold"><code className="text-sm">.font-bold</code> — font-weight: 700</p>
      </div>

      <h3 className="text-accent mt-16">Text alignment</h3>
      <p className="my-8">Align text within its container.</p>
      <pre><code>{`<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>`}</code></pre>

      <div className="flex flex-col gap-2 mt-8" style={{ maxWidth: '32rem', marginInline: 'auto', border: '1px solid var(--color-border)', borderRadius: 'var(--spacing-1)', padding: 'var(--spacing-4)' }}>
        <p className="text-left"><code className="text-sm">.text-left</code> — Left aligned</p>
        <p className="text-center"><code className="text-sm">.text-center</code> — Center aligned</p>
        <p className="text-right"><code className="text-sm">.text-right</code> — Right aligned</p>
      </div>

      <h3 className="text-accent mt-16">Text color</h3>
      <p className="my-8">Use <code className="font-bold">.text-accent</code> to apply the theme accent color to text.</p>
      <pre><code>{`<p class="text-accent">Accent colored text</p>`}</code></pre>
      <p className="text-accent my-4">Accent colored text</p>

      <h3 className="text-accent mt-16">Text highlight</h3>
      <p className="my-8">Use the <code className="font-bold">.text-highlight</code> class to highlight text or parts of a text.</p>
      <pre><code>{`<p>This is a <span class="text-highlight">highlighted</span> text.</p>`}</code></pre>
      <p className="my-4">This is a <span className="text-highlight">highlighted</span> text.</p>
    </section>
  )
}
