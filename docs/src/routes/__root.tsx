import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Header from '../components/Header'

import appCss from '../styles.css?url'
import m7baseCss from '../m7base.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'stylesheet',
        href: m7baseCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

const TanStackDevtoolsComp = () => (<TanStackDevtools
  config={{
    position: 'bottom-right',
  }}
  plugins={[
    {
      name: 'Tanstack Router',
      render: <TanStackRouterDevtoolsPanel />,
    },
  ]}
/>)

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="bg-grid"></div>
        <Header />
        <main>{children}</main>
        <TanStackDevtoolsComp />
        <Scripts />
        <script src="/src/scripts/script.js"></script>
      </body>
    </html>
  )
}
