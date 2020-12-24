// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path")
const purgecss = require("@fullhuman/postcss-purgecss")

function addStyleResource (rule) {
  rule
    .use([`style-resource`])
    .loader(`style-resources-loader`)
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/styl/*.styl")],
    })
}

const postcssPlugins = []
const isProduction = process.env.NODE_ENV === "production"
const isPreview = process.env.NODE_PREVIEW === "true"
const isDevelop = process.env.NODE_ENV === "development"

if(isPreview || isProduction) postcssPlugins.push(purgecss(require("./purgecss.config.js")))

module.exports = {
  siteName: "",
  titleTemplate: "%s",
  siteUrl: "",
  siteDescription: "",
  pathPrefix: isPreview || isDevelop ? "" : "",
  metadata: {
    siteOgImage: "",
  },
  plugins: [
    { use: "gridsome-plugin-pug" },
    { use: "gridsome-plugin-tailwindcss" }
  ],
  css: {
    loaderOptions: {
      stylus: {},
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  chainWebpack(config) {
    config.resolve.alias.set(`@images`, `@/assets/images`)
    const types = [`vue-modules`, `vue`, `normal-modules`, `normal`]
    types.forEach(type => {
      addStyleResource(config.module.rule(`stylus`).oneOf(type))
    })
  },
}
