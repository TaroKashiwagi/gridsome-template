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
			title: this.$static.metadata.siteName,
			meta: [
				{ key: 'description', name: 'description', content: this.$static.metadata.siteDescription },
				{ name: "keyword", content: '' },
				{ key: "og:type", name: 'og:type',content: 'website' },
				{ name: 'og:url', content: this.$static.metadata.siteUrl },
				{ key: "og:title", name: 'og:title', content: this.$static.metadata.siteName },
				{ name: 'og:image', content: this.$static.metadata.siteOgImage },
				{ name: 'og:description', content: this.$static.metadata.siteDescription },
				{ name: "twitter:card", content: 'summary_large_image' },
			]
		}
	}
}
</script>