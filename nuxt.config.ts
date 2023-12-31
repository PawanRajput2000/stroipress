// https://v3.nuxtjs.org/api/configuration/nuxt.config
// https://developers.storipress.com/karbon/2gLtVFS6QEkdvKF7fkRng1/resources/2YC1RCw9q71PKKjL9B8cXN
import { createArticleRoute, createDeskRoute } from '@storipress/karbon/helper'

export default defineNuxtConfig({
  modules: ['@storipress/karbon'],
  routeRules: {
    '/posts/*': { swr: true },
  },
  runtimeConfig: {
    storipress: {
      apiHost: process.env.NUXT_KARBON_API_HOST,
      apiToken: process.env.NUXT_KARBON_API_TOKEN,
      clientId: process.env.NUXT_KARBON_CLIENT_ID,
      stripeKey: process.env.NUXT_KARBON_STRIPE_KEY,
      searchKey: process.env.NUXT_KARBON_SEARCH_KEY,
      searchDomain: process.env.NUXT_KARBON_SEARCH_DOMAIN,
      encryptKey: process.env.NUXT_KARBON_ENCRYPT_KEY,
    },
    public: {
      trailingSlash: Boolean(process.env.NUXT_PUBLIC_TRAILING_SLASH) || false,
      titleSeparator: process.env.NUXT_PUBLIC_TITLE_SEPARATOR || '|',
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || 'Karbon',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000/',
      siteDescription: process.env.NUXT_PUBLIC_SITE_URL || 'My publication',
      language: process.env.NUXT_PUBLIC_LANGUAGE || 'en',
    },
  },

  karbon: {
    resources: {
      article: createArticleRoute('/posts/{slug}'),
      desk: createDeskRoute('/desks/{slug}'),
    },
  },
})
