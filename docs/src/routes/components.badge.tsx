import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/badge')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section className="text-center">
    <h2 className="text-accent text-center">Badge</h2>

    <p className="my-8">Use the <code className="font-bold">badge</code> class to create a badge.</p>
    <pre><code>{`<div class="badge">Badge</div>
<div class="badge badge-outline">Badge Outline</div>
<div class="badge badge-primary">Badge Primary</div>`}</code></pre>

    <div className="flex gap-4 p-4 flex-center my-4 flex-wrap">
      <div className="badge">Badge</div>
      <div className="badge badge-outline">Badge Outline</div>
      <div className="badge badge-primary">Badge Primary</div>
    </div>
  </section>
}
