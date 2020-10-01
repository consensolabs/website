module.exports = {
  siteMetadata: {
    title: 'Consenso Labs',
    titleTemplate: '%s The Blockchin Research Lab',
    description:
      'Consenso Labs is a blockchain research and development lab where we confront ourselves to solve some of the most challenging finance, legal and economical use cases by utilizing the cutting edge technology platforms to achieve efficiency and the consensus among the disparate parties.',
    url: 'www.https://consensolabs.com/',
    image: './static/favicon-32x32',
    twitter: '@consensolabs',
    LinkedIn: 'https://www.linkedin.com/company/consensolabs/',
  },

  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,

      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-178594238-1',
      },
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: true,
    },
    `gatsby-plugin-react-helmet`,
  ],
};
