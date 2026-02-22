import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/notification')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section className="text-center notifications">
    <h2 className="text-accent text-center">Notification</h2>
    <pre><code>{`<div class="notification-success">This is a success notification.</div>
<div class="notification-error">This is an error notification.</div>
<div class="notification-warning">This is a warning notification.</div>
<div class="notification-info">This is an info notification.</div>`}</code></pre>
    <div className="notification-success">This is a success notification.</div>
    <div className="notification-error">This is an error notification.</div>
    <div className="notification-warning">This is a warning notification.</div>
    <div className="notification-info">This is an info notification.</div>
  </section>
}
