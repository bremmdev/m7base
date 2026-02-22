import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/accordion')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section className="text-center">
    <h2 className="text-accent text-center">Accordion</h2>

    <p className="my-8">This works with the native <code className="font-bold">details</code> and <code
      className="font-bold">summary</code> elements. No classes
      need to be
      added</p>

    <pre><code>{`<details>
<summary>This is the title of the accordion</summary>
<p>This is the content of the accordion. It can be as long as you want.</p>
</details>`}</code></pre>

    <details className="mt-8 text-left">
      <summary>This is the title of the accordion</summary>
      <p>This is the content of the accordion. It can be as long as you want.</p>
    </details>
    <details className="text-left">
      <summary>This is the title of the second accordion</summary>
      <p>This is the content of the second accordion. It can be as long as you want.</p>
    </details>


    <h3 className="text-accent mt-8">Mutually exclusive accordions</h3>
    <p className="my-8">Mutually exclusive accordions (only 1 accordion can be open at a time) can be accomplished
      without JavaScript by using the <code className="font-bold">name</code> atttribue. All accordions with the same
      <code className="font-bold">name</code> are mutually exclusive even if they are not in the same parent element.
    </p>
    <pre><code>{`<details name="accordion-group">
<summary>This is the title of the accordion</summary>
<p>This is the content of the accordion. It can be as long as you want.</p>
</details>
<details name="accordion-group">
<summary>This is the title of the second accordion</summary>
<p>This is the content of the second accordion. It can be as long as you want.</p>
</details>`}</code></pre>

    <details name="accordion-group" className="mt-8 text-left">
      <summary>This is the title of the accordion</summary>
      <p>This is the content of the accordion. It can be as long as you want.</p>
    </details>
    <details name="accordion-group" className="text-left">
      <summary>This is the title of the second accordion</summary>
      <p>This is the content of the second accordion. It can be as long as you want.</p>
    </details>
    <details name="accordion-group" className="text-left">
      <summary>This is the title of the third accordion</summary>
      <p>This is the content of the third accordion. It can be as long as you want.</p>
    </details>
  </section>
}
