import { createFileRoute } from '@tanstack/react-router'
import { Info } from 'lucide-react'

export const Route = createFileRoute('/components/tooltip')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section className="text-center">
    <h2 className="text-accent text-center">Tooltip</h2>
    <p className="my-8">Use the <code className="font-bold">tooltip</code> class to create a tooltip. It shows the content
      when the trigger is hovered or focused after a delay.
    </p>
    <pre><code>{`<div class="tooltip">
<button class="btn-icon tooltip-trigger">Hover me</button>
<div class="tooltip-content">This is a tooltip</div>
</div>`}</code></pre>
    <div className="tooltip">
      <button className="btn-icon tooltip-trigger"><Info /></button>
      <div className="tooltip-content">This is a tooltip </div>
    </div>

    <p className="my-8">Use the <code className="font-bold">top</code> class to position the tooltip above the trigger.</p>
    <pre><code>{`<div class="tooltip">
<button class="btn-icon tooltip-trigger">Hover me</button>
<div class="tooltip-content top">This is a tooltip</div>
</div>`}</code></pre>
    <div className="tooltip">
      <button className="btn-icon tooltip-trigger"><Info /></button>
      <div className="tooltip-content top">This is a tooltip</div>
    </div>


    <h3 className="text-accent mt-8">Accessibility</h3>
    <p className="my-8">For proper accessibility, the tooltip should be associated with the trigger using the <code
      className="font-bold">aria-describedby</code> attribute.</p>
    <pre><code>{`<div class="tooltip">
<button class="btn-icon tooltip-trigger" aria-describedby="tooltip-content">Hover me</button>
<div class="tooltip-content" id="tooltip-content">This is a tooltip</div>
</div>`}</code></pre>
    <div className="tooltip my-4">
      <button className="btn-icon tooltip-trigger" aria-describedby="tooltip-content"><Info /></button>
      <div className="tooltip-content" id="tooltip-content">This is a tooltip</div>
    </div>
  </section>
}
