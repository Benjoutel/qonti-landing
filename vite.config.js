import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"index":{"outputDir":"./","lang":"en","title":"Qonti | Le compagnon digital des pharmacies d'officine","cacheVersion":8,"meta":[{"name":"title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"keywords","content":"pharmacie, officine, pharmacien, Qonti, ressources pharmacie, gestion RH, contrats de travail pharmacie, fiches métier, base de connaissances, formation pharmacie, RFA, fournisseurs, groupements"},{"itemprop":"name","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"itemprop":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"twitter:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"property":"og:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:site_name","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/"}]},"mentions-legales":{"outputDir":"./mentions-legales","lang":"en","title":"Qonti | Le compagnon digital des pharmacies d'officine","cacheVersion":8,"meta":[{"name":"title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"keywords","content":"pharmacie, officine, pharmacien, Qonti, ressources pharmacie, gestion RH, contrats de travail pharmacie, fiches métier, base de connaissances, formation pharmacie, RFA, fournisseurs, groupements"},{"itemprop":"name","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"itemprop":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"twitter:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"property":"og:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:site_name","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/mentions-legales/"},{"rel":"alternate","hreflang":"en","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/mentions-legales/"}]},"politique-confidentialite":{"outputDir":"./politique-confidentialite","lang":"en","title":"Qonti | Le compagnon digital des pharmacies d'officine","cacheVersion":8,"meta":[{"name":"title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"keywords","content":"pharmacie, officine, pharmacien, Qonti, ressources pharmacie, gestion RH, contrats de travail pharmacie, fiches métier, base de connaissances, formation pharmacie, RFA, fournisseurs, groupements"},{"itemprop":"name","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"itemprop":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"twitter:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"property":"og:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:site_name","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/politique-confidentialite/"},{"rel":"alternate","hreflang":"en","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/politique-confidentialite/"}]},"cgv":{"outputDir":"./cgv","lang":"en","title":"Qonti | Le compagnon digital des pharmacies d'officine","cacheVersion":8,"meta":[{"name":"title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"keywords","content":"pharmacie, officine, pharmacien, Qonti, ressources pharmacie, gestion RH, contrats de travail pharmacie, fiches métier, base de connaissances, formation pharmacie, RFA, fournisseurs, groupements"},{"itemprop":"name","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"itemprop":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"twitter:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"property":"og:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:site_name","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/cgv/"},{"rel":"alternate","hreflang":"en","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/cgv/"}]},"cgu":{"outputDir":"./cgu","lang":"en","title":"Qonti | Le compagnon digital des pharmacies d'officine","cacheVersion":8,"meta":[{"name":"title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"keywords","content":"pharmacie, officine, pharmacien, Qonti, ressources pharmacie, gestion RH, contrats de travail pharmacie, fiches métier, base de connaissances, formation pharmacie, RFA, fournisseurs, groupements"},{"itemprop":"name","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"itemprop":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"twitter:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"property":"og:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:site_name","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/cgu/"},{"rel":"alternate","hreflang":"en","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/cgu/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        structuredData: pageConfig.structuredData || null,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});
