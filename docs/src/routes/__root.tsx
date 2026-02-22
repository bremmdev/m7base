import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Header from '../components/Header'
import Hero from '../components/Hero'
import appCss from '../styles.css?url'
import m7baseCss from '../m7base.css?url'
import SideBar from '../components/SideBar'

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

const themeScript = `(function(){try{var t=localStorage.getItem("m7base-theme");if(t==="dark"||t==="light"){document.documentElement.setAttribute("data-theme",t)}else{document.documentElement.setAttribute("data-theme",window.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light")}}catch(e){document.documentElement.setAttribute("data-theme","light")}})()`;

// Suppress hydration errors for select elements as we are using the experimental selectedcontent element
const suppressSelectHydrationErrors = import.meta.env.DEV
  ? `(function(){var o=console.error;console.error=function(){var msg=String(arguments[0]);var all=Array.prototype.map.call(arguments,String).join(" ");var isHydration=(msg.indexOf("Hydration")!==-1||msg.indexOf("hydrat")!==-1)&&(all.indexOf("<select")!==-1||all.indexOf("<option")!==-1||all.indexOf("selectedcontent")!==-1);var isNesting=msg.indexOf("cannot contain")!==-1&&all.indexOf("<option")!==-1;if(isHydration||isNesting)return;o.apply(console,arguments)}})()`
  : '';

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {suppressSelectHydrationErrors && (
          <script dangerouslySetInnerHTML={{ __html: suppressSelectHydrationErrors }} />
        )}
        <HeadContent />
      </head>
      <body>
        <div className="bg-grid"></div>
        <Header />
        <Hero />
        <div className="main-content">
          <SideBar />
          <main className="page-container">{children}</main>
        </div>
        <TanStackDevtoolsComp />
        <Scripts />
      </body>
    </html>
  )
}
