<template lang="pug">
	router-view
</template>

<static-query>
query {
	metadata {
		url
		title
		keywords
		description
		twitter_card
		twitter_site
		twitter_description
		siteOgImage
	}
}
</static-query>

<script>
export default {
	metaInfo() {
		return {
			title: this.$static.metadata.title,
			meta: [
				{ key: 'description', name: 'description', content: this.$static.metadata.description },
				{ name: "keyword", content: this.$static.metadata.keywords },
				{ key: "og:type", name: 'og:type',content: 'website' },
				{ name: 'og:url', content: this.$static.metadata.url },
				{ key: "og:title", name: 'og:title', content: this.$static.metadata.title },
				{ name: 'og:image', content: this.$static.metadata.siteOgImage },
				{ name: 'og:description', content: this.$static.metadata.description },
				{ name: "twitter:card", content: this.$static.metadata.twitter_card },
				{ name: "twitter:site", content: this.$static.metadata.twitter_site }
			]
		}
	}
}
</script>