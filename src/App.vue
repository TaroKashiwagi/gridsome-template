<template lang="pug">
    router-view
</template>

<static-query>
query {
    metadata {
        siteName
        siteDescription
        siteUrl
        siteOgImage
    }
}
</static-query>

<script>
export default {
    metaInfo() {
        return {
            link: [
                { rel: `shortcut icon`, href: `/assets/images/favicon.ico` },
                { rel: `apple-touch-icon`, sizes: `180x180`, href: `/assets/images/apple-touch-icon.png` }
            ],
            meta: [
                { 'http-equiv': `Content-Language`, content: `ja` },
                { name: `description`, content: this.$static.metadata.siteDescription },
                { name: `keywords`, content: `` },
                { property: `og:title`, content: `` },
                { property: `og:type`, content: `website` },
                { property: `og:url`, content: this.$static.metadata.siteUrl },
                { property: `og:description`, content: this.$static.metadata.siteDescription },
                { property: `og:site_name`, content: this.$static.metadata.siteName },
                { property: `og:image`, content:  this.$static.metadata.siteOgImage },
                { property: `og:locale`, content: `ja_JP` },
                { property: `fb:app_id`, content: `` },
                { name: `twitter:card`, content: `summary_large_image` },
                { name: `twitter:site`, content: `` },
                { name: `twitter:title`, content: this.$static.metadata.siteName },
                { name: `twitter:description`, content: this.$static.metadata.siteDescription },
                { name: `twitter:image`, content: this.$static.metadata.siteOgImage },
                { name: `twitter:url`, content: this.$static.metadata.siteUrl },
                { name: `format-detection`, content: `telephone=no` },
                { name: `viewport`, key: 'viewport', content: `width=device-width, height=device-height, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, shrink-to-fit=no` }
            ]
        }
    }
}
</script>