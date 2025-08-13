window.appConfig = {
  apiUrl: '/api',
  oauthServerUrl: 'https://login-learn.thymio.org',
  oauthClientId: '25',
//  searchApiUrl: '',
//  forumServerUrl: 'wss://cyduaoy46h.execute-api.eu-west-3.amazonaws.com/thy',

  sentryDsn: 'https://6295834d69104f54b55cc0ebe4ada310@o1167067.ingest.sentry.io/6257761',

  defaultActivityId: '1',

  allUsersGroupId: '3',

  languages: [
    { tag: 'en', path: '/en/' },
    { tag: 'fr', path: '/fr/' },
  ],
  defaultTitle: 'Thymio Learn',
  languageSpecificTitles: {},
//  leftHeaderLogoUrl: '//d2dvl3h4927j7o.cloudfront.net/deployments/...',

  allowForcedToken: true,
  authType: 'cookies',

  itemPlatformId: 'algorea_backend',

  theme: 'thymio',

  featureFlags: {
    hideTaskTabs: [ 'alg-chapter-progress' ],
    leftMenu: {
      groups: { hide: true, showToUserIds: [ '5474504249508524668', '5731266669701761019' ] },
      skills: { hide: true },
    }
  },

  redirects: { /* paths to be matched must not have a trailing slash */
    'home': { id: '1', path: [] },

  },
};