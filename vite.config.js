import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import { parseEnv } from 'node:util';
import handlebars from 'handlebars';

const pages = {"69a55a57-aca8-4221-9654-332026f87ed7-en":{"outputDir":"./mentions-legales","lang":"en","title":"Qonti | Le compagnon digital des pharmacies d'officine","cacheVersion":12,"meta":[{"name":"title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"keywords","content":"pharmacie, officine, pharmacien, Qonti, ressources pharmacie, gestion RH, contrats de travail pharmacie, fiches métier, base de connaissances, formation pharmacie, RFA, fournisseurs, groupements"},{"itemprop":"name","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"itemprop":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"twitter:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"property":"og:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:site_name","content":"Qonti | Le référentiel de connaissances et d’outils pour l’officine"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/mentions-legales/"},{"rel":"alternate","hreflang":"en","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/mentions-legales/"}]},"0ff19169-9cb7-4b19-ba94-43fac0578223-en":{"outputDir":"./politique-confidentialite","lang":"en","title":"Qonti | Le compagnon digital des pharmacies d'officine","cacheVersion":12,"meta":[{"name":"title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"keywords","content":"pharmacie, officine, pharmacien, Qonti, ressources pharmacie, gestion RH, contrats de travail pharmacie, fiches métier, base de connaissances, formation pharmacie, RFA, fournisseurs, groupements"},{"itemprop":"name","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"itemprop":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"twitter:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"property":"og:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:site_name","content":"Qonti | Le référentiel de connaissances et d’outils pour l’officine"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/politique-confidentialite/"},{"rel":"alternate","hreflang":"en","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/politique-confidentialite/"}]},"c68f934e-86ff-44c6-b74d-cf797042707b-en":{"outputDir":"./cgv","lang":"en","title":"Qonti | Le compagnon digital des pharmacies d'officine","cacheVersion":12,"meta":[{"name":"title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"keywords","content":"pharmacie, officine, pharmacien, Qonti, ressources pharmacie, gestion RH, contrats de travail pharmacie, fiches métier, base de connaissances, formation pharmacie, RFA, fournisseurs, groupements"},{"itemprop":"name","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"itemprop":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"twitter:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"property":"og:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:site_name","content":"Qonti | Le référentiel de connaissances et d’outils pour l’officine"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/cgv/"},{"rel":"alternate","hreflang":"en","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/cgv/"}]},"3b72690d-cde9-40ec-bbdf-03c60470c846-en":{"outputDir":"./cgu","lang":"en","title":"Qonti | Le compagnon digital des pharmacies d'officine","cacheVersion":12,"meta":[{"name":"title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"keywords","content":"pharmacie, officine, pharmacien, Qonti, ressources pharmacie, gestion RH, contrats de travail pharmacie, fiches métier, base de connaissances, formation pharmacie, RFA, fournisseurs, groupements"},{"itemprop":"name","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"itemprop":"description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"name":"twitter:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:title","content":"Qonti | Le compagnon digital des pharmacies d'officine"},{"property":"og:description","content":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},{"property":"og:site_name","content":"Qonti | Le référentiel de connaissances et d’outils pour l’officine"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/cgu/"},{"rel":"alternate","hreflang":"en","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/cgu/"}]},"e1648670-62e8-4462-8294-cdf98ec78ab7-en":{"outputDir":"./","lang":"en","title":"Qonti | Le référentiel de connaissances et d’outils pour l’officine","cacheVersion":12,"meta":[{"name":"title","content":"Qonti | Le référentiel de connaissances et d’outils pour l’officine"},{"name":"description","content":"Qonti aide les pharmaciens d’officine à centraliser leurs connaissances, partager les informations utiles à l’équipe et accéder à des ressources métier pour faciliter le travail au comptoir."},{"name":"keywords","content":"pharmacie officine pharmacien Qonti base de connaissances pharmacie ressources pharmacie gestion officine organisation pharmacie formation pharmacie fiches métier pharmacie protocoles officine gestion RH pharmacie contrats de travail pharmacie RFA pharmacie fournisseurs pharmacie groupements pharmacie"},{"itemprop":"name","content":"Qonti | Le référentiel de connaissances et d’outils pour l’officine"},{"itemprop":"description","content":"Qonti aide les pharmaciens d’officine à centraliser leurs connaissances, partager les informations utiles à l’équipe et accéder à des ressources métier pour faciliter le travail au comptoir."},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Qonti | Le référentiel de connaissances et d’outils pour l’officine"},{"name":"twitter:description","content":"Qonti aide les pharmaciens d’officine à centraliser leurs connaissances, partager les informations utiles à l’équipe et accéder à des ressources métier pour faciliter le travail au comptoir."},{"property":"og:title","content":"Qonti | Le référentiel de connaissances et d’outils pour l’officine"},{"property":"og:description","content":"Qonti aide les pharmaciens d’officine à centraliser leurs connaissances, partager les informations utiles à l’équipe et accéder à des ressources métier pour faciliter le travail au comptoir."},{"property":"og:site_name","content":"Qonti | Le référentiel de connaissances et d’outils pour l’officine"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://02da921a-3def-4f25-9f11-ec5d6ef5955f.weweb-preview.io/"}]}};

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

const rolldownOptionsInput = {};
for (const pageName in pages) {
    rolldownOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

function getFrontEnvironmentValues(root, mode) {
    const filePath = path.resolve(root, `.env.${mode}`);
    if (!fs.existsSync(filePath)) {
        return {};
    }

    return Object.fromEntries(Object.entries(parseEnv(fs.readFileSync(filePath, 'utf8'))).filter(([key]) => !key.startsWith('VITE_')));
}

export default defineConfig(() => {
    return {
        plugins: [vue()],
        base: "/",
        define: {
            global: 'globalThis',
            __WW_FRONT_ENV_VARIABLES__: JSON.stringify({
                staging: getFrontEnvironmentValues(__dirname, 'staging'),
                production: getFrontEnvironmentValues(__dirname, 'production'),
            }),
        },
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
            rolldownOptions: {
                input: rolldownOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    if (/Use of direct `eval`/.test(entry.message)) return;
                    return next(entry);
                },
            },
        },
        logLevel: 'warn',
    };
});
