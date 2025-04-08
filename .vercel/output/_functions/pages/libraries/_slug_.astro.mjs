/* empty css                                     */
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_nzPgjIaO.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_0qGGmiQj.mjs';
import { s as supabase } from '../../chunks/supabase_B_9mllgZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { data: library, error: libraryError } = await supabase.from("libraries").select("*").eq("slug", slug).single();
  if (libraryError || !library) {
    return Astro2.redirect("/404");
  }
  const { data: libraryFrameworks } = await supabase.from("library_frameworks").select("framework_id, is_primary").eq("library_id", library.id);
  const frameworkIds = libraryFrameworks?.map((lf) => lf.framework_id) || [];
  const { data: relatedFrameworks } = await supabase.from("frameworks").select("id, name, slug, icon_url").in("id", frameworkIds);
  const primaryFrameworkId = libraryFrameworks?.find((lf) => lf.is_primary)?.framework_id;
  const primaryFramework = relatedFrameworks?.find((f) => f.id === primaryFrameworkId);
  let galleryImages = [];
  try {
    if (library.gallery_images && typeof library.gallery_images === "string" && library.gallery_images.trim() !== "") {
      galleryImages = JSON.parse(library.gallery_images);
    }
  } catch (error) {
    console.error("Error parsing gallery images:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": library.title || library.name, "description": library.meta_description || library.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden mb-8"> <div class="p-6 md:p-8"> <div class="flex flex-col md:flex-row md:items-center gap-6 mb-6"> <div class="flex-shrink-0"> ${library.icon_url ? renderTemplate`<img${addAttribute(library.icon_url, "src")}${addAttribute(library.name, "alt")} class="w-16 h-16 object-contain">` : renderTemplate`<div class="w-16 h-16 bg-primary-100 text-primary-600 rounded-md flex items-center justify-center"> <span class="font-bold text-2xl">${library.name.charAt(0)}</span> </div>`} </div> <div class="flex-grow"> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"> <h1 class="text-3xl font-bold text-gray-900">${library.title || library.name}</h1> ${library.pricing && renderTemplate`<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"> ${library.pricing} </span>`} </div> ${primaryFramework && renderTemplate`<div class="mt-2 flex items-center gap-2"> <span class="text-sm text-gray-500">Built for:</span> <a${addAttribute(`/frameworks/${primaryFramework.slug}`, "href")} class="inline-flex items-center gap-1.5"> ${primaryFramework.icon_url ? renderTemplate`<img${addAttribute(primaryFramework.icon_url, "src")}${addAttribute(primaryFramework.name, "alt")} class="w-4 h-4 object-contain">` : null} <span class="text-sm font-medium text-primary-600 hover:text-primary-700"> ${primaryFramework.name} </span> </a> </div>`} </div> </div> <div class="prose max-w-none mb-8"> <p class="text-gray-700">${library.description}</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"> <div class="bg-gray-50 p-4 rounded-lg"> <div class="text-sm text-gray-500 mb-1">GitHub Stars</div> <div class="font-semibold text-lg">${library.github_stars?.toLocaleString() || "N/A"}</div> </div> <div class="bg-gray-50 p-4 rounded-lg"> <div class="text-sm text-gray-500 mb-1">NPM Downloads</div> <div class="font-semibold text-lg">${library.npm_downloads?.toLocaleString() || "N/A"}</div> </div> <div class="bg-gray-50 p-4 rounded-lg"> <div class="text-sm text-gray-500 mb-1">Latest Version</div> <div class="font-semibold text-lg">${library.latest_version || "N/A"}</div> </div> <div class="bg-gray-50 p-4 rounded-lg"> <div class="text-sm text-gray-500 mb-1">Components</div> <div class="font-semibold text-lg">${library.total_components || "N/A"}</div> </div> </div> <div class="flex flex-wrap gap-3"> ${library.website_url && renderTemplate`<a${addAttribute(library.website_url, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"></path> </svg>
Website
</a>`} ${library.github_url && renderTemplate`<a${addAttribute(library.github_url, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg>
GitHub
</a>`} ${library.npm_url && renderTemplate`<a${addAttribute(library.npm_url, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"> <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"> <path d="M0 0v24h24V0H0zm12 18.29v-4.17H8.04V6.12h15.92v12.17H12z"></path> </svg>
NPM
</a>`} </div> </div> </div> ${library.installation_command && renderTemplate`<div class="mb-8"> <h2 class="text-xl font-bold text-gray-900 mb-3">Installation</h2> <div class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto"> <code class="text-sm font-mono">${library.installation_command}</code> </div> </div>`}${galleryImages.length > 0 && renderTemplate`<div class="mb-8"> <h2 class="text-xl font-bold text-gray-900 mb-4">Gallery</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> ${galleryImages.map((image) => renderTemplate`<div class="border border-gray-200 rounded-lg overflow-hidden"> <img${addAttribute(image, "src")}${addAttribute(`${library.name} example`, "alt")} class="w-full h-auto"> </div>`)} </div> </div>`}${library.customization && renderTemplate`<div class="mb-8"> <h2 class="text-xl font-bold text-gray-900 mb-3">Customization</h2> <div class="prose max-w-none"> <p class="text-gray-700">${library.customization}</p> </div> </div>`}${relatedFrameworks && relatedFrameworks.length > 0 && renderTemplate`<div class="mb-8"> <h2 class="text-xl font-bold text-gray-900 mb-4">Compatible Frameworks</h2> <div class="flex flex-wrap gap-3"> ${relatedFrameworks.map((framework) => renderTemplate`<a${addAttribute(`/frameworks/${framework.slug}`, "href")} class="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"> ${framework.icon_url && renderTemplate`<img${addAttribute(framework.icon_url, "src")}${addAttribute(framework.name, "alt")} class="w-5 h-5 object-contain">`} <span class="text-sm font-medium">${framework.name}</span> </a>`)} </div> </div>`}` })}`;
}, "/home/project/src/pages/libraries/[slug].astro", void 0);

const $$file = "/home/project/src/pages/libraries/[slug].astro";
const $$url = "/libraries/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
