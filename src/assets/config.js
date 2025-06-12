window.appConfig = {
  apiUrl: '/api',
  oauthServerUrl: 'https://login-skool.probabl.ai',
  oauthClientId: '24',
//  searchApiUrl: '',
  forumServerUrl: 'wss://cyduaoy46h.execute-api.eu-west-3.amazonaws.com/pbl',

  sentryDsn: 'https://6295834d69104f54b55cc0ebe4ada310@o1167067.ingest.sentry.io/6257761',

  defaultActivityId: '1',

  allUsersGroupId: '3',

  languages: [
    { tag: 'en', path: '/en/' },
  ],
  defaultTitle: 'skool',
  languageSpecificTitles: {},
  leftHeaderLogoUrl: '//d2dvl3h4927j7o.cloudfront.net/deployments/pbl-prod/skolarlogo.png',

  allowForcedToken: true,
  authType: 'cookies',

  itemPlatformId: 'algorea_backend',

  theme: 'default',
  featureFlags: {
    hideTaskTabs: [],
    showLeftMenuTabs: false,
  },

  redirects: { /* paths to be matched must not have a trailing slash */
    'home': { id: '1', path: [] },

  },
};