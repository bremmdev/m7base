import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/notification')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: 'Notification - M7BASE',
      },
    ],
  }),
})

function RouteComponent() {
  return <section className="text-center notifications">
    <h2 className="text-accent text-center">Notification</h2>
    <p className="my-8">Use the <code className="font-bold">notification-success</code>, <code className="font-bold">notification-error</code>, <code className="font-bold">notification-warning</code>, and <code className="font-bold">notification-info</code> classes for status messages.</p>
    <pre><code>{`<div class="notification-success">This is a success notification.</div>
<div class="notification-error">This is an error notification.</div>
<div class="notification-warning">This is a warning notification.</div>
<div class="notification-info">This is an info notification.</div>`}</code></pre>
    <div className="flex flex-col items-center my-8 w-full">
      <div className="notification-success">This is a success notification.</div>
      <div className="notification-error">This is an error notification.</div>
      <div className="notification-warning">This is a warning notification.</div>
      <div className="notification-info">This is an info notification.</div>
    </div>
  </section>
}
