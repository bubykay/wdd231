/**
 * Dynamically set meta tags and links in the HTML document.
 * @param {Object} config - Configuration object for meta tags and links.
 */
function setMetaTags(config) {
    if (config.title) {
        document.title = config.title;
    }

    if (config.meta) {
        config.meta.forEach((meta) => {
            let metaTag = document.querySelector(`meta[name="${meta.name}"]`);
            if (!metaTag) {
                metaTag = document.createElement('meta');
                metaTag.name = meta.name;
                document.head.appendChild(metaTag);
                metaTag.content = meta.content;
            }
        });
    }

    if (config.links) {
        config.links.forEach((link) => {
            let linkTag = document.querySelector(`link[rel="${link.rel}"][href="${link.href}"]`);
            if (!linkTag) {
                linkTag = document.createElement('link');
                linkTag.rel = link.rel;
                linkTag.href = link.href;
                if (link.type) linkTag.type = link.type;
                document.head.appendChild(linkTag);
            }
        });
    }

    if (config.scripts) {
        config.scripts.forEach((script) => {
            let scriptTag = document.querySelector(`script[src="${script.src}"]`);
            if (!scriptTag) {
                scriptTag = document.createElement('script');
                scriptTag.src = script.src;
                scriptTag.defer = script.defer;
                document.head.appendChild(scriptTag);
            }
        });
    }
}

setMetaTags({
    title: 'Ekiti State Chamber of Commerce',
    meta: [
        {
            name: 'description',
            content:
                'Discover the Ekiti State Chamber of Commerce (EKICCIMA), a hub for business growth, trade advocacy, and economic development.',
        },
        {
            name: 'keywords',
            content: 'Ekiti, Chamber of Commerce, EKICCIMA, Business, Trade, Economy',
        },
        { name: 'author', content: 'Kayode Adetayo' },
    ],
    links: [
        { rel: 'icon', href: 'images/favicon.ico', type: 'image/x-icon' },
        { rel: 'stylesheet', href: 'styles/styles.css' },
    ],
    scripts: [
        { src: 'scripts/header.js', defer: true },
        { src: 'scripts/footer.js', defer: true },
    ],
});
