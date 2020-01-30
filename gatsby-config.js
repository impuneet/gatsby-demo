module.exports = {
  siteMetadata: {
    title: 'iampuneet',
    titleTemplate: '%s · Puneet',
    description: 'Full-Stack Software Engineer interested in Node,Angular & React,JavaScript, and MongoDB',
    url: 'http://iampuneet.in'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-155135587-1",
        head: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
          resolve: 'gatsby-remark-prismjs',
          options: {
            classPrefix: 'language-',
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        }],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Puneet Sharma',
        short_name: 'iampuneet',
        start_url: 'https://iampuneet.in',
        background_color: '#00ff7f',
        theme_color: '#00ff7f',
        display: 'standalone',
      },
    }
  ],
}
