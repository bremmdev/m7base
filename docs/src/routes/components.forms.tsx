import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/forms')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="text-center">
      <h2 className="text-accent text-center">Forms and Inputs</h2>
      <p className="my-8">Use the <code className="font-bold">form-control</code> class to create a form control. This puts
        a
        label and input together and gives them some basic styling.</p>
      <pre><code>{`<div class="form-control">
<label for="name">Name</label>
<input type="text" id="name" name="name">
</div>`}</code></pre>
      <form className="p-4 flex flex-col items-center constrained">
        <div className="form-control">
          <label className="text-left" htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-control">
          <label className="text-left" htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <div className="form-control">
          <label className="text-left" htmlFor="country">Country</label>
          <select name="country" id="country">
            <option value="usa">USA</option>
            <option value="germany">Germany</option>
            <option value="spain">Spain</option>
          </select>
        </div>
      </form>
    </section>
  )
}
