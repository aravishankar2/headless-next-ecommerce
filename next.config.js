module.exports = {
    images: {
      loader: "cloudinary",
      path: "http://res.cloudinary.com/surface-group",
      domains: ["res.cloudinary.com"]
    },
    publicRuntimeConfig: {
      CONTENTFUL_ACCESS_TOKEN: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
      CONTENTFUL_ENVIRONMENT: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
      CONTENTFUL_SPACE_ID: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    },
  };