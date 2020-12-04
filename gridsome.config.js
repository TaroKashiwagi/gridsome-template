// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require(`path`)

function addStyleResource (rule) {
  rule.use([`style-resource`])
    .loader(`style-resources-loader`)
    .options({
      patterns: [
        path.resolve(__dirname, `./src/styles/global.styl`),
      ],
    })
}

module.exports = {
  siteName: ``,
  titleTemplate: ``,
  siteUrl: ``,
  siteDescription: ``,
  pathPrefix: '/',
  metadata: {
    siteOgImage: ``,
  },
  plugins: [
    {
      use: `gridsome-plugin-pug`
    }
  ],
  css: {
    loaderOptions: {
      stylus: { preferPathResolver: `webpack` },
      postcss: {
        sourceMap: false,
        plugins: [
          require(`autoprefixer`)({
            flexbox: `no-2009`,
          })
        ]
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
