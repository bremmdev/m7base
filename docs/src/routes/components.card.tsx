import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/card')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section className="flex flex-col gap-4 items-center text-center">
    <h2 className="text-accent text-center">Card</h2>
    <p className="my-8">Use the <code className="font-bold">card</code> class to create a
      card.</p>
    <pre><code>{`<div class="card">
<h3>Card Title</h3>
<p>Card content goes here.</p>
</div>`}</code></pre>

    <div className="card" style={{ textAlign: 'left' }}>
      <h3>Card</h3>
      <p>By default the card is as wide as the content.</p>
      <p>Children are stacked vertically with a gap of 0.5rem.</p>
    </div>
  </section>
}
