/* empty css                                  */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_nzPgjIaO.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_0qGGmiQj.mjs';
import { $ as $$Hero, a as $$SearchBar } from '../chunks/SearchBar_XkWs6Rj_.mjs';
import { $ as $$FrameworkCard } from '../chunks/FrameworkCard_CNEx4tCt.mjs';
import { s as supabase } from '../chunks/supabase_B_9mllgZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: frameworks } = await supabase.from("frameworks").select("id, name, slug, icon_url, description, github_stars, npm_downloads").order("github_stars", { ascending: false });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "UI Frameworks", "description": "Explore popular UI frameworks for your web development projects" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "UI Frameworks", "subtitle": "Discover the foundation for your next web project" })} ${maybeRenderHead()}<div class="py-8"> ${renderComponent($$result2, "SearchBar", $$SearchBar, { "placeholder": "Search frameworks..." })} </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> ${frameworks?.map((framework) => renderTemplate`${renderComponent($$result2, "FrameworkCard", $$FrameworkCard, { "framework": framework })}`)} </div> ` })}`;
}, "/home/project/src/pages/frameworks/index.astro", void 0);

const $$file = "/home/project/src/pages/frameworks/index.astro";
const $$url = "/frameworks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
