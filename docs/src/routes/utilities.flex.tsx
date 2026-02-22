import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/utilities/flex')({
  component: RouteComponent,
})

function RouteComponent() {
  const box = { width: '3rem', height: '3rem', borderRadius: 'var(--spacing-1)', opacity: 0.7 }

  return (
    <section className="text-center">
      <h2 className="text-accent">Flex</h2>
      <p className="my-8">
        Use <code className="font-bold">flex</code> utilities to build flexible layouts.
        Apply <code className="font-bold">.flex</code> to enable flexbox, then combine with direction, wrapping,
        alignment, and gap classes.
      </p>

      <h3 className="text-accent mt-16">Display</h3>
      <p className="my-8">Use <code className="font-bold">.flex</code> to set an element to <code className="font-bold">display: flex</code>.</p>
      <pre><code>{`<div class="flex">...</div>`}</code></pre>

      <h3 className="text-accent mt-16">Direction</h3>
      <p className="my-8">Control the direction of flex items.</p>
      <pre><code>{`<div class="flex flex-row">Horizontal (default)</div>
<div class="flex flex-col">Vertical</div>`}</code></pre>

      <div className="flex flex-wrap gap-8 mt-8" style={{ justifyContent: 'center' }}>
        <div>
          <p className="text-sm mb-2"><code>.flex-row</code></p>
          <div className="flex flex-row gap-2" style={{ border: '1px solid var(--color-border)', padding: 'var(--spacing-2)', borderRadius: 'var(--spacing-1)' }}>
            <div className="bg-accent" style={box} />
            <div className="bg-accent" style={{ ...box, opacity: 0.5 }} />
            <div className="bg-accent" style={{ ...box, opacity: 0.3 }} />
          </div>
        </div>
        <div>
          <p className="text-sm mb-2"><code>.flex-col</code></p>
          <div className="flex flex-col gap-2" style={{ border: '1px solid var(--color-border)', padding: 'var(--spacing-2)', borderRadius: 'var(--spacing-1)' }}>
            <div className="bg-accent" style={box} />
            <div className="bg-accent" style={{ ...box, opacity: 0.5 }} />
            <div className="bg-accent" style={{ ...box, opacity: 0.3 }} />
          </div>
        </div>
      </div>

      <h3 className="text-accent mt-16">Wrapping</h3>
      <p className="my-8">Control whether flex items wrap to new lines.</p>
      <pre><code>{`<div class="flex flex-wrap">Wrap items</div>
<div class="flex flex-nowrap">No wrapping (default)</div>`}</code></pre>

      <div className="mt-8" style={{ maxWidth: '20rem', marginInline: 'auto' }}>
        <p className="text-sm mb-2"><code>.flex-wrap</code></p>
        <div className="flex flex-wrap gap-2" style={{ border: '1px solid var(--color-border)', padding: 'var(--spacing-2)', borderRadius: 'var(--spacing-1)' }}>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="bg-accent" style={{ ...box, opacity: 0.3 + i * 0.1 }} />
          ))}
        </div>
      </div>

      <h3 className="text-accent mt-16">Alignment</h3>
      <p className="my-8">Shorthand classes for common alignment patterns.</p>
      <pre><code>{`<div class="flex flex-center">Centered on both axes</div>
<div class="flex flex-between">Space-between with vertical centering</div>
<div class="flex items-center">Vertically centered</div>`}</code></pre>

      <div className="flex flex-col gap-2 mt-4">
        <p><code className="text-sm">.flex-center</code> — justify-content: center + align-items: center</p>
        <p><code className="text-sm">.flex-between</code> — justify-content: space-between + align-items: center</p>
        <p><code className="text-sm">.items-center</code> — align-items: center</p>
      </div>

      <div className="flex flex-wrap gap-8 mt-8" style={{ justifyContent: 'center' }}>
        <div>
          <p className="text-sm mb-2"><code>.flex-center</code></p>
          <div className="flex flex-center" style={{ width: '14rem', height: '6rem', border: '1px solid var(--color-border)', borderRadius: 'var(--spacing-1)' }}>
            <div className="bg-accent" style={box} />
          </div>
        </div>
        <div>
          <p className="text-sm mb-2"><code>.flex-between</code></p>
          <div className="flex flex-between" style={{ width: '14rem', height: '6rem', border: '1px solid var(--color-border)', padding: 'var(--spacing-2)', borderRadius: 'var(--spacing-1)' }}>
            <div className="bg-accent" style={box} />
            <div className="bg-accent" style={{ ...box, opacity: 0.5 }} />
            <div className="bg-accent" style={{ ...box, opacity: 0.3 }} />
          </div>
        </div>
      </div>

      <h3 className="text-accent mt-16">Grow and shrink</h3>
      <p className="my-8">Allow items to grow or shrink to fill available space.</p>
      <pre><code>{`<div class="flex">
  <div class="flex-grow">Fills remaining space</div>
  <div class="flex-shrink">Can shrink below its size</div>
</div>`}</code></pre>

      <div className="flex flex-col gap-2 mt-4">
        <p><code className="text-sm">.flex-grow</code> — flex-grow: 1</p>
        <p><code className="text-sm">.flex-shrink</code> — flex-shrink: 1</p>
      </div>

      <div className="mt-8" style={{ maxWidth: '28rem', marginInline: 'auto' }}>
        <p className="text-sm mb-2"><code>.flex-grow</code> on the middle item</p>
        <div className="flex gap-2" style={{ border: '1px solid var(--color-border)', padding: 'var(--spacing-2)', borderRadius: 'var(--spacing-1)' }}>
          <div className="bg-accent" style={box} />
          <div className="bg-accent flex-grow" style={{ height: '3rem', borderRadius: 'var(--spacing-1)', opacity: 0.5 }} />
          <div className="bg-accent" style={box} />
        </div>
      </div>

      <h3 className="text-accent mt-16">Gap</h3>
      <p className="my-8">
        Use <code className="font-bold">gap-</code> classes to control spacing between flex or grid children.
      </p>
      <pre><code>{`<div class="flex gap-4">Uniform gap</div>
<div class="flex gap-x-4">Column gap only</div>
<div class="flex gap-y-4">Row gap only</div>`}</code></pre>

      <div className="flex flex-col gap-2 mt-4">
        <p><code className="text-sm">.gap-{'{0–16}'}</code> — gap (both axes)</p>
        <p><code className="text-sm">.gap-x-{'{0–16}'}</code> — column-gap</p>
        <p><code className="text-sm">.gap-y-{'{0–16}'}</code> — row-gap</p>
      </div>

      <div className="flex flex-wrap gap-4 mt-8" style={{ justifyContent: 'center' }}>
        {[2, 4, 8].map((n) => (
          <div key={n}>
            <p className="text-sm mb-2"><code>.gap-{n}</code></p>
            <div className="flex" style={{ gap: `var(--spacing-${n})`, border: '1px solid var(--color-border)', padding: 'var(--spacing-2)', borderRadius: 'var(--spacing-1)' }}>
              <div className="bg-accent" style={{ width: '2rem', height: '2rem', borderRadius: 'var(--spacing-1)', opacity: 0.7 }} />
              <div className="bg-accent" style={{ width: '2rem', height: '2rem', borderRadius: 'var(--spacing-1)', opacity: 0.7 }} />
              <div className="bg-accent" style={{ width: '2rem', height: '2rem', borderRadius: 'var(--spacing-1)', opacity: 0.7 }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
