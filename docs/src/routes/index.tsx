import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {


  return (
    <>
      <section className="hero-section">
        <h1 className="text-center my-16 font-normal title">Drop-in CSS stylesheet for <span className="text-accent">quick
          styling</span>
          based on
          modern CSS features and optional
          <span className="text-accent">
            components</span>.
        </h1>
      </section>

      <div className="page-container">

        <section className="text-center">
          <h2 className="text-accent text-center">Installation</h2>

          <p className="my-8">Install <span className="font-bold">m7base</span> using npm:</p>
          <pre><code>npm install @bremmdev/m7base</code></pre>

          <p className="my-8">Then import the CSS file in your code:</p>
          <pre><code>import '@bremmdev/m7base.css'</code></pre>

          <p className="my-8">Alternatively, you can <a href="m7base.css" download="m7base.css">download this CSS file</a> and
            include it in your project.</p>
        </section>

        <section className="text-center">
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

        <section className="text-center">
          <h2 className="text-accent text-center">Badge</h2>

          <p className="my-8">Use the <code className="font-bold">badge</code> class to create a badge.</p>
          <pre><code>{`<div class="badge">Badge</div>
<div class="badge badge-outline">Badge Outline</div>
<div class="badge badge-primary">Badge Primary</div>`}</code></pre>

          <div className="flex gap-4 p-4 flex-center my-4 flex-wrap">
            <div className="badge">Badge</div>
            <div className="badge badge-outline">Badge Outline</div>
            <div className="badge badge-primary">Badge Primary</div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-accent text-center">Buttons</h2>

          <p className="my-8">Use the <code className="font-bold">btn</code> classes to create a button. If no class is added,
            the button will be the default button based on the foreground color. The icon button strips away styling and
            makes the button a circle with a background color of the foreground color so it looks good with any icon.</p>
          <pre><code>{`<button>Default</button>
<button class="btn-outline">Outline</button>
<button class="btn-primary">Primary</button>
<button class="btn-primary-outline">Primary Outline</button>
<button class="btn-destructive">Destructive</button>
<button class="btn-icon">[INSERT ICON HERE]</button>`}</code></pre>

          <div className="flex gap-4 p-4 flex-center my-4 flex-wrap">
            <button>Default</button>
            <button className="btn-outline">Outline</button>
            <button className="btn-primary">Primary</button>
            <button className="btn-primary-outline">Primary Outline</button>
            <button className="btn-destructive">Destructive</button>
            <button className="btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg></button>
          </div>

          <h3 className="text-accent mt-8">Disabled buttons</h3>

          <div className="flex gap-4 p-4 flex-center my-4 flex-wrap">
            <button disabled>Default</button>
            <button className="btn-outline" disabled>Outline</button>
            <button className="btn-primary" disabled>Primary</button>
            <button className="btn-primary-outline" disabled>Primary Outline</button>
            <button className="btn-destructive" disabled>Destructive</button>
          </div>
        </section>

        <section className="flex flex-col gap-4 items-center text-center">
          <h2 className="text-accent text-center">Card</h2>
          <p className="my-8">Use the <code className="font-bold">card</code> class to create a
            card.</p>
          <pre><code>{`<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>`}</code></pre>

          <div className="card" style={{ textAlign: 'left' }}>
            <h3>Card</h3>
            <p>By default the card is as wide as the content.</p>
            <p>Children are stacked vertically with a gap of 0.5rem.</p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-accent text-center">Custom select</h2>
          <p className="my-8">Use the <code className="font-bold">custom-select</code> class to create a custom select. This is an
            opt-in feature for experimental browser features. These features allow full customization of the native select
            elements using just CSS. It also supports the rendering of different kind of html tags inside the options,
            like SVGs. Read more at <a
              href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select">customizable
              select on MDN</a></p>
          <pre><code>{`<select class="custom-select">
  <button>
    Selected animal:<selectedcontent></selectedcontent>
  </button>
  <option value="1">[insert SVG] Cat</option>
  <option value="2">[insert SVG] Dog</option>
  <option value="3">[insert SVG] Bird</option>
</select>`}</code></pre>

          <select className="custom-select" id="animal-select" style={{ margin: '2rem auto' }}>
            <button>
              {/* @ts-expect-error selectedcontent is an experimental HTML element */}
              Selected animal:<selectedcontent></selectedcontent>
            </button>
            <option value="1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path
                d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
              <path d="M8 14v.5" />
              <path d="M16 14v.5" />
              <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
            </svg> Cat
            </option>
            <option value="2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11.25 16.25h1.5L12 17z" />
              <path d="M16 14v.5" />
              <path
                d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" />
              <path d="M8 14v.5" />
              <path
                d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
            </svg> Dog</option>
            <option value="3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 7h.01" />
              <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
              <path d="m20 7 2 .5-2 .5" />
              <path d="M10 18v3" />
              <path d="M14 17.75V21" />
              <path d="M7 18a6 6 0 0 0 3.84-10.61" />
            </svg> Bird</option>
          </select>
        </section>

        <section className="text-center">
          <h2 className="text-accent">Headings and typography</h2>
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

          <h3 className="text-accent mt-16">Font size classes</h3>
          <p className="my-8">Use these utility classes to set font sizes. Sizes scale fluidly between mobile and desktop.
          </p>
          <pre><code>{`<p class="text-xs">Extra small</p>
<p class="text-sm">Small</p>
<p class="text-base">Base</p>
<p class="text-lg">Large</p>
<p class="text-xl">Extra large</p>
<p class="text-2xl">2XL</p>
<p class="text-3xl">3XL</p>
<p class="text-4xl">4XL</p>
<p class="text-5xl">5XL</p>`}</code></pre>

          <div className="flex flex-col gap-2 mt-8 text-center">
            <p className="text-xs"><code className="text-sm">.text-xs</code> — 11.2px → 12px</p>
            <p className="text-sm"><code className="text-sm">.text-sm</code> — 12.8px → 14px</p>
            <p className="text-base"><code className="text-sm">.text-base</code> — 14.4px → 16px</p>
            <p className="text-lg"><code className="text-sm">.text-lg</code> — 16px → 18px</p>
            <p className="text-xl"><code className="text-sm">.text-xl</code> — 17.6px → 20px</p>
            <p className="text-2xl"><code className="text-sm">.text-2xl</code> — 20px → 24px</p>
            <p className="text-3xl"><code className="text-sm">.text-3xl</code> — 24px → 32px</p>
            <p className="text-4xl"><code className="text-sm">.text-4xl</code> — 28px → 48px</p>
            <p className="text-5xl"><code className="text-sm">.text-5xl</code> — 32px → 64px</p>
          </div>

          <p className="my-8">There are also utility classes for font weight and text alignment.</p>
          <pre><code>{`<p class="font-normal">Normal weight</p>
<p class="font-medium">Medium weight</p>
<p class="font-bold">Bold weight</p>`}</code></pre>

          <p className="my-8">Text alignment:</p>
          <pre><code>{`<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>`}</code></pre>

        </section>

        <section className="text-center">
          <h2 className="text-accent text-center">Inputs</h2>
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

        <section className="text-center notifications">
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

        <section className="text-center">
          <h2 className="text-accent text-center">Tooltip</h2>
          <p className="my-8">Use the <code className="font-bold">tooltip</code> class to create a tooltip. It shows the content
            when the trigger is hovered or focused after a delay.
          </p>
          <pre><code>{`<div class="tooltip">
  <button class="btn-icon tooltip-trigger">Hover me</button>
  <div class="tooltip-content">This is a tooltip</div>
</div>`}</code></pre>
          <div className="tooltip">
            <button className="btn-icon tooltip-trigger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" className="lucide lucide-info-icon lucide-info">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg></button>
            <div className="tooltip-content">This is a tooltip </div>
          </div>

          <p className="my-8">Use the <code className="font-bold">top</code> class to position the tooltip above the trigger.</p>
          <pre><code>{`<div class="tooltip">
  <button class="btn-icon tooltip-trigger">Hover me</button>
  <div class="tooltip-content top">This is a tooltip</div>
</div>`}</code></pre>
          <div className="tooltip">
            <button className="btn-icon tooltip-trigger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" className="lucide lucide-info-icon lucide-info">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg></button>
            <div className="tooltip-content top">This is a tooltip</div>
          </div>


          <h3 className="text-accent mt-8">Accessibility</h3>
          <p className="my-8">For proper accessibility, the tooltip should be associated with the trigger using the <code
            className="font-bold">aria-describedby</code> attribute.</p>
          <pre><code>{`<div class="tooltip">
  <button class="btn-icon tooltip-trigger" aria-describedby="tooltip-content">Hover me</button>
  <div class="tooltip-content" id="tooltip-content">This is a tooltip</div>
</div>`}</code></pre>
          <div className="tooltip my-4">
            <button className="btn-icon tooltip-trigger" aria-describedby="tooltip-content"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-info-icon lucide-info">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg></button>
            <div className="tooltip-content" id="tooltip-content">This is a tooltip</div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-accent text-center">Text highlight</h2>
          <p className="my-8">Use the <code className="font-bold">text-highlight</code> class to highlight text or parts of a
            text.</p>
          <pre><code>{`<p class="text-highlight">This is a <span class="text-highlight">highlighted</span> text.</p>`}</code></pre>
          <p className="my-4">This is a <span className="text-highlight">highlighted</span> text.</p>
        </section>

        <section className="text-center">
          <h2 className="text-accent text-center">CSS Variables, dark mode and layers</h2>
          <p className="my-8">m7base uses CSS custom properties that you can override to customize the design. All color
            variables are defined separately for light and dark modes.</p>
          <h3 className="text-accent my-8">Light mode colors</h3>
          <pre><code>{`:root {
  --color-foreground: oklch(13% 0.028 261.692);
  --color-foreground-inverted: oklch(1 0 0);
  --color-background: oklch(1 0 0);
  --color-accent: oklch(0.58 0.16 85);
  --color-destructive: oklch(50.5% 0.213 27.518);
  --color-border: oklch(37.2% 0.044 257.287);
  --color-surface: oklch(98.4% 0.003 247.858);
  --color-badge: oklch(92.9% 0.013 255.508);
}`}</code></pre>

          <h3 className="text-accent my-8">Dark mode colors</h3>
          <pre><code>{`:root[data-theme="dark"] {
  --color-foreground: oklch(92.9% 0.013 255.508);
  --color-foreground-inverted: oklch(13% 0.028 261.692);
  --color-background: oklch(13% 0.028 261.692);
  --color-accent: oklch(92.4% 0.12 95.746);
  --color-destructive: oklch(64.5% 0.246 16.439);
  --color-border: oklch(45% 0.044 257.287);
  --color-surface: oklch(20.8% 0.042 265.755);
  --color-badge: oklch(27.8% 0.033 256.848);
}`}</code></pre>

          <h3 className="text-accent mt-8">Customizing theme colors</h3>
          <p className="my-8">To customize theme colors, override the CSS variables for both light and dark modes:</p>
          <pre><code>{`:root {
  /* Light mode - custom blue accent */
  --color-accent: oklch(55% 0.2 240);
}

:root[data-theme="dark"] {
  /* Dark mode - brighter for visibility */
  --color-accent: oklch(70% 0.18 240);
}`}</code></pre>

          <p className="my-8">m7base uses CSS layers to organize styles. Override any styles by placing custom CSS in the
            <code className="font-bold">overrides</code> layer:
          </p>
          <pre><code>{`@layer overrides {
  .btn-primary {
    background-color: blue;
  }
}`}</code></pre>
          <p className="my-8">Layer order: <code>reset</code> → <code>base</code> → <code>components</code> →
            <code>utilities</code> → <code>overrides</code>
          </p>

        </section>


      </div>
    </>
  )
}
