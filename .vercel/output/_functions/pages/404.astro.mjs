/* empty css                                  */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_nzPgjIaO.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_0qGGmiQj.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center py-16 text-center"> <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1> <p class="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p> <a href="/" class="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors">
Go back home
</a> </div> ` })}`;
}, "/home/project/src/pages/404.astro", void 0);

const $$file = "/home/project/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
