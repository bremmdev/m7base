import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/spinner')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section className="text-center">
    <h2 className="text-accent text-center">Spinner</h2>
    <p className="my-8">Use the <code className="font-bold">spinner</code> class to create a spinner. You can also add the <code className="font-bold">medium</code> or <code className="font-bold">large</code> classes to increase the size.</p>
    <pre><code>{`<div class="spinner"></div>
<div class="spinner medium"></div>
<div class="spinner large"></div>`}</code></pre>
    <div className="flex flex-center gap-4 my-8">
      <div className="spinner"></div>
      <div className="spinner medium"></div>
      <div className="spinner large"></div>
    </div>
  </section>
}
