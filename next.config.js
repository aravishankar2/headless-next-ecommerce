module.exports = {
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/surface-group",
    domains: ["res.cloudinary.com"],
  },
  target: 'serverless',
  publicRuntimeConfig: {
    CONTENTFUL_ACCESS_TOKEN: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
    CONTENTFUL_SPACE_ID: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    PUBLIC_SNIPCART_API_KEY: process.env.NEXT_PUBLIC_SNIPCART_API_KEY,
  },
};
