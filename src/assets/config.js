window.appConfig = {
  apiUrl: '/api',
  oauthServerUrl: 'https://login-skolar.probabl.ai',
  oauthClientId: '24',
//  searchApiUrl: '',
//  forumServerUrl: 'wss://cyduaoy46h.execute-api.eu-west-3.amazonaws.com/pbl',

  sentryDsn: 'https://6295834d69104f54b55cc0ebe4ada310@o1167067.ingest.sentry.io/6257761',

  defaultActivityId: '1',

  allUsersGroupId: '3',

  languages: [
    { tag: 'en', path: '/en/' },
  ],
  defaultTitle: 'skolar',
  languageSpecificTitles: {},
  leftHeaderLogoUrl: '//d2dvl3h4927j7o.cloudfront.net/deployments/pbl-prod/skolarlogo.png',

  allowForcedToken: true,
  authType: 'cookies',

  itemPlatformId: 'algorea_backend',

  theme: 'default',
  featureFlags: {
    hideTaskTabs: [],
    leftMenu: {
      groups: { hide: true, showToUserIds: [1887175027913922318, 2265892292233863301, 2535979458192600277, 2925457255963088153, 5831612681781200103] },
      skills: { hide: true },
    }
  },

  redirects: { /* paths to be matched must not have a trailing slash */
    'home': { id: '1', path: [] },

  },
};