import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/utilities/spacing-and-margin')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="text-center">
      <h2 className="text-accent">Spacing and margin</h2>
      <p className="my-8">
        Spacing utilities use a base unit of <code className="font-bold">0.25rem</code> (4px), scaled by a multiplier
        from 1 to 16. On screens ≤768px, the base unit shrinks to <code className="font-bold">0.2rem</code> for tighter
        layouts.
      </p>

      <h3 className="text-accent mt-16">Spacing scale</h3>
      <p className="my-8">All spacing utilities share the same scale from 0 to 16.</p>
      <pre><code>{`--spacing-1:  0.25rem   (4px)
--spacing-2:  0.5rem    (8px)
--spacing-3:  0.75rem   (12px)
--spacing-4:  1rem      (16px)
--spacing-5:  1.25rem   (20px)
--spacing-6:  1.5rem    (24px)
--spacing-7:  1.75rem   (28px)
--spacing-8:  2rem      (32px)
--spacing-9:  2.25rem   (36px)
--spacing-10: 2.5rem    (40px)
--spacing-11: 2.75rem   (44px)
--spacing-12: 3rem      (48px)
--spacing-13: 3.25rem   (52px)
--spacing-14: 3.5rem    (56px)
--spacing-15: 3.75rem   (60px)
--spacing-16: 4rem      (64px)`}</code></pre>

      <div className="flex flex-col gap-2 mt-8 text-left" style={{ maxWidth: '32rem', marginInline: 'auto' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16].map((n) => (
          <div key={n} className="flex items-center gap-4">
            <code className="text-sm" style={{ width: '3rem', flexShrink: 0 }}>{n}</code>
            <div
              className="bg-accent"
              style={{
                width: `calc(var(--spacing-${n}))`,
                height: '1rem',
                borderRadius: 'var(--spacing-1)',
                opacity: 0.7,
              }}
            />
          </div>
        ))}
      </div>

      <h3 className="text-accent mt-16">Margin</h3>
      <p className="my-8">
        Use <code className="font-bold">m-</code> classes to add margin on all sides,
        or directional variants for specific sides.
      </p>
      <pre><code>{`<div class="m-4">All sides</div>
<div class="mx-4">Inline (left + right)</div>
<div class="my-4">Block (top + bottom)</div>
<div class="mt-4">Top</div>
<div class="mb-4">Bottom</div>
<div class="ml-4">Left</div>
<div class="mr-4">Right</div>`}</code></pre>

      <p className="my-8">Available classes for each direction:</p>
      <div className="flex flex-col gap-2 mt-4">
        <p><code className="text-sm">.m-{'{0–16}'}</code> — margin on all sides</p>
        <p><code className="text-sm">.mx-{'{0–16}'}</code> — margin-inline (left + right)</p>
        <p><code className="text-sm">.my-{'{0–16}'}</code> — margin-block (top + bottom)</p>
        <p><code className="text-sm">.mt-{'{0–16}'}</code> — margin-top</p>
        <p><code className="text-sm">.mb-{'{0–16}'}</code> — margin-bottom</p>
        <p><code className="text-sm">.ml-{'{0–16}'}</code> — margin-left</p>
        <p><code className="text-sm">.mr-{'{0–16}'}</code> — margin-right</p>
      </div>

      <h3 className="text-accent mt-16">Auto margins</h3>
      <p className="my-8">Use auto margin utilities for centering or pushing elements.</p>
      <pre><code>{`<div class="mx-auto">Centered horizontally</div>
<div class="my-auto">Centered vertically</div>
<div class="ml-auto">Pushed to the right</div>
<div class="mr-auto">Pushed to the left</div>
<div class="mt-auto">Pushed to the bottom</div>
<div class="mb-auto">Pushed to the top</div>`}</code></pre>

      <h3 className="text-accent mt-16">Padding</h3>
      <p className="my-8">
        Use <code className="font-bold">p-</code> classes to add padding. Same scale and directional variants as margin.
      </p>
      <pre><code>{`<div class="p-4">All sides</div>
<div class="px-4">Inline (left + right)</div>
<div class="py-4">Block (top + bottom)</div>
<div class="pt-4">Top</div>
<div class="pb-4">Bottom</div>
<div class="pl-4">Left</div>
<div class="pr-4">Right</div>`}</code></pre>

      <div className="flex flex-col gap-2 mt-4">
        <p><code className="text-sm">.p-{'{0–16}'}</code> — padding on all sides</p>
        <p><code className="text-sm">.px-{'{0–16}'}</code> — padding-inline (left + right)</p>
        <p><code className="text-sm">.py-{'{0–16}'}</code> — padding-block (top + bottom)</p>
        <p><code className="text-sm">.pt-{'{0–16}'}</code> — padding-top</p>
        <p><code className="text-sm">.pb-{'{0–16}'}</code> — padding-bottom</p>
        <p><code className="text-sm">.pl-{'{0–16}'}</code> — padding-left</p>
        <p><code className="text-sm">.pr-{'{0–16}'}</code> — padding-right</p>
      </div>

    </section>
  )
}
