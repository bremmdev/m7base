import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/progress')({
    component: RouteComponent,
    head: () => ({
        meta: [
            {
                title: 'Typography - M7BASE',
            },
        ],
    }),
})

function RouteComponent() {
    return <section className="text-center">
        <h2 className="text-accent">Progress</h2>

        <p className="my-8">Use the <code className="font-bold">progress</code> class to create a progress bar container.
            The <code className="font-bold">progress-bar</code> class is used to style the progress bar and is placed inside the <code className="font-bold">progress</code> container.
            The <code className="font-bold">style</code> attribute is used to set the width of the progress bar. Percentages are supported, but you can also use pixels or other CSS length units.</p> <p>For accessibility, the <code className="font-bold">role</code> attribute is used to set the progress bar role and the <code className="font-bold">aria-valuenow</code>, <code className="font-bold">aria-valuemin</code>, and <code className="font-bold">aria-valuemax</code> attributes are used to set the progress bar value. Any overflow is clipped.</p>
        <pre className="my-8"><code>{`<div class="progress" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
    <div class="progress-bar" style="width: 70%;"></div>
</div>`}</code></pre>

        <div className="flex flex-col gap-8 my-8">
            <div className="progress" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-bar" style={{ width: '0%' }}></div>
            </div>
            <div className="progress" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-bar" style={{ width: '50%' }}></div>
            </div>
            <div className="progress" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-bar" style={{ width: '100%' }}></div>
            </div>
        </div>
    </section>
}