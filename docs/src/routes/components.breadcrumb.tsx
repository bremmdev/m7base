import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/breadcrumb')({
    component: RouteComponent,
})

function RouteComponent() {
    return <section className="text-center">
        <h2 className="text-accent text-center">Breadcrumb</h2>

        <p className="my-8">Use the <code className="font-bold">breadcrumb</code> class on a <code className="font-bold">nav</code> element to create a breadcrumb navigation. For accessibility, use the <code className="font-bold">aria-current="page"</code> attribute on the last item.</p>
        <pre><code>{`<nav class="breadcrumb">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><span aria-current="page">Product 1</span></li>
    </ul>
</nav>`}</code></pre>

        <nav className="breadcrumb my-8">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><span aria-current="page">Product 1</span></li>
            </ul>
        </nav>
    </section>
}
