/* empty css                                  */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_nzPgjIaO.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_0qGGmiQj.mjs';
import { $ as $$Hero, a as $$SearchBar } from '../chunks/SearchBar_XkWs6Rj_.mjs';
import { $ as $$FrameworkCard } from '../chunks/FrameworkCard_CNEx4tCt.mjs';
import { $ as $$LibraryCard } from '../chunks/LibraryCard_Do9dgT_1.mjs';
import { s as supabase } from '../chunks/supabase_B_9mllgZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: frameworks, error: frameworksError } = await supabase.from("frameworks").select("id, name, slug, icon_url, description, github_stars, npm_downloads").order("github_stars", { ascending: false }).limit(4);
  const { data: libraries, error: librariesError } = await supabase.from("libraries").select("id, name, slug, icon_url, description, github_stars, npm_downloads, pricing").order("github_stars", { ascending: false }).limit(4);
  console.log("Frameworks data:", frameworks);
  console.log("Libraries data:", libraries);
  if (frameworksError) console.error("Frameworks error:", frameworksError);
  if (librariesError) console.error("Libraries error:", librariesError);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Discover UI Libraries and Frameworks" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Discover the Best UI Libraries and Frameworks", "subtitle": "Find the perfect components for your next web project" })} ${maybeRenderHead()}<div class="py-8"> ${renderComponent($$result2, "SearchBar", $$SearchBar, { "placeholder": "Search for libraries and frameworks..." })} </div> <section class="mb-12"> <div class="flex justify-between items-center mb-6"> <h2 class="text-2xl font-bold text-gray-900">Popular Frameworks</h2> <a href="/frameworks" class="text-primary-600 hover:text-primary-700 font-medium text-sm">
View all frameworks
</a> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> ${frameworks?.map((framework) => renderTemplate`${renderComponent($$result2, "FrameworkCard", $$FrameworkCard, { "framework": framework })}`)} ${!frameworks || frameworks.length === 0 && renderTemplate`<p class="text-gray-500 col-span-4 text-center py-8">No frameworks found</p>`} </div> </section> <section class="mb-12"> <div class="flex justify-between items-center mb-6"> <h2 class="text-2xl font-bold text-gray-900">Popular Libraries</h2> <a href="/libraries" class="text-primary-600 hover:text-primary-700 font-medium text-sm">
View all libraries
</a> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> ${libraries?.map((library) => renderTemplate`${renderComponent($$result2, "LibraryCard", $$LibraryCard, { "library": library })}`)} ${!libraries || libraries.length === 0 && renderTemplate`<p class="text-gray-500 col-span-4 text-center py-8">No libraries found</p>`} </div> </section> ` })}`;
}, "/home/project/src/pages/index.astro", void 0);

const $$file = "/home/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
