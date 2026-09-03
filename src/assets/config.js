window.appConfig = {
  apiUrl: '/api',
  oauthServerUrl: 'https://login.be-oi.be',
  oauthClientId: 'algorea',
//  searchApiUrl: '',
//  forumServerUrl: 'wss://cyduaoy46h.execute-api.eu-west-3.amazonaws.com/thy',

  slsWsUrl: 'wss://x6g6cbrgo0.execute-api.eu-central-1.amazonaws.com/beoi',
  slsApiUrl: '/sls',

  sentryDsn: 'https://6295834d69104f54b55cc0ebe4ada310@o1167067.ingest.sentry.io/6257761',

  defaultActivityId: '1',

  allUsersGroupId: '3',

  languages: [
    { tag: 'en', path: '/en/' },
    { tag: 'fr', path: '/fr/' },
    { tag: 'nl', path: '/nl/' },
    { tag: 'de', path: '/de/' },
  ],
  defaultTitle: 'beOI Lab',
  languageSpecificTitles: {},

  allowForcedToken: true,
  authType: 'cookies',

  itemPlatformId: 'algorea_backend',

  featureFlags: {

  },

  leftMenuTabs: [
    { type: 'activities', showTo: 'all', content: { id: '1', path: [] }, caption: { default: 'Home', fr: 'Accueil', de: 'Startseite', nl: 'Home' }, icon: 'ph ph-house' },
    { type: 'groups', showTo: 'all' },
  ],

  redirects: { /* paths to be matched must not have a trailing slash */
    'home': { id: '1', path: [] },
  },

  hideLeftMenuTreeOnItemIds: [ "1" ],

};