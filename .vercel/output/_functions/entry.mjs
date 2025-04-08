import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DE0d-RYA.mjs';
import { manifest } from './manifest_DLBHCkDJ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/frameworks/_slug_.astro.mjs');
const _page3 = () => import('./pages/frameworks.astro.mjs');
const _page4 = () => import('./pages/libraries/_slug_.astro.mjs');
const _page5 = () => import('./pages/libraries.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/frameworks/[slug].astro", _page2],
    ["src/pages/frameworks/index.astro", _page3],
    ["src/pages/libraries/[slug].astro", _page4],
    ["src/pages/libraries/index.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d0c41808-66e1-41d6-878d-c2eb431ff3e4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
