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

  </section>
}
