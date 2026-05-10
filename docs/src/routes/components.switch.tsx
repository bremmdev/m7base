import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/switch')({
    component: RouteComponent,
    head: () => ({
        meta: [
            {
                title: 'Switch - M7BASE',
            },
        ],
    }),
})

function RouteComponent() {
    return <section className="text-center">
        <h2 className="text-accent text-center">Switch</h2>
        <p className="my-8">Use the <code className="font-bold">switch</code> class on a native <code className="font-bold">input</code> element with type <code className="font-bold">checkbox</code> to create a switch.</p>
        <pre><code>{`<label htmlFor="notifications">Enable notifications</label>
<input id="notifications" role="switch" type="checkbox" class="switch">`}</code></pre>
        <div className="flex flex-center gap-4 my-8">
            <label htmlFor="notifications">Enable notifications</label>
            <input id="notifications" role="switch" type="checkbox" className="switch" />
        </div>
    </section>
}
