import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/buttons')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section className="text-center">
    <h2 className="text-accent text-center">Buttons</h2>

    <p className="my-8">Use the <code className="font-bold">btn</code> classes to create a button. If no class is added,
      the button will be the default button based on the foreground color. The icon button strips away styling and
      makes the button a circle with a background color of the foreground color so it looks good with any icon.</p>
    <pre><code>{`<button>Default</button>
<button class="btn-outline">Outline</button>
<button class="btn-primary">Primary</button>
<button class="btn-primary-outline">Primary Outline</button>
<button class="btn-destructive">Destructive</button>
<button class="btn-icon">[INSERT ICON HERE]</button>`}</code></pre>

    <div className="flex gap-4 p-4 flex-center my-4 flex-wrap">
      <button>Default</button>
      <button className="btn-outline">Outline</button>
      <button className="btn-primary">Primary</button>
      <button className="btn-primary-outline">Primary Outline</button>
      <button className="btn-destructive">Destructive</button>
      <button className="btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg></button>
    </div>

    <h3 className="text-accent mt-8">Disabled buttons</h3>

    <div className="flex gap-4 p-4 flex-center my-4 flex-wrap">
      <button disabled>Default</button>
      <button className="btn-outline" disabled>Outline</button>
      <button className="btn-primary" disabled>Primary</button>
      <button className="btn-primary-outline" disabled>Primary Outline</button>
      <button className="btn-destructive" disabled>Destructive</button>
    </div>
  </section>
}
