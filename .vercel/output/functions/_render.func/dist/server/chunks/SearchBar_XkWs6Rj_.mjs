import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate, b as addAttribute } from './astro/server_nzPgjIaO.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12 md:py-20 px-4"> <div class="container mx-auto max-w-4xl text-center"> <h1 class="text-3xl md:text-4xl font-bold mb-4">${title}</h1> <p class="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto">${subtitle}</p> </div> </div>`;
}, "/home/project/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$SearchBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SearchBar;
  const { placeholder = "Search..." } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative max-w-md w-full mx-auto"> <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400"> <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path> </svg> </div> <input type="search" class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-primary-500 focus:border-primary-500"${addAttribute(placeholder, "placeholder")}> </div>`;
}, "/home/project/src/components/SearchBar.astro", void 0);

export { $$Hero as $, $$SearchBar as a };
