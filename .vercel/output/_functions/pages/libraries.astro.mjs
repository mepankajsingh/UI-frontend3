/* empty css                                  */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_nzPgjIaO.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_0qGGmiQj.mjs';
import { $ as $$Hero, a as $$SearchBar } from '../chunks/SearchBar_XkWs6Rj_.mjs';
import { $ as $$LibraryCard } from '../chunks/LibraryCard_Do9dgT_1.mjs';
import { s as supabase } from '../chunks/supabase_B_9mllgZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: libraries } = await supabase.from("libraries").select("id, name, slug, icon_url, description, github_stars, npm_downloads, pricing").order("github_stars", { ascending: false });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "UI Libraries", "description": "Explore component libraries for your web development projects" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "UI Component Libraries", "subtitle": "Find the perfect components to build your next web application" })} ${maybeRenderHead()}<div class="py-8"> ${renderComponent($$result2, "SearchBar", $$SearchBar, { "placeholder": "Search libraries..." })} </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> ${libraries?.map((library) => renderTemplate`${renderComponent($$result2, "LibraryCard", $$LibraryCard, { "library": library })}`)} </div> ` })}`;
}, "/home/project/src/pages/libraries/index.astro", void 0);

const $$file = "/home/project/src/pages/libraries/index.astro";
const $$url = "/libraries";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
