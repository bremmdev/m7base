import { createFileRoute } from '@tanstack/react-router'
import CustomSelect from '../components/CustomSelect'

export const Route = createFileRoute('/components/custom-select')({
  component: RouteComponent,
})

function RouteComponent() {
  return <section className="text-center">
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

    <CustomSelect />
  </section>
}
