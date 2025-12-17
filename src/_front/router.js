import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"02da921a-3def-4f25-9f11-ec5d6ef5955f","homePageId":"e1648670-62e8-4462-8294-cdf98ec78ab7","authPluginId":null,"baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"e1648670-62e8-4462-8294-cdf98ec78ab7","linkId":"e1648670-62e8-4462-8294-cdf98ec78ab7","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"7ea5ba1e-baa9-479c-817d-96dd863f000d","sectionTitle":"Navbar","linkId":"b21ceacd-14fc-4790-bf07-cd21b52fbb35"},{"uid":"2fc1a181-5aa2-4912-ba4b-52bc14dd47da","sectionTitle":"Header","linkId":"c45601f8-7a5e-423d-a961-0a69320d2b55"},{"uid":"105c3a7d-810f-479c-beee-c80ea6bcb45f","sectionTitle":"Qonti One Section","linkId":"15fdf507-acbb-4a43-9edd-749f46aca4b5"},{"uid":"6607ea8b-0862-43b6-9156-b6aba5369de4","sectionTitle":"Qonti Back Section","linkId":"d858b48b-5146-4347-bd36-019e48f8d4fa"},{"uid":"b303508b-2046-482f-894a-515db8ca482e","sectionTitle":"Philosophy Section","linkId":"2e95d1ba-c7e4-4c69-956e-bd33333605c1"},{"uid":"b78e66c7-d395-4390-8ff0-337afbc8664d","sectionTitle":"Support Section","linkId":"0e160082-4add-4803-ab87-ea8f46ec283f"},{"uid":"b8d36790-f592-4666-a78f-ca44845ae715","sectionTitle":"CTA Section","linkId":"c317901e-2e90-413f-a883-9c3b71d27f9e"},{"uid":"59ccb4a7-edfe-412a-b32b-f1e813709f0b","sectionTitle":"Footer","linkId":"f61d97c7-84bd-46d3-b339-9ad8b79117d1"}],"pageUserGroups":[],"title":{"en":"Qonti | Le compagnon digital des pharmacies d'officine","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},"keywords":{"en":"pharmacie, officine, pharmacien, Qonti, ressources pharmacie, gestion RH, contrats de travail pharmacie, fiches métier, base de connaissances, formation pharmacie, RFA, fournisseurs, groupements"},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"69a55a57-aca8-4221-9654-332026f87ed7","linkId":"69a55a57-aca8-4221-9654-332026f87ed7","name":"Mentions légales","folder":null,"paths":{"en":"mentions-legales","default":"mentions-legales"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"7ea5ba1e-baa9-479c-817d-96dd863f000d","sectionTitle":"Navbar","linkId":"b21ceacd-14fc-4790-bf07-cd21b52fbb35"},{"uid":"eb81213b-9ad7-4b51-8945-307ef362ff6a","sectionTitle":"Support Section","linkId":"7770f450-aeff-4c82-a847-3e2f765f8819"},{"uid":"59ccb4a7-edfe-412a-b32b-f1e813709f0b","sectionTitle":"Footer","linkId":"f61d97c7-84bd-46d3-b339-9ad8b79117d1"}],"pageUserGroups":[],"title":{"en":"Qonti | Le compagnon digital des pharmacies d'officine","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},"keywords":{"en":"pharmacie, officine, pharmacien, Qonti, ressources pharmacie, gestion RH, contrats de travail pharmacie, fiches métier, base de connaissances, formation pharmacie, RFA, fournisseurs, groupements"},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"0ff19169-9cb7-4b19-ba94-43fac0578223","linkId":"0ff19169-9cb7-4b19-ba94-43fac0578223","name":"Politique confidentialité","folder":null,"paths":{"en":"politique-confidentialite","default":"politique-confidentialite"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"7ea5ba1e-baa9-479c-817d-96dd863f000d","sectionTitle":"Navbar","linkId":"b21ceacd-14fc-4790-bf07-cd21b52fbb35"},{"uid":"2b6287da-d87d-49a0-a2b7-8c9586513026","sectionTitle":"Support Section","linkId":"04af95b3-46ec-4bd9-8727-82e5fa40a4c5"},{"uid":"59ccb4a7-edfe-412a-b32b-f1e813709f0b","sectionTitle":"Footer","linkId":"f61d97c7-84bd-46d3-b339-9ad8b79117d1"}],"pageUserGroups":[],"title":{"en":"Qonti | Le compagnon digital des pharmacies d'officine","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},"keywords":{"en":"pharmacie, officine, pharmacien, Qonti, ressources pharmacie, gestion RH, contrats de travail pharmacie, fiches métier, base de connaissances, formation pharmacie, RFA, fournisseurs, groupements"},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c68f934e-86ff-44c6-b74d-cf797042707b","linkId":"c68f934e-86ff-44c6-b74d-cf797042707b","name":"CGV","folder":null,"paths":{"en":"cgv","default":"cgv"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"7ea5ba1e-baa9-479c-817d-96dd863f000d","sectionTitle":"Navbar","linkId":"b21ceacd-14fc-4790-bf07-cd21b52fbb35"},{"uid":"f1ff69e4-d916-4363-a9c0-11dbd417cb1e","sectionTitle":"Support Section","linkId":"8c06b100-2f70-4a9c-999f-e05d8b533a1e"},{"uid":"59ccb4a7-edfe-412a-b32b-f1e813709f0b","sectionTitle":"Footer","linkId":"f61d97c7-84bd-46d3-b339-9ad8b79117d1"}],"pageUserGroups":[],"title":{"en":"Qonti | Le compagnon digital des pharmacies d'officine","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},"keywords":{"en":"pharmacie, officine, pharmacien, Qonti, ressources pharmacie, gestion RH, contrats de travail pharmacie, fiches métier, base de connaissances, formation pharmacie, RFA, fournisseurs, groupements"},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"3b72690d-cde9-40ec-bbdf-03c60470c846","linkId":"3b72690d-cde9-40ec-bbdf-03c60470c846","name":"CGU","folder":null,"paths":{"en":"cgu","default":"cgu"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"7ea5ba1e-baa9-479c-817d-96dd863f000d","sectionTitle":"Navbar","linkId":"b21ceacd-14fc-4790-bf07-cd21b52fbb35"},{"uid":"6bc28b40-582e-4bd9-a24a-2fb98f588e7c","sectionTitle":"Support Section","linkId":"717be1df-86c9-4b20-a998-1e1e0e096483"},{"uid":"59ccb4a7-edfe-412a-b32b-f1e813709f0b","sectionTitle":"Footer","linkId":"f61d97c7-84bd-46d3-b339-9ad8b79117d1"}],"pageUserGroups":[],"title":{"en":"Qonti | Le compagnon digital des pharmacies d'officine","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Qonti aide les pharmaciens d’officine à gagner du temps au quotidien grâce à des outils intuitifs, des modèles de documents, et une base de connaissances métier claire et à jour."},"keywords":{"en":"pharmacie, officine, pharmacien, Qonti, ressources pharmacie, gestion RH, contrats de travail pharmacie, fiches métier, base de connaissances, formation pharmacie, RFA, fournisseurs, groupements"},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"cd33cf33-e29f-4e8c-ac26-b997fe507ce7","name":"Xano","namespace":"xano"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 7;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
