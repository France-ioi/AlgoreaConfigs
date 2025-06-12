/* dev config */
window.appConfig = {
  apiUrl: '/api',
  oauthServerUrl: 'https://login.france-ioi.org',
  oauthClientId: '43',
  searchApiUrl: 'https://jyz57q4k3ytekopv6tvg5bdxaq0vlgso.lambda-url.eu-west-3.on.aws/',
  // forumServerUrl: '...',
  sentryDsn: 'https://6295834d69104f54b55cc0ebe4ada310@o1167067.ingest.sentry.io/6257761',

  defaultActivityId: '4702',
  defaultSkillId: '3000',
  allUsersGroupId: '3',

  languages: [
    { tag: 'fr', path: '/fr/' },
    { tag: 'en', path: '/en/' },
  ],
  defaultTitle: 'Activities by Telecom Paris and Dartmouth college',
  allowForcedToken: true,
  authType: 'cookies',

  itemPlatformId: 'algorea_backend',

  theme: 'coursera-pt',
  featureFlags: {
    hideTaskTabs: [],
    showGroupAccessTab: true,
    showLeftMenuTabs: true,
  },

  redirects: { /* paths to be matched must not have a trailing slash */
    'home': { id: '4702', path: [] },
    'algorea/adventure': { id: '100575556387408660' },
    'officiels/algorea-serious-game/chapter': { id: '1471479157476024035', path: [ '4702' ] },
  },
};
